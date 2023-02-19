import {
  LargeItemButton,
  LargeItemContainer,
  LargeItemDescription,
  LargeItemDescriptionAndButton,
  LargeItemImage,
} from './LargeItem.styles';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { setDropDownOptions } from '../store/uiSlice';
interface ILargeItems {
  description: string;
  image: string;
  id: number;
  link: string;
  title: string;
}

const LargeItem = ({ description, id, image, link, title }: ILargeItems) => {
  const dispatch = useAppDispatch();
  return (
    <LargeItemContainer>
      <LargeItemImage
        src={image}
        width={300}
        height={400}
        alt={description ? description : 'alt placeholder'}
      />
      <LargeItemDescriptionAndButton>
        <LargeItemDescription>{description}</LargeItemDescription>
        <Link
          onClick={() => dispatch(setDropDownOptions(title))}
          href={`${link}`}
          scroll={true}
        >
          <LargeItemButton>Shop Now</LargeItemButton>
        </Link>
      </LargeItemDescriptionAndButton>
    </LargeItemContainer>
  );
};
export default LargeItem;
