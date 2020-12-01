import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { reducer } from "./reducer";

export interface FormWork {
    text: string
}

export const ADD_FORMWORK = 'ADD_FORMWORK'
export const AddFormWorkSuccess = (formwork: FormWork): AddAction => {
    return {
        type: ADD_FORMWORK,
        payload: formwork
    }
}
export const AddFormWork = (formwork: FormWork): any => {
    return (dispatch: any) => {
        dispatch(AddFormWorkSuccess(formwork))
    }
}

export interface AddAction {
    type: typeof ADD_FORMWORK,
    payload: FormWork
}

export type Actions = AddAction

export const rootReducer = combineReducers({
    store: reducer
})
export type rootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<rootState, Actions>)))