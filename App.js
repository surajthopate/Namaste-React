import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!");
const parent = React.createElement("div", { id: "Parent" }, [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", { id: "h1" }, "This is Namaste React !"),
      React.createElement("h2", { id: "h1" }, "Hello World from H2!"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", { id: "h1" }, "Hello World from H1!"),
      React.createElement("h2", { id: "h1" }, "Hello World from H2!"),
    ])
  ]);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);
  