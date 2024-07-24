import {configureStore} from '@reduxjs/toolkit'
import UiReducer from './../features/ui-slice'
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
    reducer:{
        UiReducer,
    },
    
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector