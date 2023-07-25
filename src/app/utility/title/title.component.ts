import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
@Input() titolo!:string;

formatLabel(value: number): string {
  if (value >= 1000) {
    return Math.round(value / 1000) + 'k';
  }

  return `${value}`;
}
}
