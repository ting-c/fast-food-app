import foodItems from './../items-store/foodItems';

const INITIAL_STATE = {
  foodItems
};

const foodItemsReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    default: 
      return state;
  }
};

export default foodItemsReducer;