import React from "react";
import ReactDOM from "react-dom/client";

// React Element - Create element using core react
// React.createElement => ReactElement-JS Object => HTMLElement(render)
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React from React !"
// );
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// JSX - HTML-like or XML-like syntax
// JSX - transpiled before it reaches the JS - PARCEL ask Babel to do this
// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
// React Element
const jsxHeading = (
  <h1 id="heading" className="head">
    Namaste React from JSX! (React Element)
  </h1>
);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

// React Functional Component
// In react functional component function name should be start with capital letter only.
// A function which returns some JSX code is called functional component
// A function which returns some react component is called functional component
// one example of writing functional component is as below
// const HeadingComponent1 = () => <h1>Namaste React Functional Component</h1>;
// How to put react component inside other react component => adding that to like <Title /> or {Title()}
// Component composition: like <Title /> is composed inside HeadingComponent. 
// How to put react element or js code in react component => adding that in to curly braces {}
const HeadingComponent = () => (
  <div id="container">
    {jsxHeading}
    <Title />
    <Title></Title>
    {Title()}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const Title = () => <h1 className="head">Namaste React from JSX! (React component)</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);


