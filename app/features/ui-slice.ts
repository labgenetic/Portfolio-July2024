import {createSlice, PayloadAction} from '@reduxjs/toolkit';


type InitialState = {
    value: UiState;
}

type UiState = {
    MenuIsOpen: boolean;
}

const initialState = {
    value:{
        MenuIsOpen: false,
    } as UiState,
} as InitialState;

export const ui = createSlice({
    name: "ui",
    initialState,
    reducers:{
        SwitchMenu: ( state)=>{
            return {
                value:{
                    MenuIsOpen: !state.value.MenuIsOpen,
                },
            }
        }
    }
})
 
export const {SwitchMenu} = ui.actions;
export default ui.reducer;