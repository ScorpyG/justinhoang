import { ThemeConfig, extendTheme } from '@chakra-ui/react';
import { GlobalStyleProps, mode } from '@chakra-ui/theme-tools';

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
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      bg: mode('#fff', '#2E2E2E')(props),
    },
  }),
};

export const theme = extendTheme({
  config,
  styles,
  fonts: {
    body: 'DMSans-Regular',
    heading: 'DMSans-Bold',
  },
});
