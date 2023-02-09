import { IDropdownTypes } from '@/components/nav/navData';

export type uiType = {
  isShowDropdown: boolean;
  phoneIndex: number;
  isShowSideBar: boolean;
  dropdownTitle: string;
  navLocation: { left: number; right: number };
  isDropDownFilter: boolean;
  productFilterOption: string;
};

export type dropDownTitleAndLocationType = {
  dropdownTitle: string;
  location: {
    left: number;
    right: number;
  };
};
