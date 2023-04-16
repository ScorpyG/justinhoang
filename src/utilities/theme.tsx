import { extendTheme, ThemeConfig } from '@chakra-ui/react';

/**
 * By default, Chakra includes a comprehensive
 * numeric spacing scale inspired by Tailwind CSS.
 * The values are proportional, so 1 spacing
 * unit is equal to 0.25rem, which translates to
 * 4px by default in common browsers.
 *
 * refer to: https://chakra-ui.com/docs/styled-system/theme
 */

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,
  fonts: {
    heading: `'DMSans-Bold', sans-serif`,
    body: `'DMSans-Regular' , sans-serif`,
  },
});
