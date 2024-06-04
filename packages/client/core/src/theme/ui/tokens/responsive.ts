export type RequiredConditionalObject<
  RequiredConditionName extends string,
  OptionalConditionNames extends string,
  Value extends string | number | boolean,
> = Record<RequiredConditionName, Value> &
  Partial<Record<OptionalConditionNames, Value>>

type Conditions<ConditionName extends string> = {
  conditions: {
    defaultCondition: ConditionName | false
    conditionNames: Array<ConditionName>
    responsiveArray?: Array<ConditionName>
  }
}

type ExtractDefaultCondition<SprinklesProperties extends Conditions<string>> =
  SprinklesProperties['conditions']['defaultCondition']

type ExtractConditionNames<SprinklesProperties extends Conditions<string>> =
  SprinklesProperties['conditions']['conditionNames'][number]

export interface RequiredResponsiveArray<Length extends number, Value>
  extends ReadonlyArray<Value> {
  0: Exclude<Value, null>
  length: Length
}
export type RequiredResponsiveArrayByMaxLength<
  MaxLength extends number,
  Value,
> = [
  never,
  RequiredResponsiveArray<1, Value | null>,
  RequiredResponsiveArray<1 | 2, Value | null>,
  RequiredResponsiveArray<1 | 2 | 3, Value | null>,
  RequiredResponsiveArray<1 | 2 | 3 | 4, Value | null>,
  RequiredResponsiveArray<1 | 2 | 3 | 4 | 5, Value | null>,
  RequiredResponsiveArray<1 | 2 | 3 | 4 | 5 | 6, Value | null>,
  RequiredResponsiveArray<1 | 2 | 3 | 4 | 5 | 6 | 7, Value | null>,
  RequiredResponsiveArray<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8, Value | null>,
][MaxLength]

export type RequiredConditionalValue<
  SprinklesProperties extends Conditions<string>,
  Value extends string | number | boolean,
> = ExtractDefaultCondition<SprinklesProperties> extends false
  ? never
  :
  | Value
  | RequiredConditionalObject<
    Exclude<ExtractDefaultCondition<SprinklesProperties>, false>,
    Exclude<
      ExtractConditionNames<SprinklesProperties>,
      ExtractDefaultCondition<SprinklesProperties>
    >,
    Value
  >
  | (SprinklesProperties['conditions']['responsiveArray'] extends {
    length: number
  }
    ? RequiredResponsiveArrayByMaxLength<
      SprinklesProperties['conditions']['responsiveArray']['length'],
      Value
    >
    : never)

export type RequiredResponsiveValue<Value extends string | number> =
  RequiredConditionalValue<typeof responsiveAtomicProperties, Value>;
