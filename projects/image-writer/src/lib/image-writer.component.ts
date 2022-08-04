import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgxImageWriter } from './image-writer.model';

@Component({
  selector: 'lib-image-writer',
  template: `
    <div id="image-writer">
      <canvas #imageWriterCanvas>
      </canvas>
    </div>
  `,
  styles: []
})
export class ImageWriterComponent implements OnInit {
  @ViewChild('imageWriterCanvas', { static: true }) imageWriterCanvas!: ElementRef;
  @Input('backgroundImage') backgroundImage!: string;
  @Input('width') imageWidth!: number;
  @Input('height') imageHeight!: number;
  @Input('fields') fields!: NgxImageWriter[];

  divImgWriter!: HTMLElement | null;

  ngOnInit(): void {
    this.divImgWriter = document.getElementById('image-writer');
    const ctx = this.imageWriterCanvas.nativeElement.getContext('2d');
    this.setCanvasStyles(ctx);
    
    this.createDivs(ctx);
  }

  setCanvasStyles(ctx: any) {
    ctx.canvas.style.background = 'url(' + this.backgroundImage + ')';
    ctx.canvas.width = this.imageWidth;
    ctx.canvas.height = this.imageHeight;
    ctx.canvas.style.backgroundSize = '100% 100%';
  }

  createDivs(ctx: any) {
    this.fields.map(field => {
      ctx.font = field.font;
      ctx.textAlign = field.textAlign;
      this.breakLines(ctx, field.content, field.x, field.y, this.imageWidth, field.lineSize);
    });
  }

  breakLines(context: { measureText: (arg0: string) => any; fillText: (arg0: string, arg1: any, arg2: any) => void; }, text: string, x: any, y: any, maxWidth: number, lineHeight: any) {
    var words = text.split(' ');
        var line = '';

        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = context.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        }
        context.fillText(line, x, y);
  }

}
