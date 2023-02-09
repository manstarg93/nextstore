import { hideSideBar, setDropDownOptions } from '@/features/store/uiSlice';
import { useEffect } from 'react';
import { useAppDispatch } from './reduxHooks';

export const useResetProductDropdown = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setDropDownOptions('all'));
  }, []);
};
