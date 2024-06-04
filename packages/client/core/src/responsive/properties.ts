import { Breakpoint } from '../breakpoints'
import { Space } from '../space'

type SpaceProp = Record<Space, Record<Breakpoint, string>>
/**
 * This is a mapping of Tailwind CSS classes to the space tokens.
 * used by @vanilla-extract/sprinkles.
 */
type ResponsiveSpaces = {
  padding: SpaceProp
  paddingTop: SpaceProp
  paddingBottom: SpaceProp
  paddingRight: SpaceProp
  paddingLeft: SpaceProp
  marginTop: SpaceProp
  marginBottom: SpaceProp
  marginRight: SpaceProp
  marginLeft: SpaceProp
}

const spaceClasses: ResponsiveSpaces = {
  padding: {
    none: {
      sm: 'p-0',
      md: 'md:p-0',
      lg: 'lg:p-0',
      xl: 'xl:p-0',
      '2xl': '2x:p-0',
    },
    xxsmall: { sm: 'p-1', md: 'p-1', lg: 'p-1', xl: 'p-1', '2xl': 'p-1' },
    xsmall: { sm: 'p-2', md: 'p-2', lg: 'p-2', xl: 'p-2', '2xl': 'p-2' },
    small: { sm: 'p-3', md: 'p-3', lg: 'p-3', xl: 'p-3', '2xl': 'p-3' },
    medium: { sm: 'p-5', md: 'p-5', lg: 'p-5', xl: 'p-5', '2xl': 'p-5' },
    gutter: { sm: 'pt-6', md: 'pt-6', lg: 'pt-6', xl: 'pt-6', '2xl': 'pt-6' },
    large: { sm: 'p-8', md: 'p-8', lg: 'p-8', xl: 'p-8', '2xl': 'p-8' },
    xlarge: {
      sm: 'p-12',
      md: 'p-12',
      lg: 'p-12',
      xl: 'p-12',
      '2xl': 'p-12',
    },
    xxlarge: {
      sm: 'p-24',
      md: 'p-24',
      lg: 'p-24',
      xl: 'p-24',
      '2xl': 'p-24',
    },
    xxxlarge: {
      sm: 'p-32',
      md: 'p-32',
      lg: 'p-32',
      xl: 'p-32',
      '2xl': 'p-32',
    },
  },
  paddingTop: {
    none: {
      sm: 'pt-0',
      md: 'md:pt-0',
      lg: 'lg:pt-0',
      xl: 'xl:pt-0',
      '2xl': '2xl:pt-0',
    },
    xxsmall: { sm: 'pt-1', md: 'pt-1', lg: 'pt-1', xl: 'pt-1', '2xl': 'pt-1' },
    xsmall: { sm: 'pt-2', md: 'pt-2', lg: 'pt-2', xl: 'pt-2', '2xl': 'pt-2' },
    small: { sm: 'pt-3', md: 'pt-3', lg: 'pt-3', xl: 'pt-3', '2xl': 'pt-3' },
    medium: { sm: 'pt-5', md: 'pt-5', lg: 'pt-5', xl: 'pt-5', '2xl': 'pt-5' },
    gutter: { sm: 'pt-6', md: 'pt-6', lg: 'pt-6', xl: 'pt-6', '2xl': 'pt-6' },
    large: { sm: 'pt-8', md: 'pt-8', lg: 'pt-8', xl: 'pt-8', '2xl': 'pt-8' },
    xlarge: {
      sm: 'pt-12',
      md: 'pt-12',
      lg: 'pt-12',
      xl: 'pt-12',
      '2xl': 'pt-12',
    },
    xxlarge: {
      sm: 'pt-24',
      md: 'pt-24',
      lg: 'pt-24',
      xl: 'pt-24',
      '2xl': 'pt-24',
    },
    xxxlarge: {
      sm: 'pt-32',
      md: 'pt-32',
      lg: 'pt-32',
      xl: 'pt-32',
      '2xl': 'pt-32',
    },
  },
  paddingBottom: {
    none: { sm: 'pb-0', md: 'pb-0', lg: 'pb-0', xl: 'pb-0', '2xl': 'pb-0' },
    xxsmall: { sm: 'pb-1', md: 'pb-1', lg: 'pb-1', xl: 'pb-1', '2xl': 'pb-1' },
    xsmall: { sm: 'pb-2', md: 'pb-2', lg: 'pb-2', xl: 'pb-2', '2xl': 'pb-2' },
    small: { sm: 'pb-3', md: 'pb-3', lg: 'pb-3', xl: 'pb-3', '2xl': 'pb-3' },
    medium: { sm: 'pb-5', md: 'pb-5', lg: 'pb-5', xl: 'pb-5', '2xl': 'pb-5' },
    gutter: { sm: 'pb-6', md: 'pb-6', lg: 'pb-6', xl: 'pb-6', '2xl': 'pb-6' },
    large: { sm: 'pb-8', md: 'pb-8', lg: 'pb-8', xl: 'pb-8', '2xl': 'pb-8' },
    xlarge: {
      sm: 'pb-12',
      md: 'pb-12',
      lg: 'pb-12',
      xl: 'pb-12',
      '2xl': 'pb-12',
    },
    xxlarge: {
      sm: 'pb-24',
      md: 'pb-24',
      lg: 'pb-24',
      xl: 'pb-24',
      '2xl': 'pb-24',
    },
    xxxlarge: {
      sm: 'pb-32',
      md: 'pb-32',
      lg: 'pb-32',
      xl: 'pb-32',
      '2xl': 'pb-32',
    },
  },
  paddingRight: {
    none: { sm: 'pr-0', md: 'pr-0', lg: 'pr-0', xl: 'pr-0', '2xl': 'pr-0' },
    xxsmall: { sm: 'pr-1', md: 'pr-1', lg: 'pr-1', xl: 'pr-1', '2xl': 'pr-1' },
    xsmall: { sm: 'pr-2', md: 'pr-2', lg: 'pr-2', xl: 'pr-2', '2xl': 'pr-2' },
    small: { sm: 'pr-3', md: 'pr-3', lg: 'pr-3', xl: 'pr-3', '2xl': 'pr-3' },
    medium: { sm: 'pr-5', md: 'pr-5', lg: 'pr-5', xl: 'pr-5', '2xl': 'pr-5' },
    gutter: { sm: 'pr-6', md: 'pr-6', lg: 'pr-6', xl: 'pr-6', '2xl': 'pr-6' },
    large: { sm: 'pr-8', md: 'pr-8', lg: 'pr-8', xl: 'pr-8', '2xl': 'pr-8' },
    xlarge: {
      sm: 'pr-12',
      md: 'pr-12',
      lg: 'pr-12',
      xl: 'pr-12',
      '2xl': 'pr-12',
    },
    xxlarge: {
      sm: 'pr-24',
      md: 'pr-24',
      lg: 'pr-24',
      xl: 'pr-24',
      '2xl': 'pr-24',
    },
    xxxlarge: {
      sm: 'pr-32',
      md: 'pr-32',
      lg: 'pr-32',
      xl: 'pr-32',
      '2xl': 'pr-32',
    },
  },
  paddingLeft: {
    none: { sm: 'pl-0', md: 'pl-0', lg: 'pl-0', xl: 'pl-0', '2xl': 'pl-0' },
    xxsmall: { sm: 'pl-1', md: 'pl-1', lg: 'pl-1', xl: 'pl-1', '2xl': 'pl-1' },
    xsmall: { sm: 'pl-2', md: 'pl-2', lg: 'pl-2', xl: 'pl-2', '2xl': 'pl-2' },
    small: { sm: 'pl-3', md: 'pl-3', lg: 'pl-3', xl: 'pl-3', '2xl': 'pl-3' },
    medium: { sm: 'pl-5', md: 'pl-5', lg: 'pl-5', xl: 'pl-5', '2xl': 'pl-5' },
    gutter: { sm: 'pl-6', md: 'pl-6', lg: 'pl-6', xl: 'pl-6', '2xl': 'pl-6' },
    large: { sm: 'pl-8', md: 'pl-8', lg: 'pl-8', xl: 'pl-8', '2xl': 'pl-8' },
    xlarge: {
      sm: 'pl-12',
      md: 'pl-12',
      lg: 'pl-12',
      xl: 'pl-12',
      '2xl': 'pl-12',
    },
    xxlarge: {
      sm: 'pl-24',
      md: 'pl-24',
      lg: 'pl-24',
      xl: 'pl-24',
      '2xl': 'pl-24',
    },
    xxxlarge: {
      sm: 'pl-32',
      md: 'pl-32',
      lg: 'pl-32',
      xl: 'pl-32',
      '2xl': 'pl-32',
    },
  },
  marginTop: {
    none: { sm: 'mt-0', md: 'mt-0', lg: 'mt-0', xl: 'mt-0', '2xl': 'mt-0' },
    xxsmall: { sm: 'mt-1', md: 'mt-1', lg: 'mt-1', xl: 'mt-1', '2xl': 'mt-1' },
    xsmall: { sm: 'mt-2', md: 'mt-2', lg: 'mt-2', xl: 'mt-2', '2xl': 'mt-2' },
    small: { sm: 'mt-3', md: 'mt-3', lg: 'mt-3', xl: 'mt-3', '2xl': 'mt-3' },
    medium: { sm: 'mt-5', md: 'mt-5', lg: 'mt-5', xl: 'mt-5', '2xl': 'mt-5' },
    gutter: { sm: 'mt-6', md: 'mt-6', lg: 'mt-6', xl: 'mt-6', '2xl': 'mt-6' },
    large: { sm: 'mt-8', md: 'mt-8', lg: 'mt-8', xl: 'mt-8', '2xl': 'mt-8' },
    xlarge: {
      sm: 'mt-12',
      md: 'mt-12',
      lg: 'mt-12',
      xl: 'mt-12',
      '2xl': 'mt-12',
    },
    xxlarge: {
      sm: 'mt-24',
      md: 'mt-24',
      lg: 'mt-24',
      xl: 'mt-24',
      '2xl': 'mt-24',
    },
    xxxlarge: {
      sm: 'mt-32',
      md: 'mt-32',
      lg: 'mt-32',
      xl: 'mt-32',
      '2xl': 'mt-32',
    },
  },
  marginBottom: {
    none: { sm: 'mb-0', md: 'mb-0', lg: 'mb-0', xl: 'mb-0', '2xl': 'mb-0' },
    xxsmall: { sm: 'mb-1', md: 'mb-1', lg: 'mb-1', xl: 'mb-1', '2xl': 'mb-1' },
    xsmall: { sm: 'mb-2', md: 'mb-2', lg: 'mb-2', xl: 'mb-2', '2xl': 'mb-2' },
    small: { sm: 'mb-3', md: 'mb-3', lg: 'mb-3', xl: 'mb-3', '2xl': 'mb-3' },
    medium: { sm: 'mb-5', md: 'mb-5', lg: 'mb-5', xl: 'mb-5', '2xl': 'mb-5' },
    gutter: { sm: 'mb-6', md: 'mb-6', lg: 'mb-6', xl: 'mb-6', '2xl': 'mb-6' },
    large: { sm: 'mb-8', md: 'mb-8', lg: 'mb-8', xl: 'mb-8', '2xl': 'mb-8' },
    xlarge: {
      sm: 'mb-12',
      md: 'mb-12',
      lg: 'mb-12',
      xl: 'mb-12',
      '2xl': 'mb-12',
    },
    xxlarge: {
      sm: 'mb-24',
      md: 'mb-24',
      lg: 'mb-24',
      xl: 'mb-24',
      '2xl': 'mb-24',
    },
    xxxlarge: {
      sm: 'mb-32',
      md: 'mb-32',
      lg: 'mb-32',
      xl: 'mb-32',
      '2xl': 'mb-32',
    },
  },
  marginRight: {
    none: { sm: 'mr-0', md: 'mr-0', lg: 'mr-0', xl: 'mr-0', '2xl': 'mr-0' },
    xxsmall: { sm: 'mr-1', md: 'mr-1', lg: 'mr-1', xl: 'mr-1', '2xl': 'mr-1' },
    xsmall: { sm: 'mr-2', md: 'mr-2', lg: 'mr-2', xl: 'mr-2', '2xl': 'mr-2' },
    small: { sm: 'mr-3', md: 'mr-3', lg: 'mr-3', xl: 'mr-3', '2xl': 'mr-3' },
    medium: { sm: 'mr-5', md: 'mr-5', lg: 'mr-5', xl: 'mr-5', '2xl': 'mr-5' },
    gutter: { sm: 'mr-6', md: 'mr-6', lg: 'mr-6', xl: 'mr-6', '2xl': 'mr-6' },
    large: { sm: 'mr-8', md: 'mr-8', lg: 'mr-8', xl: 'mr-8', '2xl': 'mr-8' },
    xlarge: {
      sm: 'mr-12',
      md: 'mr-12',
      lg: 'mr-12',
      xl: 'mr-12',
      '2xl': 'mr-12',
    },
    xxlarge: {
      sm: 'mr-24',
      md: 'mr-24',
      lg: 'mr-24',
      xl: 'mr-24',
      '2xl': 'mr-24',
    },
    xxxlarge: {
      sm: 'mr-32',
      md: 'mr-32',
      lg: 'mr-32',
      xl: 'mr-32',
      '2xl': 'mr-32',
    },
  },
  marginLeft: {
    none: { sm: 'ml-0', md: 'ml-0', lg: 'ml-0', xl: 'ml-0', '2xl': 'ml-0' },
    xxsmall: { sm: 'ml-1', md: 'ml-1', lg: 'ml-1', xl: 'ml-1', '2xl': 'ml-1' },
    xsmall: { sm: 'ml-2', md: 'ml-2', lg: 'ml-2', xl: 'ml-2', '2xl': 'ml-2' },
    small: { sm: 'ml-3', md: 'ml-3', lg: 'ml-3', xl: 'ml-3', '2xl': 'ml-3' },
    medium: { sm: 'ml-5', md: 'ml-5', lg: 'ml-5', xl: 'ml-5', '2xl': 'ml-5' },
    gutter: { sm: 'ml-6', md: 'ml-6', lg: 'ml-6', xl: 'ml-6', '2xl': 'ml-6' },
    large: { sm: 'ml-8', md: 'ml-8', lg: 'ml-8', xl: 'ml-8', '2xl': 'ml-8' },
    xlarge: {
      sm: 'ml-12',
      md: 'ml-12',
      lg: 'ml-12',
      xl: 'ml-12',
      '2xl': 'ml-12',
    },
    xxlarge: {
      sm: 'ml-24',
      md: 'ml-24',
      lg: 'ml-24',
      xl: 'ml-24',
      '2xl': 'ml-24',
    },
    xxxlarge: {
      sm: 'ml-32',
      md: 'ml-32',
      lg: 'ml-32',
      xl: 'ml-32',
      '2xl': 'ml-32',
    },
  },
}

export const responsiveProperties = {
  ...spaceClasses,
  display: {
    none: 'hidden',
    block: 'block',
    inline: 'inline',
    inlineBlock: 'inline-block',
    flex: 'flex',
  },
  alignItems: {
    flexStart: 'items-start',
    center: 'items-center',
    flexEnd: 'items-end',
  },
  justifyContent: {
    flexStart: 'justify-start',
    center: 'justify-center',
    flexEnd: 'justify-end',
    spaceBetween: 'justify-between',
  },
  flexDirection: {
    row: 'flex-row',
    rowReverse: 'flex-row-reverse',
    column: 'flex-col',
    columnReverse: 'flex-col-reverse',
  },
  flexWrap: {
    wrap: 'flex-wrap',
    nowrap: 'flex-nowrap',
  },
  flexShrink: ['shrink-0'],
  flexGrow: ['grow', 'grow-0'],
  textAlign: ['text-left', 'text-center', 'text-right'],
} as const
