import { Injectable } from '@angular/core';
import { Paragraph, Document, TextRun, Packer, HeadingLevel, FileChild, Table, TableRow, TableCell, VerticalAlign, TextDirection, WidthType, TableOfContents, IPatch, PatchType, patchDocument } from 'docx';
import { FileSaverService } from 'ngx-filesaver';
import { NestableListItem } from '../models/nestable-list-item';
import { KeyValuePair } from '../models/key-value-pair';


export const font = "Trebuchet MS";

@Injectable({
  providedIn: 'root'
})
export class DocumentExportService {

  constructor(private fileSaver: FileSaverService) { }

  getPatches(fields: KeyValuePair[]) {
    const patches: { [key: string]: IPatch } = {};

    fields.forEach(field => {
      if (field.key)
        patches[field.key] = {
          type: PatchType.PARAGRAPH,
          children: [new TextRun({ text: field.value?.toString(), font })],
        };
    });
  
    return patches;
  }

  export(list: NestableListItem[], variables: KeyValuePair[]) {

    let children: FileChild[] = [];

    list.forEach(element => {
      if (element.templateBlock.data.type === "chapter") {
        const paragraph = new Paragraph({
          text: element.templateBlock.data.title,
          heading: HeadingLevel.HEADING_1,
        });

        children.push(paragraph);
      }

      if (element.templateBlock.data.type === "text") {
        const paragraph = new Paragraph({
          text: element.templateBlock.data.text,
        });

        children.push(paragraph);
      }

      if (element.templateBlock.data.type === "table") {
        const table = new Table({
          width: {
            size: 100,
            type: WidthType.PERCENTAGE,
          },
          rows: [new TableRow({
            children: element.templateBlock.data.columns.map((column: { name: any; }) => new TableCell({
              children: [new Paragraph({ text: column.name })],
            })),

          })],
        });

        children.push(table);
      }

      if (element.templateBlock.data.type === "toc") {
        const table = new TableOfContents(element.templateBlock.data.title, {
          hyperlink: true,
          headingStyleRange: "1-5",
        })

        children.push(table);
      }

    });

    // Documents contain sections, you can have multiple sections per document, go here to learn more about sections
    // This simple example will only contain one section
    const doc = new Document({
      features: {
        updateFields: true,
    },
      sections: [
        {
          properties: {},
          children: children,
        },
      ],
    });


    const patches = this.getPatches(variables);

    Packer.toBlob(doc).then(blob => {
      
      patchDocument({
        outputType: "blob",
        data: blob,
        patches,
      }).then((doc) => {
        this.browserSaveAs(doc, "example.docx");
        console.log("Document created successfully");
      });
    });
  }

  
  browserSaveAs(blob: any, filename: string) {
    try {
      this.fileSaver.save(blob, filename);
    }
    catch (e) {
      console.log(e);
    }
  }
}
