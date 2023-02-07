import {
  LargeItemButton,
  LargeItemContainer,
  LargeItemDescription,
  LargeItemDescriptionAndButton,
  LargeItemImage,
} from './LargeItem.styles';

interface ILargeItems {
  description: string;
  image: string;
  id: number;
}

const LargeItem = ({ description, id, image }: ILargeItems) => {
  return (
    <LargeItemContainer>
      <LargeItemImage src={image} alt={description} />
      <LargeItemDescriptionAndButton>
        <LargeItemDescription>{description}</LargeItemDescription>
        <LargeItemButton>Shop Now</LargeItemButton>
      </LargeItemDescriptionAndButton>
    </LargeItemContainer>
  );
};
export default LargeItem;
