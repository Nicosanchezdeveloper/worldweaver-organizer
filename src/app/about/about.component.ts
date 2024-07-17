import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  aboutTitle: string =  "About Aplication";
  aboutDescription: string = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam optio, non veniam enim consequatur ipsum ullam nesciunt, qui culpa, iure delectus eaque est quod architecto! Voluptatem repellat doloremque quas fuga?";
}
