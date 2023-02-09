import { IDropdownTypes } from '@/components/nav/navData';
import { IProducts } from '@/components/types/productTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { slideDirection } from './helperFunctions';
import { dropDownTitleAndLocationType, uiType } from './uiTypes';

const initialState: uiType = {
  isShowDropdown: false,
  phoneIndex: 0,
  isShowSideBar: false,
  dropdownTitle: '',
  navLocation: {
    left: 0,
    right: 0,
  },
  isDropDownFilter: false,
  productFilterOption: 'all',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showDropDownWithLocation: (
      state,
      action: PayloadAction<dropDownTitleAndLocationType>
    ) => {
      const { dropdownTitle, location } = action.payload;
      state.isShowDropdown = true;
      state.navLocation = location;
      state.dropdownTitle = dropdownTitle;
    },
    showOnlyDropdown: (state, action: PayloadAction<string>) => {
      state.isShowDropdown = true;
      state.dropdownTitle = action.payload;
    },
    showSideBar: (state) => {
      state.isShowSideBar = true;
      state.isShowDropdown = false;
      state.dropdownTitle = '';
    },
    hideSideBar: (state) => {
      state.isShowSideBar = false;
    },
    hideDropDown: (state) => {
      state.isShowDropdown = false;
      state.dropdownTitle = '';
    },
    toggleDropDownFilter: (state) => {
      state.isDropDownFilter = !state.isDropDownFilter;
    },

    setDropDownOptions: (state, action: PayloadAction<string>) => {
      state.productFilterOption = action.payload;
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
  showDropDownWithLocation,
  hideDropDown,
  nextPhoneIndex,
  prevPhoneIndex,
  showSideBar,
  hideSideBar,
  showOnlyDropdown,
  toggleDropDownFilter,
  setDropDownOptions,
} = uiSlice.actions;
