import { Icons } from "../assets/icon";
import { xml2js, js2xml, Element, Attributes } from "xml-js";

const iconPosition: [number, number][] = [
  [316, 116],
  [339.326, 78],
  [339.539, 28.5],
  [269.237, 133.025],
  [257, 85],
  [300, 60],
];

function fromNameToSvgCode(namesArray: string | string[]) {
  if (typeof namesArray === "string") {
    return [Icons[namesArray].value, Icons[namesArray].defs];
  }

  let path: string = "";
  let defs: string = "";

  for (let i = 0; i < namesArray.length; i++) {
    const icon = Icons[namesArray[i]];
    if (icon) {
      if (icon.defs) {
        defs = defs ? defs + "\n" + icon.defs : icon.defs;
      }
      path = path ? path + "\n" + icon.value : icon.value;
      continue;
    }
  }

  const rootElement = xml2js(path) as Element;

  if (rootElement.elements && rootElement.elements.length > 0) {
    if (rootElement.elements.length > iconPosition.length) {
      rootElement.elements = rootElement.elements.slice(0, iconPosition.length);
    }

    for (
      let pointerPathElement = 0, pointerCoord = 0;
      pointerCoord < iconPosition.length &&
      pointerCoord < rootElement.elements.length;
      pointerCoord++
    ) {
      if (pointerCoord >= rootElement.elements.length) break;

      let size: undefined | Attributes | number =
        rootElement.elements[pointerPathElement].attributes;

      if (size) {
        const parseSize = parseFloat(size.size as string);
        size = parseSize ? parseSize : 62;
      } else {
        size = 62;
      }

      let coords = iconPosition[pointerCoord];

      const attributes: Attributes = {
        ...rootElement.elements[pointerPathElement].attributes,
        transform: `translate(${coords})`,
      };

      if (pointerCoord !== 0 && size === 62) {
        attributes.style = "scale: 0.5;";
        attributes.transform = `translate(${coords.map((value) => value * 2)})`;
      }

      rootElement.elements[pointerPathElement].attributes = attributes;

      pointerPathElement++;
    }

    path = js2xml(rootElement, { compact: false, spaces: 4 });
  }

  return [path, defs];
}

const card = (includes: string | string[]) => {
  const [paths, defs] = fromNameToSvgCode(includes);

  return `<svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style xmlns="http://www.w3.org/2000/svg">
    

  @keyframes cAnimate {
    0% { 
      fill-opacity: .1
    }
    50% { 
      fill-opacity: 0.75
    }
    100% { 
      fill-opacity: .1
    }
  }

  .c2 {
    animation: 3s ease-in-out 0.2s infinite cAnimate; 
  }
  .c4 {
    animation: 3s ease-in-out 0.7s infinite cAnimate; 
  }
  .c5 {
      animation: 3s ease-in-out 0.85s infinite cAnimate; 
  }
  .c3 {
      animation: 3s ease-in-out 1s infinite cAnimate; 
  }
  .c6 {
      animation: 3s ease-in-out 1s infinite cAnimate; 
  }
  .c1 {
      animation: 3s ease-in-out 1.2s infinite cAnimate; 
  }
  .c7 {
      animation: 3s ease-in-out 1.2s infinite cAnimate; 
  }


  </style>
  <g clip-path="url(#clip0_1029_18)">
  <path d="M380 0H20C8.9543 0 0 8.9543 0 20V180C0 191.046 8.9543 200 20 200H380C391.046 200 400 191.046 400 180V20C400 8.9543 391.046 0 380 0Z" fill="#161B22"/>
  <path d="M20 0.5H380C390.77 0.5 399.5 9.23045 399.5 20V180C399.5 190.77 390.77 199.5 380 199.5H20C9.23045 199.5 0.5 190.77 0.5 180V20C0.5 9.23045 9.23045 0.5 20 0.5Z" stroke="white" stroke-opacity="0.25"/>
  </g>
  <path xmlns="http://www.w3.org/2000/svg" d="M48.08 39.2321H36.02V28.6481H31.7V54.0281H36.02V43.1921H48.08V54.0281H52.4V28.6481H48.08V39.2321ZM59.6939 32.6441C61.1699 32.6441 62.2499 31.6001 62.2499 30.1241C62.2499 28.6481 61.1699 27.5681 59.6939 27.5681C58.1819 27.5681 57.1019 28.6481 57.1019 30.1241C57.1019 31.6001 58.1819 32.6441 59.6939 32.6441ZM61.7459 54.0281V35.3081H57.6059V54.0281H61.7459ZM82.5582 50.4281C81.1542 50.4281 80.4702 49.7441 80.4702 48.3401V38.9081H86.0502V35.3081H80.4702V29.9081H77.3742L76.3302 35.3081H73.2702V38.9081H76.3302V48.3401C76.3302 52.0121 78.4542 54.0281 82.5582 54.0281H86.0502L86.4102 50.4281H82.5582ZM93.9842 54.0281V43.1921C93.9842 40.5281 95.7842 38.6561 98.2682 38.6561C100.68 38.6561 102.372 40.5281 102.372 43.1921V54.0281H106.512V42.7241C106.512 38.2241 103.452 34.9481 99.3842 34.9481C97.2242 34.9481 95.2082 35.9921 93.9842 37.7561V28.6481H89.8442V54.0281H93.9842ZM129.364 44.4521C129.364 39.0521 125.332 34.9481 119.644 34.9481C113.956 34.9481 109.924 39.0161 109.924 44.6681C109.924 50.3201 113.956 54.3881 119.644 54.3881C123.532 54.3881 127.204 52.5521 128.608 48.9881L124.72 48.3401C123.82 49.6721 122.092 50.6081 119.896 50.6081C116.728 50.6081 114.64 48.6641 114.244 45.7841H129.292C129.328 45.3881 129.364 44.9561 129.364 44.4521ZM119.644 38.5481C122.236 38.5481 124.18 40.2041 124.864 42.5441H114.496C115.18 40.1321 117.124 38.5481 119.644 38.5481ZM136.73 54.0281V42.9761C136.73 40.6001 137.882 39.2681 140.402 39.2681H142.778L142.418 35.3081H141.626C139.43 35.3081 137.738 35.9201 136.478 38.0081L135.686 35.3081H132.59V54.0281H136.73ZM163.149 44.4521C163.149 39.0521 159.117 34.9481 153.429 34.9481C147.741 34.9481 143.709 39.0161 143.709 44.6681C143.709 50.3201 147.741 54.3881 153.429 54.3881C157.317 54.3881 160.989 52.5521 162.393 48.9881L158.505 48.3401C157.605 49.6721 155.877 50.6081 153.681 50.6081C150.513 50.6081 148.425 48.6641 148.029 45.7841H163.077C163.113 45.3881 163.149 44.9561 163.149 44.4521ZM153.429 38.5481C156.021 38.5481 157.965 40.2041 158.649 42.5441H148.281C148.965 40.1321 150.909 38.5481 153.429 38.5481ZM170.623 46.1081L171.163 35.3441V28.6481H167.059V35.3441L167.599 46.1081H170.623ZM169.111 54.3881C170.551 54.3881 171.667 53.2721 171.667 51.8681C171.667 50.4281 170.551 49.3121 169.111 49.3121C167.635 49.3121 166.555 50.4281 166.555 51.8681C166.555 53.2721 167.635 54.3881 169.111 54.3881Z" fill="white"/>
  <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M140.5 14C96.0237 14 60 50.0237 60 94.5C60 130.121 83.0431 160.208 115.042 170.874C119.067 171.579 120.576 169.164 120.576 167.051C120.576 165.139 120.476 158.799 120.476 152.058C100.25 155.781 95.0175 147.127 93.4075 142.599C92.5019 140.284 88.5775 133.14 85.1562 131.228C82.3387 129.719 78.3137 125.996 85.0556 125.895C91.395 125.794 95.9231 131.731 97.4325 134.146C104.678 146.322 116.249 142.901 120.878 140.788C121.583 135.555 123.696 132.033 126.01 130.021C108.099 128.008 89.3825 121.065 89.3825 90.2737C89.3825 81.5194 92.5019 74.2744 97.6338 68.6394C96.8288 66.6269 94.0112 58.3756 98.4387 47.3069C98.4387 47.3069 105.181 45.1938 120.576 55.5581C127.016 53.7469 133.859 52.8412 140.701 52.8412C147.544 52.8412 154.386 53.7469 160.826 55.5581C176.222 45.0931 182.964 47.3069 182.964 47.3069C187.391 58.3756 184.574 66.6269 183.769 68.6394C188.901 74.2744 192.02 81.4187 192.02 90.2737C192.02 121.166 173.203 128.008 155.292 130.021C158.21 132.536 160.726 137.366 160.726 144.913C160.726 155.68 160.625 164.334 160.625 167.051C160.625 169.164 162.134 171.679 166.159 170.874C182.14 165.479 196.027 155.209 205.864 141.508C215.702 127.808 220.996 111.367 221 94.5C221 50.0237 184.976 14 140.5 14Z" fill="white" fill-opacity="0.02"/>
  <rect xmlns="http://www.w3.org/2000/svg" class="c c1" x="29" y="108.025" width="20" height="20" rx="2" fill="#26A641" fill-opacity="0.79"/>
  <rect xmlns="http://www.w3.org/2000/svg" class="c c2" x="80" y="108.025" width="20" height="20" rx="2" fill="#23893A"/>
  <rect xmlns="http://www.w3.org/2000/svg" class="c c3" x="29" y="133.025" width="20" height="20" rx="2" fill="#26A641" fill-opacity="0.28"/>
  <rect xmlns="http://www.w3.org/2000/svg" class="c c4" x="54.5" y="133.025" width="20" height="20" rx="2" fill="#23893A"/>
  <rect xmlns="http://www.w3.org/2000/svg" class="c c5" x="29" y="158.025" width="20" height="20" rx="2" fill="#23893A"/>
  <rect xmlns="http://www.w3.org/2000/svg" class="c c6" x="54.5" y="158.025" width="20" height="20" rx="2" fill="#26A641" fill-opacity="0.28"/>
  <rect xmlns="http://www.w3.org/2000/svg" class="c c7" x="80" y="158.025" width="20" height="20" rx="2" fill="#26A641" fill-opacity="0.28"/>
  ${paths}
  <defs>
  <clipPath id="clip0_1029_18">
  <rect width="400" height="200" fill="white"/>
  </clipPath>
    ${defs}
  </defs>
  </svg>
  `;
};

const warning = `<svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>

   @keyframes Blinking {
    0% { 
      fill-opacity: 0.86
    }
    50% { 
      fill-opacity: 0
    }
  }

   .warning_icon {  
        animation: 3s ease-in-out 1s infinite Blinking; 
    } 

</style>
<rect width="400" height="200" rx="20" fill="#161B22"/>
<rect x="0.5" y="0.5" width="399" height="199" rx="19.5" stroke="white" stroke-opacity="0.25"/>
<path class="warning_icon" d="M167.957 124C164.871 124 162.947 120.654 164.5 117.988L196.543 62.9389C198.086 60.2886 201.914 60.2886 203.457 62.9389L235.5 117.988C237.053 120.654 235.129 124 232.043 124H167.957ZM173.721 112.697C172.167 115.364 174.091 118.711 177.177 118.711H222.823C225.909 118.711 227.833 115.364 226.279 112.697L203.456 73.5132C201.913 70.8642 198.087 70.8642 196.544 73.5132L173.721 112.697ZM200.355 113.686C201.123 113.686 201.758 113.436 202.26 112.936C202.763 112.437 203.014 111.805 203.014 111.041C203.014 110.277 202.763 109.645 202.26 109.145C201.758 108.646 201.123 108.396 200.355 108.396C199.586 108.396 198.951 108.646 198.449 109.145C197.947 109.645 197.695 110.277 197.695 111.041C197.695 111.805 197.947 112.437 198.449 112.936C198.951 113.436 199.586 113.686 200.355 113.686ZM197.695 101.241C197.695 102.709 198.886 103.9 200.355 103.9V103.9C201.823 103.9 203.014 102.709 203.014 101.241V86.8117C203.014 85.3431 201.823 84.1526 200.355 84.1526V84.1526C198.886 84.1526 197.695 85.3431 197.695 86.8117V101.241Z" fill="#FFCD1C" fill-opacity="0.86"/>
</svg>`;

export { card, warning };
