import { signalStore, withHooks, withState } from "@ngrx/signals";
import { Cat } from "../interfaces/cat.interface";
import { withCatsSelectors } from "./cats.selectors";
import { withCatsMethods } from "./cats.methods";

export interface CatsState {
    cats: Cat[];
    loading: boolean;
  }
  
  export const initialState: CatsState = {
    cats: [],
    loading: false,
  };
  
  export const CatsStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withCatsSelectors(),
    withCatsMethods(),
    withHooks({
      onInit({ loadRandomCats }) {
        loadRandomCats(10);
      },
      onDestroy() {
        console.log('on destroy');
      },})
  );