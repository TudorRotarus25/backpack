import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.5 10.5 0 0 0 12 1.5zm0 18a7.5 7.5 0 1 1 7.5-7.5 7.5 7.5 0 0 1-7.5 7.5zm4.442-6.755a4.501 4.501 0 0 1-7.052 2.921.662.662 0 0 1-.042-1.014l2.432-2.432a.75.75 0 0 0 .22-.53V8.25a.662.662 0 0 1 .747-.688 4.5 4.5 0 0 1 3.695 5.183z" /></svg>);