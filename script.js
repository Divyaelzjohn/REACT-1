// What is REACT?
/*
Open source library for building user interfaces
Not a framework
Focus on UI
Rich ecosystem
*/

// WHy learn React?
/*
Created and maintained by Facebook
Moew than 100k starts on Github
Huge community
In demand skillset
 */

// Component based Architecture
//  React is declarative
/*
 Tell React what you want and react will build the actual UI
 React will handle efficiently updating and rendering of the components
 DOM updates are handles gracefully in React
*/
// More on why React?
/*
Seamlessly integra react into any of your applications.
Portion of your page or a complete page or even an entire application itself
*/

// Prerequisites
/* 
  HTML , CSS and javascript fundamentals
  ES6  - let & const , arrrow functions , template literals, default parameters, object literals , rest and  spread operators and destructuring assignment
  Javascript - 'this' keyword , filter, map and reduce
  REact from scrach
*/

/*
 state= variable 
 setState = Change the state 
 props =pass state to child components
 lifecycle methods, example:ComponentDidMount()  [API call]
 Routing
 Hooks
 */

// SPA and MPA
/*
SPA loads one HTML page and dynamically updates content using js
No page reloads -> smooth, app-like experience

MPA -> Traditional model-- every action reloads a new page from the server'
works well for content - heavy appliactions
*/

// A component is a reusable , independent piiece of UI in React
/* - just like blocks , you can combine many small compnents to build  bigger ones
In react , everything is a component -><> buttonn , navbar,footer , profile card , sidebar etc.

Part of user interface
Core building block of React
An application comprises of multiple small components
small components combined together form the entire UI
Components can be nested inside one another
Component code is placed in javascript file
Example: App component is placed in App.js file
There are two types of components functional component and a class component
*/

// 1. Functional component
/* 
  Functional component is a JavaScript function that accepts input called props(properties) that accepts input called props(properties and return HTML which describe the UI

  function Welcome(props){
    return <h1>Hello, {props.name}</h1>
  }
    This function is a valid react component because it accepts a single props and returns a react element
    We call such componenets as functional components because they are literally javascript function
    
*/
/*
- create using a js function
-accepts props(inputs)
-Return JSX(UI)
-Can use React Hooks(like useState, useEffect ) for state and lifecycle

functional component is just a plain  js pure function that accepts props an arguments and returnas a React element(JSX)
There  is no render method used in functional components
Functiona; component run from yo top to bottom and once the function is returned it cant be kept alive
Also known as Stateless component as they simply acccept data and display them in some form , that they are mainly responsible for rendering UI
React lifecycle methods (for example , componentDidMOunt) canot be used in functional components
Hooks can be used in functional components to make the, stateful 
Constructor are not used
*/
// 2. Class Components
/*
-Create using ES6 class syntax
-Have built-in lifecycle methods(componentDidMount, componentDidUpdate, etc)
-Still work , but React now recommends functionla components + hooks

Class components are ES6 javascript classes that extend from React.component and implement a render method , which returns React elements(JSX).Here's basic example

class TextComponent  extends React.component{
render(){
  return <h1>Hello , world!</h1>
}}

// https://medium.com/@anton.martyniuk/migrating-from-class-components-to-functional-components-in-react-0f24af6c9a4a

A class component requires you to extend from React. Component and create a render function within returns a react element
It must have the render() method returning JSX(which is syntactically similar to HTML)
Class component is instantiated and diffrent life cycle method is kept alive and being run and invoked depending on phase of class component
Also known as Stateful components because they implement logic and atate
React lifecycle methods can be used inside class components(for example, componentDidmount)
It requires diffrent syntax inside a class component to implement hooks
Constructor  are used as it needs to store state
*/

// JSX = js XML
/*
It allows you to write HTML - like syntax inside js
React uses JSX to describe what the UI should look like.
*/
// const element=<h1>Hello, jsx!</h1>

/* JSX must have one parent element */
// return(
//   // <div>
//   <>
//     <h1>Hello</h1>
//     <p>Word</p>
//     {/* </div> */}
//   </>
// )

/*Embedding JavaScript in JSX */

// const name = "Divya";
// const element = <h1>Hello, {name}!</h1>;


/* Attribute in JSX
const element = <img src="logo.png" alt="Logo"/>;
const button=<button onClcick={handleClick}>Click Me</button>*/


/*
JSX CHILDREN
const element = (
  <div>
    <h1>Hello</h1>
    <p>This is JSX syntax.</p>
  </div>
);
*/

/* self-closing tags
const element=<img src="logo.png" alt="Logo"/>
)*/

/* Expression but not statements

{isLoggedIn?"hi":"Please log in"}*/

// Functional component
/*
1.Accepts props(inputs from parent components)
2.Returns JSX('React's syntax for creating UI)
It's called "functional" because it's literally a function.
Key Point : Functional component are now more powerful with React Hooks (like useState and useEffect) and can manage state and side effects.
2.Arrow function component -> You can write functional components as arrow functions, which is shorter and modern syntax
3.Props -> Props are inputs to components. They make components reusable
 */


/*
What is JSX?-> JSX allows us to write HTML elemnt in javascript and place them in the DOM without any createElement() and/or appendChild() methiod
-JSX stands for JavaScriptXML.
-It looks like HTML but is actually JavaScript
-React components return JSX to describe what should appear on the screen
-A functional component must return JSX to render something
-JSX Must Have One Root Element -> If you want to return multiple elements , they must be wrapped in one parent element
-Embedded JavaScript in JSX -> You can use {} to insert Javascript expression inside JSX.
-Conditional Rendering in JSX -> You can use JavaScript logic to render JSX conditionally
-Returning JSX with Attribytes -> You can add class names, styles, or other attributes
*/
/* 
 Exporting & Importing a component
 1. Make a new JS file to put components in 
 2. Export your function component from that file (using either default or named exports)
 3. Import it in the file you'll use the component(using the corresponding technique for importing default or named exports)
*/