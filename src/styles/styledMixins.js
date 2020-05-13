import { css } from "styled-components"

export const inputMixin = css`
  width: 100%;
  padding: 5px 10px;
  border: 1px black solid;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
`
export const border1Mixin = css`
  border: 1px solid rgba(0, 0, 0, 0.3);
`
export const pictureShadowMixin = css`
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`
export const cardShadowMixin = css`
  box-shadow: 0px 1px 2px rgba(46, 41, 51, 0.08),
    0px 2px 4px rgba(71, 63, 79, 0.08);
`
export const hoverShadowMixin = css`
  box-shadow: 0px 4px 8px rgba(46, 41, 51, 0.08),
    0px 8px 16px rgba(71, 63, 79, 0.16);
`
