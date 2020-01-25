"use strict";

console.log("app.js is running");

var template = React.createElement(
  "h1",
  null,
  "Budget Tracker"
);

ReactDOM.render(template, document.getElementById("app"));
