import { FormWork, Actions, ADD_FORMWORK } from "./store";

const rootState: FormWork[] = []
export const reducer = (state = rootState, action: Actions): FormWork[] => {
    switch (action.type) {
        case ADD_FORMWORK:
            return [...state, action.payload]

        default:
            return state;
    }
}