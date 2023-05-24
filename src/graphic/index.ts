import { Canvas, createCanvas, registerFont } from "canvas";
import { LanguageInfo } from "../../api/stats";

// @test-user: mikita-kandratsyeu - big marker name
class PieChart {
  private width: number;
  private height: number;
  private canvas: Canvas;
  private ctx: CanvasRenderingContext2D;
  private centerX: number;
  private centerY: number;
  private radius: number;
  private gapDegrees: number;
  private gapRadians: number;
  private lineWidth: number;

  constructor(width: number, height: number, lineWidth = 50, margin = 0) {
    this.width = width;
    this.height = height;
    this.canvas = createCanvas(this.width, this.height);
    // @ts-ignore
    this.ctx = this.canvas.getContext("2d");
    this.centerX = this.width / 2;
    this.centerY = this.height - 30;
    this.radius = Math.min(this.centerX, this.centerY) - lineWidth - margin;
    this.gapDegrees = 5;
    this.gapRadians = (this.gapDegrees * Math.PI) / 180;
    this.lineWidth = lineWidth;

    const { x, y, widthCanvas, heightCanvas, cornerRadius } = {
      x: 0,
      y: 0,
      widthCanvas: this.canvas.width,
      heightCanvas: this.canvas.height,
      cornerRadius: 20,
    };

    this.ctx.beginPath();
    this.ctx.moveTo(x + cornerRadius, y); // перемещаемся к верхнему левому углу
    this.ctx.lineTo(x + widthCanvas - cornerRadius, y); // рисуем верхнюю горизонтальную линию
    this.ctx.arcTo(
      x + widthCanvas,
      y,
      x + widthCanvas,
      y + cornerRadius,
      cornerRadius
    ); // скругляем верхний правый угол
    this.ctx.lineTo(x + widthCanvas, y + heightCanvas - cornerRadius); // рисуем правую вертикальную линию
    this.ctx.arcTo(
      x + widthCanvas,
      y + heightCanvas,
      x + widthCanvas - cornerRadius,
      y + heightCanvas,
      cornerRadius
    ); // скругляем нижний правый угол
    this.ctx.lineTo(x + cornerRadius, y + heightCanvas);
    this.ctx.arcTo(
      x,
      y + height,
      x,
      y + heightCanvas - cornerRadius,
      cornerRadius
    ); // скругляем нижний левый угол
    this.ctx.lineTo(x, y + cornerRadius); // рисуем левую вертикальную линию
    this.ctx.arcTo(x, y, x + cornerRadius, y, cornerRadius); // скругляем верхний левый угол
    this.ctx.closePath();

    this.ctx.fillStyle = "#161B22";
    this.ctx.strokeStyle = "#505459";

    this.ctx.fill();
    this.ctx.stroke();

    registerFont("./font/VK Sans Medium.ttf", { family: "VK sans display" });
  }

  draw(
    data: Array<LanguageInfo>,
    header?: { lines?: number; change?: string }
  ) {
    const total = data.reduce((sum, { value }) => sum + value, 0);
    const angles = data.map(({ value }) => (value / total) * Math.PI); // Используем общую сумму для вычисления углов
    const startAngles = [];
    let currentAngle = Math.PI; // Начальный угол - π (Math.PI)

    for (let i = 0; i < angles.length; i++) {
      startAngles.push(currentAngle);
      currentAngle += angles[i] + this.gapRadians;
    }

    const { minX, maxX } = {
      minX:
        this.centerX +
        Math.cos(startAngles[0]) * this.radius -
        this.lineWidth / 2,
      maxX: this.centerX + this.radius * Math.cos(0) + this.lineWidth / 2,
    };

    const coordsY = this.centerY + Math.sin(startAngles[0]) * this.radius + 20;
    this.ctx.font = "10px VK sans display";
    const totalTextWidth = data.reduce((acc, currentValue) => {
      return acc + this.ctx.measureText(currentValue.name).width;
    }, 0);
    const size = maxX - minX;
    const quantitySteps = data.length - 1;
    const gap = (size - totalTextWidth) / quantitySteps;
    const markerRadius: number = 2;
    const markerGap: number = 4 + markerRadius;

    for (let i = 0, u = minX; i < data.length; i++) {
      const { color, name } = data[i];
      const startAngle = startAngles[i];
      const endAngle = startAngle + angles[i];
      const clampedStartAngle = Math.max(startAngle, Math.PI); // Минимальный угол - π (Math.PI)
      const clampedEndAngle = Math.min(endAngle, 2 * Math.PI); // Максимальный угол - 2π (2 * Math.PI)

      this.ctx.beginPath();
      this.ctx.arc(
        this.centerX,
        this.centerY,
        this.radius,
        clampedStartAngle,
        clampedEndAngle,
        false
      );
      this.ctx.lineWidth = this.lineWidth;
      this.ctx.strokeStyle = color;
      this.ctx.stroke();
      this.ctx.closePath();

      this.ctx.font = "10px VK sans display";
      const displayedText = name;
      const textWidth = this.ctx.measureText(displayedText).width;

      const pointX = u + markerRadius;

      this.ctx.beginPath();
      this.ctx.fillStyle = color;
      this.ctx.arc(pointX, coordsY - 5, markerRadius, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.fillStyle = "#FFFFFF";

      const textX = pointX + markerGap;

      this.ctx.fillText(displayedText, textX, coordsY - 1);

      u += textWidth + gap - markerGap + 1;
    }

    if (header) {
      const { lines, change } = header;

      let startCoords: number = 15;
      let heightShift: number = 0;

      if (lines) {
        this.ctx.font = "DEMIBOLD 13px VK sans display";
        this.ctx.fillStyle = "rgba(255,255,255,0.75)";
        this.ctx.fillText("Lines of code", startCoords, 20);

        const textMetrics = this.ctx.measureText("Line code");
        heightShift =
          textMetrics.actualBoundingBoxAscent +
          textMetrics.actualBoundingBoxDescent;

        const textDisplay = lines.toLocaleString("en-US");
        this.ctx.font = "20px VK sans display";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(textDisplay, startCoords, 30 + heightShift);

        startCoords += this.ctx.measureText(textDisplay).width;
      }

      if (change) {
        this.ctx.font = "DemiBold 8px VK sans display";
        this.ctx.fillStyle = "#23893A";
        this.ctx.fillText(`+ ${change}%`, startCoords + 5, 30 + heightShift);
      }
    }
  }

  saveToFile() {
    return this.canvas.toBuffer("image/png");
  }

  truncateText(text: string, maxTextWidth: number) {
    const measuredTextWidth = this.ctx.measureText(text).width;
    let displayedText = text;

    if (measuredTextWidth > maxTextWidth) {
      const ellipsisWidth = this.ctx.measureText("...").width;
      let remainingWidth = maxTextWidth - ellipsisWidth;
      let newText = "";

      for (let i = 0; i < text.length; i++) {
        const charWidth = this.ctx.measureText(text[i]).width;
        if (remainingWidth - charWidth >= 0) {
          newText += text[i];
          remainingWidth -= charWidth;
        } else {
          newText += "...";
          break;
        }
      }

      displayedText = newText;
    }

    return displayedText;
  }
}

export { PieChart };
