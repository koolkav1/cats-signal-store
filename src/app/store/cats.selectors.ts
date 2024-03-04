import { signalStoreFeature, type, withComputed } from '@ngrx/signals';
import { CatsState } from './cats.store';
import { computed } from '@angular/core';

export function withCatsSelectors() {
  return signalStoreFeature(
    { state: type<CatsState>() },
    withComputed(({ cats, loading }) => ({
      catsWithLifeSpanGreaterThanTen: computed(() =>
        cats().filter((cat) => {
          if (typeof Number(cat.breeds[0].life_span)) {
            return parseInt(cat.breeds[0].life_span) >= 10;
          }
          return cat.breeds[0].life_span === ('Ten' || 'ten');
        })
      ),
    }))
  );
}
