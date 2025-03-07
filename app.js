import React from "react";
import ReactDOM from "react-dom/client"

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is h1 child"),
    React.createElement("h2", {}, "This is Akshey sine"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is h1 child2"),
    React.createElement("h2", {}, "This is h2 child2"),
  ]),
]);

const heading = React.createElement(
  "h1",
  {
    className: "headig",
    id: "root1",
    xyz: "xb121i",
  },
  "Hello world from React"
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
