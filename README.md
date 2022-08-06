<h1 align="center">Ngx-image-writer</h1>

<p align="center">
Simple library to write in images for <a href="https://angular.io/">Angular</a>
</p>


<p align="center">
<a href="https://www.npmjs.com/package/ngx-image-writer"><img src="https://img.shields.io/badge/dynamic/json?color=brightgreen&label=npm%20package&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fleonardocechellavelho%2Fngx-image-writer%2Fmaster%2Fpackage.json&style=for-the-badge"></a>
<a href="https://github.com/LeonardoCechellaVelho/ngx-image-writer/blob/master/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/LeonardoCechellaVelho/ngx-image-writer?color=%23f86a08&style=for-the-badge"></a>
</p>


## Table of contents
- [Table of contents](#table-of-contents)
- [Features](#features)
- [Installation instructions](#installation-instructions)
- [Options](#options)
- [Fields](#fields)

---

## Features
- [x] Place multiple breakable lines in the image
- [x] Customize font-family with Web Safe Font
- [x] Allow to set a background image
- [x] Set size of the image with responsive background
- [x] Add lines by the x and y axis


## Installation instructions
Install `ngx-image-writer` from `npm`:
```bash
npm install ngx-image-writer --save
```

Add needed package to NgModule imports:
```
import { NgxImageWriterModule } from 'ngx-image-writer';

@NgModule({
  ...
  imports: [NgxImageWriterModule,...]
  ...
})
```

Add `<image-writer>` to your HTML passing options:
```
<image-writer [options]="options"></image-writer>
```

## Options
 Option  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| backgroundImage | string | no | Background image to be written on |
| imageWidth | number | yes | Width for the image |
| imageHeight | number | yes | Height for the image |
| fields | NgxImageWriterFields[] | yes | [Fields](#fields) of text to be written in the image |

## Fields
 Option  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| content | string | yes | Text to be written |
| textAlign | string | yes | Alignment of the text `start` / `end` / `left` / `center` /  `right` |
| font | string | yes | Setup [font properties for HTML canvas](https://www.w3schools.com/tags/canvas_font.asp) |
| lineHeight | number | yes | Height for the text line |
| lineWidth | number | yes | Width for the text line |
| x | number | yes | x axis position for the text |
| y | number | yes | y axis position for the text |
