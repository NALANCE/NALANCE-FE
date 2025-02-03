import { createGlobalStyle } from "styled-components";

import Freesentation4 from "../assets/fonts/Freesentation-4Regular.ttf";
import Freesentation5 from "../assets/fonts/Freesentation-5Medium.ttf";
import Freesentation6 from "../assets/fonts/Freesentation-6SemiBold.ttf";
import Freesentation8 from "../assets/fonts/Freesentation-8ExtraBold.ttf";

const GlobalStyle = createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 62.5%;
    vertical-align: baseline;
  }
  
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  
  body {
    line-height: 1;
  }
  
  ol,
  ul {
    list-style: none;
  }
  
  blockquote,
  q {
    quotes: none;
  }
  
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Light Weight */
  @font-face {
    font-family: 'Freesentation';
    src: url(${Freesentation4}) format('truetype');
    font-weight: 300; /* Light */
    font-style: normal;
    font-display: swap;
  }

  /* Medium Weight */
  @font-face {
    font-family: 'Freesentation';
    src: url(${Freesentation5}) format('truetype');
    font-weight: 500; /* Medium */
    font-style: normal;
    font-display: swap;
  }

  /* SemiBold Weight */
  @font-face {
    font-family: 'Freesentation';
    src: url(${Freesentation6}) format('truetype');
    font-weight: 600; /* SemiBold */
    font-style: normal;
    font-display: swap;
  }

  /* ExtraBold Weight */
  @font-face {
    font-family: 'Freesentation';
    src: url(${Freesentation8}) format('truetype');
    font-weight: 800; /* ExtraBold */
    font-style: normal;
    font-display: swap;
  }

  /* 휴먼엑스포 폰트 */
  @font-face {
    font-family: 'HumanExpo';
    src: url('/src/assets/fonts/HumanExpo.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  /* 모든 요소에 'Freesentation' 폰트와 500 글꼴 두께 적용 */
  /* 10px = 1rem */ 
  html,body {
    font-family: 'Freesentation', sans-serif;
    font-weight: 500;
  }
  
`;

export default GlobalStyle;
