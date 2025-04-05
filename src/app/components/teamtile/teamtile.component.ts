import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-teamtile',
  imports: [],
  templateUrl: './teamtile.component.html',
  styleUrl: './teamtile.component.scss',
})
export class TeamtileComponent {
  @Input() imageUrl: string = '';
  @Input() text: string = '';

  displayedText: string = '';

  constructor() {}

  ngOnInit() {
    this.typeText();
  }

  typeText() {
    let index = 0;
    const typingSpeed = 50; // Vitesse de l'animation en ms

    const interval = setInterval(() => {
      if (index < this.text.length) {
        this.displayedText += this.text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);
  }
}
