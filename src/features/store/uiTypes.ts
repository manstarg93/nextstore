import { IDropdownTypes } from '@/components/nav/navData';

export type uiType = {
  isShowDropdown: boolean;
  phoneIndex: number;
  dropDownData: IDropdownTypes;
  isShowSideBar: boolean;
  navLocation: { left: number; right: number };
};
