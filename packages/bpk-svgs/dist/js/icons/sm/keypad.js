import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M6 4.5A1.5 1.5 0 1 1 4.5 3 1.5 1.5 0 0 1 6 4.5zm7.5 0A1.5 1.5 0 1 1 12 3a1.5 1.5 0 0 1 1.5 1.5zm7.5 0A1.5 1.5 0 1 1 19.5 3 1.5 1.5 0 0 1 21 4.5zM6 12a1.5 1.5 0 1 1-1.5-1.5A1.5 1.5 0 0 1 6 12zm7.5 0a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5zm7.5 0a1.5 1.5 0 1 1-1.5-1.5A1.5 1.5 0 0 1 21 12zM6 19.5A1.5 1.5 0 1 1 4.5 18 1.5 1.5 0 0 1 6 19.5zm7.5 0A1.5 1.5 0 1 1 12 18a1.5 1.5 0 0 1 1.5 1.5zm7.5 0a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5z" /></svg>);