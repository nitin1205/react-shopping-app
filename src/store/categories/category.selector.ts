// JS Code

// import { createSelector } from "reselect";

// const selectCategoriesReducer = state => state.categories;

// export const selectCategories = createSelector(
//     [selectCategoriesReducer],
//     (categoriesSlice) => (
//         categoriesSlice.categories
//     )
// );

// export const selectCategoriesMap = createSelector(
//     [selectCategories],
//     (categories) => (
//         categories.reduce((acc, category) => {
//             const { title, items } = category;
//             acc[title.toLowerCase()] = items;
//                 return acc;
//             }, {})    
//     )
// );
    
// export const selectCategoriesIsLoading = createSelector(
//     [selectCategoriesReducer],
//     (categoriesSlice) => categoriesSlice.isLoading
// );

// TS Code
import { createSelector } from "reselect";

import { CategoriesState } from "./category.reducer";
import { CategoryMap } from "./category.types";

const selectCategoryReducer = (state: { categories: CategoriesState; }): CategoriesState => state.categories;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
    
);

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories): CategoryMap => 
        categories.reduce((acc, category)  => {
            const { title, items } = category;
            acc[title.toLowerCase()] = items;
            return acc;
        }, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
);