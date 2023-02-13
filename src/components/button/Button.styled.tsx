import styled from '@emotion/styled';
import { boxShadow, variables } from '../../styles/globalStyle';

type ButonStyleProps = {
  isActive?: boolean;
};

export const ButtonContainer = styled.button<ButonStyleProps>`
  padding: 0.8rem;
  color: ${variables.black};
  width: max-content;
  border: none;
  cursor: pointer;
  outline: none;
  transition: all 0.5s linear;
  background-color: ${variables.white};
  text-transform: capitalize;

  text-align: center;
`;
