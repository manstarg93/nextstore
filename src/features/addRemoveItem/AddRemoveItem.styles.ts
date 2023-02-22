import { variables } from '@/styles/globalStyle';
import styled from '@emotion/styled';

export const AddRemoveItemContainer = styled.div`
  border: 0.1rem solid ${variables.black};
  width: max-content;
  padding: 0.7rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: auto 1fr auto;
  justify-content: center;
  align-items: center;

  svg {
    width: 1.3rem;
    height: 1.3rem;
    cursor: pointer;
  }
`;
