import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M1.743 20.612a1.17 1.17 0 0 0 .884 1.888h13.475a2.268 2.268 0 0 0 2.186-1.78l4.18-17.777A1.158 1.158 0 0 0 21.375 1.5h-2.001a6.442 6.442 0 0 0-5.127 2.609z" /></svg>);