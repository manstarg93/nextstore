import { variables } from '@/styles/globalStyle';
import styled from 'styled-components';

export const LayoutMain = styled.main`
  max-width: 95%;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-gap: 1rem;
  padding: 0;
  margin: 0 auto;
  width: 95%;
  overflow: hidden;
`;

export const FooterContainer = styled.footer``;

export const PageSectionContainer = styled.section`
  margin: 0 auto;
  display: grid;
  width: 100%;
  grid-row-gap: 4rem;
`;
