import { AddRemoveItemContainer } from './AddRemoveItem.styles';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { addToCart, removeFromCart } from '../store/cartSlice';
import { cartType } from '../store/cartTypes';

interface IAddRemove {
  itemAmount: number;
  item: cartType;
}
const AddRemoveItem = ({ itemAmount, item }: IAddRemove) => {
  const dispatch = useAppDispatch();
  return (
    <AddRemoveItemContainer>
      <AiOutlineMinus onClick={() => dispatch(removeFromCart(item))} />
      <p>{itemAmount}</p>
      <AiOutlinePlus onClick={() => dispatch(addToCart(item))} />
    </AddRemoveItemContainer>
  );
};
export default AddRemoveItem;
