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
Functional component run from yo top to bottom and once the function is returned it cant be kept alive
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

/*
Passing Props to a Component
React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any Javascript value through them, including objects, arrays and function


Data Flow: Props facilitate a one-way data flow, specifically from parent to child components. A parent component can pass data to its direct children, and those children can then pass it down to their own children, and so on.
Read-Only: Props are immutable within the child component that receives them. This means a child component cannot directly modify the props it receives. If data needs to be changed, the modification must occur in the parent component (often through state management), and the updated data is then passed down as new props.
Component Reusability: Props are essential for making components reusable. You can create a generic component (e.g., a Product component) and then customize its content and behavior by passing different data through props (e.g., name, price, description).
Syntax: Props are passed to components using a syntax similar to HTML attributes when you render a component in JSX. The component then receives these as an object, typically named props, in its function signature (for functional components) or as this.props (for class components).
*/

// Using "double curlies":CSS and other objects in JSX
/*
In addition to string , numbers and other javascript expression , you can even pass objects in JSX. Objects are also denoted with curly braces, like {name:"Hedy Lamarr"}. Therefore to pass a JS object in another  pair of curly braces:person={{name:"Hedy Lamarr", inventions:5}}.
You may see this with inline CSS styles in JSX. React does not require you to use inline styles (CSS classes work great for most cases). But when you need an inline style, you pass an object to the style attribute:

Parent passes props -> child receives props ->Default Value for a Prop [When a parent does not provide a prop, you can give it a default value directly in the function parameter]
Forwarding props with spread syntax-[Sometimes you want to pass all props from a parent to a child without typing each one]

Passing JSX as children
<Card><Avatar/></Card>
 card automatically recieves a special prop called children.
 function Card({children}){
 return(
  <div className="card">
    {children}
  </div>
 )}
*/

// Rendering
/*
Key is a special attribute in React . It helps React identiyf which items have changed, are added, or removed . This makes re-rendering lists more efficient
*/

// State in React
/*
State=memmory inside a component
It lets a component "remember" information between renders.
Unlike normal variables, when state changes , the component automatically re-renders to update the UI

why?
-Props are immutable
-Value which can change dynamically.

What is a State? -> State is an object that holds information to control behaviour of a component

Props v/s State
-props are passed to the component.
-state is contained inside the component.
-Props are immutable.
-State can be changed .
-Props are like parameters passed to a function.
-State is like a variable declared in function body.

UseState-> useState is a React Hook. It lets a component remeber data(called state) and update the UI automatically when that data changes 

Rule 1: Always use the state update function -> When you create state with useState, React gives you two things: count->current value, setCount -> function to update it
Rule 2: Updating is asynchronus -> React batches updates for performance,. That means you can't always rely on the current value if you call multiple updates in a row.
Rule 3-> Replace, don't modify ->For objects/arrays, you must create a new copy(because React checks if the refernce changed)
*/

// In object state  possible to change the contents of the object itself.This is called mutauion

// In React, useState as well as any other function starting with "use", is called a Hook
/*
  Hooks new special functions that are only available while React is rendering (which we'll get into in more detail on the next page).They let you "hook into" diffrent React features

  The state variable(index) with the value you stored
  The state setter function(setIndex) which can update the state variable and trigger React to render the component again.

  "lifting state up"

  useEffect hook -> a hook which allows us to sync a component with some external system
*/

/*

1.useState - For Managing State
What it does -> 
  useState lets you add state ti a functional component.
  State is data that can change over time (like input values, counters,toggles,fetched data)
  Syntax -> const[state, setStae]=useState(initialValue);
  state-the current value of the state variable
  setState-a function to update that state
  initialValue:the starting/default value of the state

  button clicked- >setCount(count+1) updates the state.
                  React re-renders the component
                  The new count value is displayed

fundamentals
Adds state(data that can change) to a component.
Without state, a component can only show static data.
With state, a component can remeber values between renders

Purpose:
 -To store and manage data inside a component
 -Lets your component remember values between render
 -Without it, your UI would always reset yo its initial state on every render

 1.Form inputs(store text from a user typing)
  const[name,setName]=useState("")

2.Toggles(like showing/hiding context, dark mode switch)
  const [isOpen, setIsOpen]=useState(false);

3.Counters or scores
  const [count,setCount]=useState(0)

4.Lists or arrays(like todos, products,artists)
  const[todos,setTodos]=useState([])


2. useEffect -> For side effects
What it does:
  useEffect lets you run code in response to something to something changing(state, props, or lifecycle events)
  -It's used for side effects like:
      Fetching data from an API
      Setting up subscriptions or event listeners
      Updatin the DOM manuvally
      Running the DOM manuvally 
      Running code when the component mounts/unmounts

    Syntax->useEffect(()=>{
      return()=>{
        };
      },[dependencies]);

    -Effect function -> runs after the component renders
    - cleanup function(optional) -> runs before the component unmounts or before re-running the effect
    -Deoendency array:
      -[] -> run only once(on mount)
      -[variable] -> run when that variable changes.
      -No array -> runs after every render

useState -> used for declaring and updating state variables inside functional components
useEffect -> used for running side effects after rendering( fetching data , timers , subscriptions, DOM updates, cleanup etc.)

fundamentals
-Runs code after the component renders.
-Perfect for tasks that are not about returning JSX, like
    -Fetching data from an API
    -Setting up timers or event listeners.
    -Cleaning up resources

Purpose:
  To run side effects in a component
  A side effect = something that affects the outside world or happends outside JSX rendering

Common Use-cases:
  1.Fetching data from aAPIs
      useEffect(()=>{
        fetch("https://api.example.com/data")
        .then(res=>res.json())
        .then(data=>setItems(data))},[])
  2.Subscribing to events(eg.,window resize,keypress)
    useEffect(()=>{
      function handleResize(){
      console.log("Resized to", window.innerWidth)}
      }
      window.addEvenyListener("resize",handleResize);
      return()=>window.removeEventListener("resize",handleResize);},[])
  3.Timers or intervals
    useEffect(()=>{
      const timer=setInterval(()=>{
        console.log("Tick")},1000);
        return()=>clearInterval(timer);
      },[]);
  4.Syncing state with localStorage
    useEffect(()=>{
      localStorage.setItem("todos",JSON.stringyfy(todos));
      },[todos])


complex state

so far,we've seen useState with simple values like numbers,booleans or strings. But in real apps, state can be more complex

1.State as Objects
const[user,setUser]=useState({name:"Alice",age:25})

//updating part of the object
setUser({...user,age:26})

Never mutate directly: user.age = 26;(doesn't re-render)
Always create a new object with changes

2.State as Arrays
const [tasks,setTasks]=useState(["Learn React","Practice JS"]);
//Adding
setTasks([...tasks, "Build project"])
// Removing
setTasks(tasks.filter(t=>t!=="Practice JS"))

Arrays should be updated immutably(always return a new array)

3.State Derived from State
Sometimes you update state based on the previous state value
setCount(prev=>prev+1)
this avoids bugs when multiple updates are queued.

4. Multiple state variables
Instead of one giant state object, you can split logically
const [name,setName]=useState("")
const [age,setAge]=useState(0)
coonst [isLoggedIn, setIsLoggedIn] = useState(false)

This makes code cleanerand avoids unnecessary re-renders


Understanding side Effects with useEffect
What is a Side Effect?
Anything that happens outside of rendering JSX:
- Data fetching
- Subscribing to browser events
- Changing the DOM manually
- Stating timers

Rules to Remember
1.Runs after render
  React renders -> then useEffect runs
2.Dependencies decide when it runs
  useEffect(() => {
    console.log("Runs once on mount");
  }, []); 
  useEffect(() => {
    console.log("Runs whenever count changes");
  }, [count]);
3.Cleanup -> If you effect sets something up (like a timer or event listener), clean it up
  useEffect(() => {
    const id = setInterval(() => console.log("tick"), 1000);
    return () => clearInterval(id); // cleanup when component unmounts
  }, []);

By today, if you understand:

  How to handle state as arrays & objects?
  --Always create a new array/object when updating.
  Example:
  setUser({ ...user, age: 26 });
  setTasks([...tasks, "New Task"]);

  Why updates must be immutable?
  --Direct mutation (changing the original object/array) doesn’t trigger React to re-render.
  New reference = React knows state has changed → re-renders the UI.

  How useEffect runs after render?
  --React first paints the UI, then runs your effect code.
  Effects are for side work (data fetch, timers, subscriptions, DOM manipulation).

  How dependencies control re-runs
  --[] → runs once (on mount).
    [count] → runs whenever count changes.
    No array → runs on every render.

  Why cleanup is important
  --Prevents memory leaks and buggy behavior.
  Example:
  useEffect(() => {
    const id = setInterval(() => console.log("tick"), 1000);
    return () => clearInterval(id); // cleanup
  }, []);

*/

/* 
  In react you want to display a list of items you commonly use .map() to loop through the array JSX for each element

  Key a string or a number that uniquely identifies it among other items in that array
  Key tells React which array item each component coresponds to ,so that it can match them up later . This become important  if your array items can move (eg due to string ), get inserted or get deleted , A well chosen key helps React infer what exactly has happend and make the correct updates to the DOM tree .

  Conditional rendering -> Sometimes in React you dont want to show a component all the time you want it to appear only when a certain condition rendering . React gives you multiple ways to do this 

  if        -> The most straught forward method is using if/else statement inside your components function body to return diffrent JSX blocks. This approch is clear and easy to read making it ideal for complex , multifile conditional logic
  Ternary operator   ->The ternary operator is a concise alternative for inline conditional rendering, especially when there are only two possible outcomes. It is perfect for handling simple if-else logic directly within JSX. 
  Logical && -> show something only if a condition true,       The logical && operator is a useful shorthand for conditionally rendering a single element or component. If the condition on the left side is true, the expression on the right is rendered. If the condition is false, React ignores and skips it, rendering nothing. 
  number>0&& 

  How to choose the right method
  Use if/else for complex logic. When your condition requires multiple lines of code, an if/else block outside the return statement is the most readable and maintainable option.
  Use the ternary operator (? :) for simple conditions with two outcomes. It is a concise way to choose between rendering two different components or values inline.
  Use the logical && operator for a single conditional outcome. This is the cleanest way to either render a component or render nothing at all. 

  In react components often need to display diffrent UI elements depending on the current state of the app . common scenarios inclide
  1.Loading state -> When data is being fetched --while waiting for data , show a loading  message, spinner, or placeholder to inform the user 
  2.Empty state -> When is no data available  --If no data is available , display a friendly mesage to the user  (no task available)
  3.Error state -> When state -> when fetching data fails  -- If data fetching fails show an error message
  You can handle multiple states in a single component using if/else or ternary operators.

  Showing different UI states Conditions
  In modern frameworks like React and Vue the UI automatically updates based on the current state of your application. You dont need to manually change the DOM. Instead you delcared what the UI should look like for different situations(like loading, error or when data  is ready) and the framework tales care of updating it for you

  Loading State
  -Purpose: Show the user that data is being fetched . Indicates that the app is working
  -Implementation
  *Loading spinner
  *Progress bar
  *Skeleton screen

  Content State
  -Purpose : Show the fully loaded data once fetching is complete.
  -Implementation: Display all fetched content as intended

  Empty State
  -Purpose : Dispalyed when data fetch succeeds but returns no results
  -Implemetation: Custom message explaining why the screen is empty
                  Guidance or next steps for the user (e.g "No tasks. Click "Add Task' to create one." )
        
  Error State
  -Purpose : Displayed when data fetching fails due to nework/server errors
  -Implementation : 
        *clear, concise error message
        *Avoid techinical jargon 
        *Optionally include a call-to-action(e.g., "Try Again" button)


*/
