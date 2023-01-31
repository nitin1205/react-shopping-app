// JS Code

// import { CATEGORIES_ACTION_TYPES } from "./category.types";

// export const CATEGORIES_INITIAL_STATE = {
//     categories: [],
//     isLoading: false,
//     error: null
// };

// export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
//     const { type, payload } = action;
    
//     switch(type) {
//         case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
//             return { ...state, isLoading: true };
//         case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
//             return { ...state, categories: payload, isLoading: false };
//         case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
//             return { ...state, error: payload, isLoading: false };
//         default:
//             return state; 
//     };
// };

// TS Code
import { AnyAction } from "redux";

import { Category } from "./category.types";
import { fetchCategoriesSatrt, fetchCategoriesSuccess, FetchCategoriesFailed, fetchCategoriesFailed } from "./category.action";

export type CategoriesState = {
    readonly categories: Category[];
    readonly isLoading: boolean;
    readonly error: Error | null;
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
    categories: [],
    isLoading: false,
    error: null,
};

export const categoriesReducer = (
    state = CATEGORIES_INITIAL_STATE,
    action = {} as AnyAction
): CategoriesState => {
    // switch(action.type) {
    //     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
    //         return { ...state, isLoading: true }
    //     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
    //         return {...state, categories: action.payload, isLoading: false };
    //     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
    //         return { ...state, error: action.payload, isLoading: false };
    //     default:
    //         return state;
    //     }
    if (fetchCategoriesSatrt.match(action)) {
        return { ...state, isLoading: true };
    };

    if (fetchCategoriesSuccess.match(action)) {
        return { ...state, isLoading: false, categories: action.payload};
    }

    if (fetchCategoriesFailed.match(action)) {
        return { ...state, isLoading: false };
    }

    return state;
    };
