import { TemplateBlock } from "./template-block";

export interface NestableListItem {
    content: string;
    templateBlock: TemplateBlock,
    disable?: boolean;
    action: string;
    handle?: boolean;
    customDragImage?: boolean;
    children?: NestableListItem[];
  }