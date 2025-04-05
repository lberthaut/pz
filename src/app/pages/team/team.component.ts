import { Component } from '@angular/core';
import { TeamtileComponent } from '../../components/teamtile/teamtile.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  imports: [TeamtileComponent, CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {
  teamMembers = [
    {
      imageUrl: 'images/img03.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec maximus velit. Morbi viverra odio sit amet posuere posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent at interdum felis, gravida viverra lacus. Donec porta quam tortor, at tincidunt elit tempus eu. Duis congue sit amet massa id tempus. Morbi vestibulum, arcu ut facilisis elementum, neque felis viverra augue, non auctor velit felis et eros. Donec pellentesque, odio at rutrum finibus, eros felis porttitor nulla, ornare sodales est quam nec libero. Phasellus eleifend, arcu quis vehicula pulvinar, purus dolor condimentum lorem, nec condimentum tortor est eget felis. Suspendisse sollicitudin volutpat massa, id aliquam ligula. Aliquam posuere semper odio id dictum. Vestibulum accumsan aliquet ex non tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus ac lacinia urna. Praesent quis eros id augue sodales pellentesque vel vel purus. Morbi tincidunt erat nec sagittis varius.',
    },
    {
      imageUrl: 'images/img04.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec maximus velit. Morbi viverra odio sit amet posuere posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent at interdum felis, gravida viverra lacus. Donec porta quam tortor, at tincidunt elit tempus eu. Duis congue sit amet massa id tempus. Morbi vestibulum, arcu ut facilisis elementum, neque felis viverra augue, non auctor velit felis et eros. Donec pellentesque, odio at rutrum finibus, eros felis porttitor nulla, ornare sodales est quam nec libero. Phasellus eleifend, arcu quis vehicula pulvinar, purus dolor condimentum lorem, nec condimentum tortor est eget felis. Suspendisse sollicitudin volutpat massa, id aliquam ligula. Aliquam posuere semper odio id dictum. Vestibulum accumsan aliquet ex non tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus ac lacinia urna. Praesent quis eros id augue sodales pellentesque vel vel purus. Morbi tincidunt erat nec sagittis varius.',
    },
    {
      imageUrl: 'images/img05.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec maximus velit. Morbi viverra odio sit amet posuere posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent at interdum felis, gravida viverra lacus. Donec porta quam tortor, at tincidunt elit tempus eu. Duis congue sit amet massa id tempus. Morbi vestibulum, arcu ut facilisis elementum, neque felis viverra augue, non auctor velit felis et eros. Donec pellentesque, odio at rutrum finibus, eros felis porttitor nulla, ornare sodales est quam nec libero. Phasellus eleifend, arcu quis vehicula pulvinar, purus dolor condimentum lorem, nec condimentum tortor est eget felis. Suspendisse sollicitudin volutpat massa, id aliquam ligula. Aliquam posuere semper odio id dictum. Vestibulum accumsan aliquet ex non tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus ac lacinia urna. Praesent quis eros id augue sodales pellentesque vel vel purus. Morbi tincidunt erat nec sagittis varius.',
    },
    // Ajoute d'autres membres d'équipe ici
  ];
}
