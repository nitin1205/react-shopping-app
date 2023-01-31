// JS code
// import { createAction } from "../../utils/reducer/reducer.utils";
// import { CATEGORIES_ACTION_TYPES } from "./category.types";

// export const setCategories = (categoriesArray) => {
//     return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
// };

// export const fetchCategoriesStart = () => 
// createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

// export const fetchCategoriesSuccess = (categoriesArray) => 
// createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

// export const fetchCategoriesFailed = (error) => 
// createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);


// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

// export const fetchCategoriesAsync = () => async (dispatch) => {
//     dispatch(fetchCategoriesStart());

//     try {
//         const categoriesArray = await getCategoriesAndDocuments('categories');
//         dispatch(fetchCategoriesSuccess(categoriesArray));
//     } catch (err) {
//         dispatch(fetchCategoriesFailed(err))
//     };
// };

// TS code

import { CATEGORIES_ACTION_TYPES, Category } from "./category.types";
import { createAction, Action, ActionWithPayload, withMatcher } from "../../utils/reducer/reducer.utils";

export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>;

export type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, Error>;

export const fetchCategoriesSatrt = withMatcher(
    (): FetchCategoriesStart => 
        createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START));

export const fetchCategoriesSuccess = withMatcher(
    (categoriesArray: Category[]): FetchCategoriesSuccess => 
    createAction(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
        categoriesArray
    ));

export const fetchCategoriesFailed = withMatcher(
    (error: Error): FetchCategoriesFailed => 
        createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error));


















