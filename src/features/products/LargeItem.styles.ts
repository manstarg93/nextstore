import { ButtonContainer } from '@/components/button/Button.styled';
import { variables } from '@/styles/globalStyle';
import styled from 'styled-components';
export const LargeItemContainer = styled.div`
  overflow: hidden;
  cursor: pointer;
  position: relative;
  grid-template-rows: 30rem;
  display: grid;
`;

export const LargeItemImage = styled.img`
  object-fit: cover;
  transition: all 0.6s linear;
  width: 100%;
  height: 100%;
  filter: brightness(60%);

  &:hover {
    transform: scale(1.03);
  }
`;

export const LargeItemDescriptionAndButton = styled.div`
  position: absolute;
  top: 50%;

  left: 50%;
  transform: translate(-50%, 50%);
  display: grid;
  grid-gap: 1rem;
  align-items: flex-end;
  padding: 1rem;
  justify-items: center;
`;

export const LargeItemDescription = styled.h4`
  color: ${variables.white};
  text-transform: uppercase;
  font-weight: lighter;
  width: max-content;
`;

export const LargeItemButton = styled(ButtonContainer)`
  border: solid 0.1rem ${variables.white};
  color: ${variables.white};
  padding: 1rem;
  background-color: transparent;
  text-transform: uppercase;

  &:hover {
    background-color: ${variables.white};
    color: ${variables.black};
  }
`;