import {
  ArrowDownContainer,
  FilteredDropDown,
  FilteredDropDownOptions,
  ProductFilterContainer,
  ProductFilterDropDown,
} from './ProductFilter.styles';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import {
  setDropDownOptions,
  toggleDropDownFilter,
} from '@/features/store/uiSlice';
import { dropDownFilterType } from './productFilterTypes';

interface IProductFilter {
  dropDownFilter: dropDownFilterType;
}

const ProductFilter = ({ dropDownFilter }: IProductFilter) => {
  const { isDropDownFilter, productFilterOption } = useAppSelector(
    (state) => state.ui
  );

  const dispatch = useAppDispatch();

  return (
    <ProductFilterContainer onClick={() => dispatch(toggleDropDownFilter())}>
      <ProductFilterDropDown>
        <p>{productFilterOption}</p>
        <ArrowDownContainer>
          {isDropDownFilter ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </ArrowDownContainer>
      </ProductFilterDropDown>
      <FilteredDropDown isDropDownFilter={isDropDownFilter}>
        {dropDownFilter.map((data) => (
          <FilteredDropDownOptions
            key={data.title}
            onClick={() => dispatch(setDropDownOptions(data.title))}
          >
            {data.title}
          </FilteredDropDownOptions>
        ))}
      </FilteredDropDown>
    </ProductFilterContainer>
  );
};
export default ProductFilter;
