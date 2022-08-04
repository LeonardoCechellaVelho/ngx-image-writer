import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'image-writer-demo';

  backgroundImage = 'https://instrucoes.atualcard.com.br/wp-content/uploads/2016/03/Marca-dágua-simples-l-Gráfica-Atual-Card.png';
  imageHeight = 350;
  imageWidth = 500;
  fields = [
    {
      textAlign: 'center',
      content: 'CERTIFICADO',
      font: '30px Arial',
      x: 250,
      y: 50,
      lineSize: 30
    },{
      textAlign: 'center',
      content: 'Envolva o corpo da função em parênteses para retornar uma expressão literal de objeto',
      font: '20px Arial',
      x: 250,
      y: 180,
      lineSize: 30
    }
  ]
}
