import { device, variables } from '@/styles/globalStyle';
import styled from '@emotion/styled';
import { IpageSummary } from './PageSummary';

export const PageSummaryContainer = styled.article<IpageSummary>`
  display: grid;
  grid-gap: 1rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-column: ${(props) => (props.gridColumn ? props.gridColumn : 'auto')};
  grid-row: ${(props) => (props.gridRow ? props.gridRow : 'auto')};
  margin: 0 auto;
  color: ${variables.darkGray};

  @media screen and (min-width: ${device.tablet}) {
    width: 70%;
  }

  p {
    font-weight: lighter;
  }
`;
export const PageSummaryTitle = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
`;
