import { useAppDispatch } from '@/hooks/reduxHooks';
import { hideCart } from '../store/cartSlice';
import { cartType } from '../store/cartTypes';
import {
  CartContainer,
  CartDescription,
  CartHeader,
  CartImage,
  CartImageAndDescriptionContainer,
  CartImageContainer,
  CartItemContainer,
  CartOverlay,
  CartTitle,
  CheckoutButton,
  TotalContainer,
} from './Cart.styles';
import { AiOutlineClose } from 'react-icons/ai';
import AddRemoveItem from '../addRemoveItem/AddRemoveItem';
import { RatingComponent } from '../ratingComponent/RatingComponent';
import Button from '@/components/button/Button';
interface ICartType {
  show: boolean;
  cart: cartType[];
}
const Cart = ({ show, cart }: ICartType) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <CartContainer show={show}>
        <CartHeader>
          <h1>Cart</h1>
          <AiOutlineClose onClick={() => dispatch(hideCart())} />
        </CartHeader>
        {cart.length < 1 ? (
          <p>Your cart is currently empty</p>
        ) : (
          <CartItemContainer>
            {cart.map((item) => {
              const { image, title, id, price, itemAmount, rating } = item;
              return (
                <CartImageAndDescriptionContainer key={id}>
                  <CartImageContainer>
                    <CartImage
                      src={image}
                      width={200}
                      height={200}
                      alt={title}
                    />
                  </CartImageContainer>

                  <CartDescription>
                    <CartTitle>{title}</CartTitle>
                    <h3>$ {price}</h3>
                    <RatingComponent rating={rating} />
                    <AddRemoveItem itemAmount={itemAmount} item={item} />
                  </CartDescription>
                </CartImageAndDescriptionContainer>
              );
            })}
            <TotalContainer>
              <h3>Sub total</h3>
              <h3>
                ${' '}
                {cart.reduce(
                  (acc, curr) => acc + curr.price * curr.itemAmount,
                  0
                )}
              </h3>
            </TotalContainer>
            <CheckoutButton>Checkout</CheckoutButton>
          </CartItemContainer>
        )}
      </CartContainer>
      <CartOverlay onClick={() => dispatch(hideCart())} show={show} />
    </>
  );
};
export default Cart;
