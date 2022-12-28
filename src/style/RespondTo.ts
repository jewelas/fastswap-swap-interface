import { css, CSSObject, SimpleInterpolation, FlattenSimpleInterpolation } from 'styled-components'

type Breakpoints = {
  xss: number
  xs: number
  sm: number
  smm: number
  md: number
  lg: number
  xl: number
  xxl: number
}

const sizes: Breakpoints = {
  xss: 320,
  xs: 480,
  sm: 576,
  smm: 767,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
}

const initAcc: Interpolation<Breakpoints> = {
  xss: () => '',
  xs: () => '',
  sm: () => '',
  smm: () => '',
  md: () => '',
  lg: () => '',
  xl: () => '',
  xxl: () => '',
}

type BreakpointEntry = [keyof Breakpoints, Breakpoints[keyof Breakpoints]]
type Interpolation<T> = {
  [key in keyof T]:
    | ((
        first: CSSObject | TemplateStringsArray,
        ...interpolations: SimpleInterpolation[]
      ) => FlattenSimpleInterpolation)
    | (() => string)
}

interface CustomObject extends ObjectConstructor {
  entries<K extends keyof Breakpoints, T>(o: { [s in K]: T } | ArrayLike<T>): [K, T][]
}

const object: CustomObject = Object

const media = object.entries(sizes).reduce<Interpolation<Breakpoints>>((acc, cur: BreakpointEntry) => {
  const [key, value] = cur
  acc[key] = (first, ...interpolations) =>
    css`
      @media (max-width: ${value}px) {
        ${css(first, ...interpolations)}
      }
    `

  return acc
}, initAcc)

export default media
