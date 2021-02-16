// This file is for using non-code assets with TS
// same concept applies to CSS,SCSS,JSON, etc
// You could be more explicit, for example setting the type as a string for a URL
declare module '*.svg' {
  const content: any //eslint-disable-line
  export default content
}
