import {
  patchState,
  signalStoreFeature,
  type,
  withMethods,
} from '@ngrx/signals';
import { CatsState } from './cats.store';
import { CatsService } from '../services/cats.service';
import { inject } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pid } from 'process';
import { pipe, switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';

export function withCatsMethods() {
  return signalStoreFeature(
    { state: type<CatsState>() },
    withMethods((state, catsService = inject(CatsService)) => ({
      getRandomCats: rxMethod<any>(
        pipe(
          switchMap(async (limit) => {
            patchState(state, { loading: true });
            return catsService.getCats(limit).pipe(
              tapResponse({
                next: (cats) => patchState(state, { cats }),
                error: (error) => console.log(error),
                finalize: () => patchState(state, { loading: false }),
              })
            );
          })
        )
      ),
    }))
  );
}
