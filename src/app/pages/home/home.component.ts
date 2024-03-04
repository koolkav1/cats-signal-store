import { Component, inject } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { AsyncPipe } from '@angular/common';
import { CatsService } from '../../services/cats.service';
import { CardMediaDirective } from '../../components/card/card-media.directive';

@Component({
  selector: 'kk-home',
  standalone: true,
  imports: [CardComponent, AsyncPipe, CardMediaDirective],
  providers: [CatsService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  catsService = inject(CatsService);
  $cats = this.catsService.getCats();
}
