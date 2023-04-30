import { configureStore } from '@reduxjs/toolkit';
import listReducer from './listSlice';
import {
  useDispatch,
  useSelector,
  TypedUseSelectorHook,
} from 'react-redux';

export const store = configureStore({
  reducer: {
    list: listReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () =>
  useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector;
