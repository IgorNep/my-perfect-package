declare module '*.css' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*scss';
declare module '*.png';
declare module '*.jpg';
declare module '*.svg' {
  const content: string;
  export default content;
}
