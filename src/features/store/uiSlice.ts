import { IDropdownTypes } from '@/components/nav/navData';
import { IProducts } from '@/components/types/productTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { slideDirection } from './helperFunctions';
import { uiType } from './uiTypes';

const initialState: uiType = {
  isShowDropdown: false,
  phoneIndex: 0,
  isShowSideBar: false,
  dropDownData: null,
  navLocation: {
    left: 0,
    right: 0,
  },
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showDropDown: (
      state,
      action: PayloadAction<{
        navItems: IDropdownTypes;
        navLocation: { left: number; right: number };
      }>
    ) => {
      const { navItems, navLocation } = action.payload;
      state.isShowDropdown = true;
      state.dropDownData = navItems;
      state.navLocation = navLocation;
    },
    showOnlyDropdown: (state, action: PayloadAction<IDropdownTypes>) => {
      state.isShowDropdown = true;
      state.dropDownData = action.payload;
    },
    showSideBar: (state) => {
      state.isShowSideBar = true;
    },
    hideSideBar: (state) => {
      state.isShowSideBar = false;
    },
    hideDropDown: (state) => {
      state.isShowDropdown = false;
      state.dropDownData = null;
    },
    nextPhoneIndex: (state, action: PayloadAction<IProducts>) => {
      state.phoneIndex = slideDirection(
        action.payload,
        state.phoneIndex,
        'next'
      );
    },
    prevPhoneIndex: (state, action: PayloadAction<IProducts>) => {
      state.phoneIndex = slideDirection(
        action.payload,
        state.phoneIndex,
        'prev'
      );
    },
  },
});

export default uiSlice.reducer;
export const {
  showDropDown,
  hideDropDown,
  nextPhoneIndex,
  prevPhoneIndex,
  showSideBar,
  hideSideBar,
  showOnlyDropdown,
} = uiSlice.actions;
