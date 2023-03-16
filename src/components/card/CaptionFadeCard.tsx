import { MouseEventHandler } from 'react';
import {
  CaptionDescription,
  CaptionFadeCardCaption,
  CaptionFadeCardContainer,
  CaptionFadeCardImage,
} from './CaptionFadeCard.styles';

interface ICaptionFadeCard {
  thumbnail: string;
  title: string;
  description?: string;
  onClick: MouseEventHandler;
  captionColor?: string;
}

const CaptionFadeCard = ({
  thumbnail,
  title,
  captionColor,
  description,
  onClick,
}: ICaptionFadeCard) => {
  return (
    <CaptionFadeCardContainer onClick={onClick}>
      <CaptionFadeCardImage
        src={thumbnail}
        width={300}
        height={400}
        priority={true}
        alt={title}
      />
      <CaptionFadeCardCaption captionColor={captionColor}>
        <h2>{title}</h2>
        {description && <CaptionDescription>{description}</CaptionDescription>}
      </CaptionFadeCardCaption>
    </CaptionFadeCardContainer>
  );
};
export default CaptionFadeCard;
