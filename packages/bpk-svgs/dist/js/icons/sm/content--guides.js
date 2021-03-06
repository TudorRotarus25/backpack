import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M19.5 1.5h-15a3 3 0 0 0-3 3v15a3 3 0 0 0 3 3H18a1.5 1.5 0 0 0 0-3H5.25a.75.75 0 0 1 0-1.5H19.5a3 3 0 0 0 3-3V4.5a3 3 0 0 0-3-3zM17.25 12H6.75a.75.75 0 0 1 0-1.5h10.5a.75.75 0 0 1 0 1.5zm0-3H6.75a.75.75 0 0 1 0-1.5h10.5a.75.75 0 0 1 0 1.5z" /></svg>);