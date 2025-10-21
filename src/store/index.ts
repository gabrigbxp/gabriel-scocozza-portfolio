import { combineReducers, configureStore } from '@reduxjs/toolkit';
import jsDosReducer from './jsDos';
import localeReducer from './locale';
import weatherReducer from './weather';

const reducer = combineReducers({
  jsDos: jsDosReducer,
  locale: localeReducer,
  weather: weatherReducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer,
    preloadedState,
  });

export type RootState = ReturnType<typeof reducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const store = setupStore();
export default store;
