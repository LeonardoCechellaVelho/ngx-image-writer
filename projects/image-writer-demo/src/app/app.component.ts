import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'image-writer-demo';
  options = {
    backgroundImage: 'https://png.pngtree.com/thumb_back/fw800/back_pic/04/49/70/73585bc614a0327.jpg',
    imageHeight: 720,
    imageWidth: 1080,
    fields: [
      {
        textAlign: 'center',
        content: 'LOREM IPSUM',
        font: '40px Brush Script MT',
        x: 540,
        y: 150,
        lineHeight: 30
      },{
        textAlign: 'center',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        font: '30px Brush Script MT',
        x: 540,
        y: 230,
        lineHeight: 30,
        lineWidth: 900
      },{
        textAlign: 'center',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        font: '30px Brush Script MT',
        x: 540,
        y: 500,
        lineHeight: 30,
        lineWidth: 900
      }
    ]
  }

  
}
