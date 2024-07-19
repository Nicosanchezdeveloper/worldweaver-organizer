import { Component, OnInit } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-manage-worlds',
  templateUrl: './manage-worlds.component.html',
  styleUrl: './manage-worlds.component.scss'
})
export class ManageWorldsComponent {
  cards: Card [] = [
    {
      idCard: 1,
      image: "",
      title: "title 1",
      description: "description 1"      
    },
    {
      idCard: 2,
      image: "",
      title: "title 2",
      description: "description 2"      
    }
  ];
}
