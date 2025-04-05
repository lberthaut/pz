import { Component } from '@angular/core';
import { TeamtileComponent } from '../../components/teamtile/teamtile.component';

@Component({
  selector: 'app-team',
  imports: [TeamtileComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {
  teamMembers = [
    {
      imageUrl: 'path/to/image1.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      imageUrl: 'path/to/image2.jpg',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      imageUrl: 'path/to/image3.jpg',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    // Ajoute d'autres membres d'équipe ici
  ];
}
