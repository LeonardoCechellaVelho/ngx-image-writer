export interface NgxImageWriterOptions {
    backgroundImage: string,
    imageWidth: number,
    imageHeight: number,
    fields: NgxImageWriterFields[]
}

export interface NgxImageWriterFields {
    textAlign: string,
    content: string,
    font: string,
    lineHeight: number,
    lineWidth?: number,
    x: number,
    y: number
}