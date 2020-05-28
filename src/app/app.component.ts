import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = [
    {
    title:'Trees',
    imageUrl:'assets/tree.jpeg',
    username:'@Limbrit',
    content:'I love nature'

  },
  {
    title:'Mountain',
    imageUrl:'assets/mountain.jpeg',
    username:'@Sagayam',
    content:'It is beautiful to see the nature. Gods creation is awesome'

  },
  {
    title:'Biking',
    imageUrl:'assets/biking.jpeg',
    username:'@Cathrina Shinju',
    content:'I like to ride while  listening to music and enjoy the scenic beauty'

  }
]
}
