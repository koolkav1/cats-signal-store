import { Component, ContentChild, Input } from '@angular/core';
import { CardMediaDirective } from './card-media.directive';

@Component({
  selector: 'card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  host: {
    '[class.card]': 'true',
    '[class.card--rounded]': 'rounded === true || rounded === "true"'
  }
})
export class CardComponent {
  @ContentChild(CardMediaDirective) media?: CardMediaDirective;
  @Input() rounded?: boolean;

}
