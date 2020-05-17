import { createSelector } from 'reselect';

const menuSelector = state => state.menu;

const menuItemSelector = createSelector(
  [menuSelector],
  menu => menu.menuItems
);

export default menuItemSelector;