import type { Node } from '../assets/dynamic-collections';

function buildAttributes(attributes: Record<string, string>): string {
    return Object.entries(attributes)
        .map(([key, value]) => `${key}="${value}"`)
        .join(' ');
}

export function buildComponent(component: Node): string {
    let componentHtml = `<${component.name}`;
    if (component.attributes) {
        componentHtml += ` ${buildAttributes(component.attributes)}`;
    }
    componentHtml += '>';

    if (component.children) {
        component.children.forEach((child) => {
            componentHtml += buildComponent(child);
        });
    }

    if (component.content) {
      componentHtml += component.content;
    }

    componentHtml += `</${component.name}>`;
    return componentHtml;
}