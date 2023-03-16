import { boxShadow, variables } from '@/styles/globalStyle';
import styled from '@emotion/styled';
import Image from 'next/image';

interface ICaption {
  captionColor?: string;
}

export const CaptionFadeCardContainer = styled.div`
  border-radius: 10px;
  height: max-content;
  width: max-content;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;

export const CaptionFadeCardImage = styled(Image)`
  border-radius: 10px;
  object-fit: cover;
  transition: all 0.3s linear;

  filter: brightness(60%);
  will-change: transform;

  &:hover {
    transform: scale(1.03);
  }
`;

export const CaptionDescription = styled.p`
  display: none;
`;

export const CaptionFadeCardCaption = styled.div<ICaption>`
  position: absolute;
  min-height: 40%;
  bottom: 0;
  padding: 20px 10px;
  left: 0;
  right: 0;
  opacity: 0.9;
  z-index: 10;
  transition: all 0.5s linear;
  color: ${variables.white};
  background: linear-gradient(
    transparent,
    ${(props) => (props.captionColor ? props.captionColor : '#1e252e')} 30%
  );

  display: grid;

  align-items: center;
  justify-content: center;

  &:hover {
    min-height: 60%;
    background: linear-gradient(
      transparent,
      ${(props) => (props.captionColor ? props.captionColor : '#1e252e')} 60%
    );
  }
  &:hover > p {
    display: block;
  }
  h2 {
    color: ${variables.white};
    text-align: center;
  }
  p {
  }
`;
