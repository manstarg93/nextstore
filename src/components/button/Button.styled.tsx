import styled from '@emotion/styled';
import { boxShadow, variables } from '../../styles/globalStyle';

type ButonStyleProps = {
  isActive?: boolean;
};

export const ButtonContainer = styled.button<ButonStyleProps>`
  padding: 0.8rem;
  color: ${variables.black};
  width: max-content;
  border: solid 0.1rem ${variables.white};
  cursor: pointer;
  outline: none;
  transition: all 0.5s linear;
  background-color: transparent;
  text-transform: capitalize;
  color: ${variables.white};
  text-align: center;
`;
