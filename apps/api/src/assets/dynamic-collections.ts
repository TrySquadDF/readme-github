import dynamicCollections from './dynamic-collections.json';

export interface Node {
    name: string;
    attributes: Record<string, string>;
    content: string;
    children: (Node | undefined)[];
}

export default dynamicCollections as Record<keyof typeof dynamicCollections, Node> 