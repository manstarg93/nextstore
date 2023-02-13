import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
export const variables = {
  primary: '#171e29',
  white: '#fff',
  orangered: '#eb4034',
  orange: '#eb6b34',
  gray: '#e3e0de',
  black: '#000',
  darkGray: '#1e252e',
  green: '#134a0b',
  lightgreen: '#1f8c0f',
};

export const device = {
  mobile: '425px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1920px',
};

export const boxShadow = (shadow: string) => `0 0.1rem 0.1rem ${shadow}`;

export const ProjectGridTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  margin: 2rem auto;
  font-size: 2rem;
`;

export const slideAnimation = keyframes`
0%{
 transform: translate(-100%);
}
50%{
transform: translate(-50%);
}
100%{
   transform: translate(0%);
}
`;
