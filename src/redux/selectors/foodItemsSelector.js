import { createSelector } from 'reselect';

const foodSelector = state => state.food;

export const foodItemsSelector = createSelector(
  [foodSelector],
  food => food.foodItems
);