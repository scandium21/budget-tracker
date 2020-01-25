import React from "react";
import ReactDOM from "react-dom";

let template = <h1>Budget Tracker</h1>;

class OldSyntax {
  constructor() {
    this.name = "SC";
  }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);

class NewSyntax {
  name = "SC-new";
}

const newSyntax = new NewSyntax();
console.log(newSyntax);

ReactDOM.render(template, document.getElementById("app"));
