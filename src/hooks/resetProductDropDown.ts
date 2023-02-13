import {
  hideDropDown,
  hideSideBar,
  setDropDownOptions,
} from '@/features/store/uiSlice';
import { useEffect } from 'react';
import { useAppDispatch } from './reduxHooks';
import { useWindowSize } from './windowSizeHook';

export const useResetProductDropdown = () => {
  const dispatch = useAppDispatch();
  const { windowSize } = useWindowSize();

  const resetProductDropDown = () => {
    if (windowSize <= 1024) {
      dispatch(hideSideBar());
    }
    dispatch(hideDropDown());
    dispatch(setDropDownOptions('all'));
  };

  return { resetProductDropDown };
};
