export const breakpoints = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  '2xl': '2xl',
}

export type RequiredConditionalObject<
  RequiredConditionName extends string,
  OptionalConditionNames extends string,
  Value extends string | number | boolean,
> = Record<RequiredConditionName, Value> &
  Partial<Record<OptionalConditionNames, Value>>

export type Breakpoint = keyof typeof breakpoints
