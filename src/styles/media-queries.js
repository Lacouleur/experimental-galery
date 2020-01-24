import { css } from '@emotion/styled';

const breakpoints = {
  // minimal sizes
  phoneSize: 415,
  desktopSize: 1200,
};

const phoneRule = `(min-width: ${breakpoints.phoneSize - 1}px)`;
const desktopRule = `(min-width: ${breakpoints.desktopSize}px)`;

const mediaQueries = {
// Doc for "specified size "  => sizeName: `@media screen and ${mediumRule} and ${mediumDownRule}`,
  phone: `@media screen and ${phoneRule}`,
  desktop: `@media screen and ${desktopRule}`,
};

const mediaQuery = (size) => (...args) => css`
  ${mediaQueries[size]} {
    ${css(...args)};
  }
`;
export const phoneQuery = mediaQuery('phone');
export const desktopQuery = mediaQuery('desktop');
