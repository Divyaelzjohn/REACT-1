import { Children, useCallback, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hello from "./components/Hello";
import { getImageUrl } from "./components/TASK-3/utils";
import Profile from "./components/TASK-3/Profile";
import Card from "./components/Card-3/Card";
import Fruits from "./components/Render/Fruits";
import ConditionalComponent from "./components/Render/ConditionalComponent";
import Message from "./components/Render/Message";
import Counter from "./components/State/Counter";
import Form from "./components/Form/Form";
import Search from "./components/search/Search";
import FruitList from "./components/Conditional/map/FruitList";
// import Greeting from './components/Conditional/Ifternarylogc'
import DataFetcher from "./components/Conditional/DataFetcher";
import Greeting from "./components/Conditional/Ifternarylogc";
import Timer from "./components/Useeffect/Timer";
import EffectDemo from "./components/Useeffect/EffectDemo";
import ChildComponent from "./components/Props/ChildComponent";
import ChildInput from "./components/Props/ChildInput";
import ChildDisplay from "./components/Props/ChildDisplay";
import Child from "./components/Props/ChildDisplay";
import ProductItem from "./components/Conditional/map/ProductItem";
import SearchBar from "./components/Conditional/map/SearchBar";
import ProductTable from "./components/Conditional/map/ProductTable";
import ProductItem1 from "./components/Conditional/map/ProductItem1";
/*
function App() {
// const [count, setCount] = useState(0)
// const seatNumbers=[1,4,7]
// const person={
//   name:"Rob",
//   message:"Hi there!",
//   emoji:"😄",
//   seatNumbers:[1,4,7]
// }
//   const fruits = ["Apple", "Banana", "Mango", "Orange"];

  return (
    <div className="App">*/
{
  /* <Hello
         name="Rob"
         message="Hi there!"
         emoji="😄"
         seatNumbers={seatNumbers}/> */
}
{
  /* <Hello name="Tom" message="Hi Hello"/> */
}

{
  /* <Hello person={person}/> */
}
{
  /* <Fruits/> */
}
{
  /* <ConditionalComponent/> */
}
{
  /* <Message/> */
}
{
  /* <Counter/> */
}
{
  /* <Form/> */
}
{
  /* <Search /> */
}
{
  /* <FruitList fruits={fruits}/> */
}
{
  /* <Greeting/> */
}
{
  /* <DataFetcher/> */
}

{
  /* <EffectDemo/> */
}

/*</div>
  );
}
export default App;*/

/*
function App() {
  return (
    <div>
      <h1>Reusable Card Example</h1>

      <Card
        title="Marie Curie"
        description="Pioneer in radioactivity and first woman to win a Nobel Prize."
        image="https://i.imgur.com/szV5sdG.jpg"
      >
        <button>Read More</button>
      </Card>

      <Card
        title="Katsuko Saruhashi"
        description="Geochemist who developed a method for measuring carbon dioxide in seawater."
        image="https://i.imgur.com/YfeOqp2.jpg"
      >
        <button>Explore</button>
      </Card>
    </div>
  )
}
export default App
*/

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <div>
//       <Greeting isLoggedIn={isLoggedIn} />
//       {isLoggedIn?(
//         <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
//       ):(
//         <button onClick={()=>setIsLoggedIn(true)}>Login</button>
//       )}
//     </div>
//   );
// }

// use effect

// export default function JokeFetcher() {
//   const [joke, setJoke] = useState(null);

//   useEffect(() => {
//     async function fetchJoke() {
//       const res = await fetch("https://official-joke-api.appspot.com/random_joke");
//       const data = await res.json();
//       setJoke(data);
//     }

//     fetchJoke();
//   }, []); // [] → run once when component mounts

//   if (!joke) return <p>Loading...</p>;
//   return <p>{joke.setup} - {joke.punchline}</p>;
// }

// export default function WindowSize() {
//   const [width,setWidth]=useState(window.innerWidth)
//   useEffect(()=>{
//     function handleResize(){
//       setWidth(window.innerWidth);
//     }
//     window.addEventListener("resize",handleResize)

//     //Cleanup
//     return()=>{
//       window.removeEventListener("resize",handleResize)
//     };
//   },[]);
//   return <p>Window width:{width}px</p>
// }

// export default function App(){
//   const [show,setShow]=useState(true);
//   return(
//     <div>
//       <button onClick={()=> setShow(!show)}>
//         {show?"Hide Timer":"ShowTimer"}
//       </button>
//       {show&&<Timer/>}
//     </div>
//   )
// }

// Props
/*
export default function ParentComponent() {
  const [message, setMessage] = useState("Initial message");

  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (<div>
    <h1>Parent:{message}</h1>
    <ChildComponent onUpdateMessage={updateMessage} />
  </div>)
}
*/

// Child-to-parent communication through callbacks.
/*
export default function ParentComponent(){
  const [message,setMessage]=useState('No message')
  const handleClickMessage=useCallback((data)=>{
    setMessage(data)
  },[])

  return(
    <div>
      <h1>Parent:{message}</h1>
      <ChildComponent onUpdateMessage={handleClickMessage} />
    </div>
  )
}*/
/*
// child sending data to parent
export default function Parent() {
  const [message, setMessage] = useState("");

  function handleMessageFromChild(msg) {
    setMessage(msg);
  }
  return (
    <div>
      <Child sendMessage={handleMessageFromChild} />
      <p>Message: {message}</p>
    </div>
  );
}*/

/*
// Input handling
export default function Parent() {
  const [name, setName] = useState("");
  return (
    <div>
      <ChildInput onNameChange={setName} />
      <h2>Name:{name}</h2>
    </div>
  );
}*/

// Lifting state up to share data between components.​
/*
export default function Parent(){
  const [name,setName] =useState("")

  return (
    <div>
      <ChildInput onNameChange={setName}/>
      <ChildDisplay name={name}/>
    </div>
  )
}
*/

// export default function CounterApp(){
//   const [count,setCount]=useState(0)
//   // const handleIncrement=()=>{
//   //   setCount(count+1);
//   // }
//   function incrementCounter(){
//     setCount(prev=>prev+1)
//   }
//   return (
//     <div>
//        {/* <ChildInput onIncrement={handleIncrement}/> */}
//        <ChildInput onIncrement={incrementCounter}/>
//        {/* <ChildDisplay count={count}/> */}
//        <h1>Counter:{count}</h1>
//     </div>
//   )
// }

/*
// map()
const products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Mouse', price: 25 },
  { id: 3, name: 'Keyboard', price: 75 },
];
export default function ProductList(){
  return (
    <div>
      <h2>Product</h2>
      {products.map(product=>(
        <ProductItem key={product.id} product={product}/>
      ))}
    </div>
  )
}
*/

/*
// filter

export default function StudentList(){
const products = [
  { id: 1, name: "Laptop", price: 1200 , category: 'Electronics'},
  { id: 2, name: "Mouse", price: 25 , category: 'Stationery'},
  { id: 3, name: "Keyboard", price: 75 , category: 'Electronics'},
  { id: 4, name: 'Notebook', price: 30, category: 'Stationery' },
];
const expensiveProducts = products.filter((product) => {
  // return product.price > 100&&product.category==="Electronics";
  return product.name==="Laptop"||product.name==="Mouse"
});
return(
<div>
  <h2>Expensive Product</h2>
  <ul>
    {expensiveProducts.map(products=>(
      <li key={products.id}>{products.name}-{products.price}</li>
    ))}
  </ul>
</div>
)}
*/
// const PRODUCTS = [
//   {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
//   {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
//   {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
//   {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
//   {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
//   {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
// ];

// function FilterableProductTable({products}){
//   const [filterText,setFilterText]=useState('')
//   const[inStockOnly,setInStockOnly]=useState(false)

//   return(
//     <div>
//       <SearchBar filterText={filterText} inStockOnly={inStockOnly}         onFilterTextChange={setFilterText} onInStockOnlyChange={setInStockOnly}/>
//       <ProductTable products={products} filterText={inStockOnly}/>
//     </div>
//   )
// }
// export default function App() {
//   return <FilterableProductTable products={PRODUCTS} />;
// }

/*
function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly} 
        onFilterTextChange={setFilterText} 
        onInStockOnlyChange={setInStockOnly} />
      <ProductTable 
        products={products} 
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS}/>;
}
*/

// reduce
/*export default function SumExample(){
  const [numbers,setNumbers]=useState([1,2,3,4,5]);
  const total=numbers.reduce((acc,curr)=>acc+curr,0);
  return(
    <div>
      <h2>Numbers:{numbers.join(", ")}</h2>
      <h3>Total:{total}</h3>
    </div>
  )
}*/
/*
export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 75 },
  ]);
  const totalPrice=cartItems.reduce((acc,item)=>acc+item.price, 0)
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>{item.name}: ${item.price}</li>
        ))}
      </ul>
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
}*/
/*
export default function TaskList() {
  const [tasks, setTasks] = useState([
    { title: "Buy milk", category: "Shopping" },
    { title: "Read book", category: "Leisure" },
    { title: "Pay bills", category: "Finance" },
    { title: "Go shopping", category: "Shopping" },
  ]);

  const grouped = tasks.reduce((acc, task) => {
    if (!acc[task.category]) acc[task.category] = [];
    acc[task.category].push(task.title);
    return acc;
  }, {});
  
  return(
    <div>
      {Object.entries(grouped).map(([category, titles]) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {titles.map((title, i) => (
              <li key={i}>{title}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
*/

/*
export default function ProductList1() {
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const products = [
    { name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { name: "Mouse", category: "Electronics", price: 25, inStock: false },
    { name: "Keyboard", category: "Electronics", price: 75, inStock: true },
    { name: "Chair", category: "Furniture", price: 150, inStock: true },
  ];

  // Filter products based on toggle
  const displayedProducts = showInStockOnly
    ? products.filter((p) => p.inStock)
    : products;

  // Calculate total price with .reduce()
  const totalPrice = displayedProducts.reduce(
    (acc, product) => acc + product.price,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product List</h2>
      <button onClick={() => setShowInStockOnly((prev) => !prev)}>
        {showInStockOnly ? "Show All" : "Show In-Stock Only"}
      </button>

      <ul>
        {displayedProducts.map((product, i) => (
          <ProductItem1 key={i} product={product} />
        ))}
      </ul>

      <hr />
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
}
*/
/*
export default function TextFieldExample() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Your name: {name}</p>
    </div>
  );
}*/

/*
export default function CheckboxExample() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isSubscribed}
          onChange={(e) => setIsSubscribed(e.target.checked)}
        />
        Subscribe to newsletter
      </label>
      <p>{isSubscribed ? "✅ Subscribed" : "❌ Not Subscribed"}</p>
    </div>
  );
}*/

/*
export default function RadioExample() {
  const [gender, setGender] = useState("");

  return (
    <div>
      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={gender === "Male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={gender === "Female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
      </label>
      <p>Selected: {gender}</p>
    </div>
  );
}
*/
/*
export default function SelectExample() {
  const [country, setCountry] = useState("India");

  return (
    <div>
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
      </select>
      <p>Selected Country: {country}</p>
    </div>
  );
}*/
/*
export default function SelectExample() {
  const [country, setCountry] = useState("India");

  return (
    <div>
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
      </select>

      <p>Selected Country: {country}</p>
    </div>
  );
}
*/


// export default function TaskManager() {
//   const [tasks, setTasks] = useState([]);
//   const [formData, setFormData] = useState({ title: "", category: "" });

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   }

//   // Handle form submission
//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!formData.title || !formData.category) return;

//     setTasks((prev) => [...prev, formData]);
//     setFormData({ title: "", category: "" }); // reset form
//   }

//   // Group tasks by category with .reduce()
//   const grouped = tasks.reduce((acc, task) => {
//     if (!acc[task.category]) acc[task.category] = [];
//     acc[task.category].push(task.title);
//     return acc;
//   }, {});

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Task Manager</h2>

//       {/* Form to add new tasks */}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="title"
//           placeholder="Task title"
//           value={formData.title}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="category"
//           placeholder="Category"
//           value={formData.category}
//           onChange={handleChange}
//         />
//         <button type="submit">Add Task</button>
//       </form>

//       <hr />

//       {/* Render grouped tasks */}
//       {Object.entries(grouped).map(([category, titles]) => (
//         <div key={category}>
//           <h3>{category}</h3>
//           <ul>
//             {titles.map((title, i) => (
//               <li key={i}>{title}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }



////////////////////////////////////////////////////////////////////////////
/*// single input form
export default function singleInputForm() {
  const [username, setUsername] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted: " + username);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:{""}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
*/
/*
// multiple input form
export default function MultiInputForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, age } = formData;
    alert(`Submitted:\nName: ${name}\nEmail: ${email}\nAge: ${age}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:{" "}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Email:{" "}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Age:{" "}
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}
*/
/*
export default function MultiInputForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);  // save submitted data
    setFormData({ name: "", email: "", password: "" }); // clear form
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Email:{" "}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Password:{" "}
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Data:</h3>
          <p><b>Name:</b> {submittedData.name}</p>
          <p><b>Email:</b> {submittedData.email}</p>
          <p><b>Password:</b> {submittedData.password}</p>
        </div>
      )}
    </div>
  );
}
*/

// export default function App() {
//   function search(formData){
//     const query= formData.get("query");
//     alert(`You searched for '${query}'`);
//   }
//   const [query, setQuery] = useState("");
//   return (
//     <form action={search}>
//       {/* <input name="query" />
//       <button type="submit">Search</button> */}
//       <input
//         name="query"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// }

// import { updateCart } from './lib.js';

// export default function AddToCart({ productId }) {
//   async function addToCart(formData) {
//     'use server';
//     const productId = formData.get('productId');
//     await updateCart(productId);
//   }

//   return (
//     <form action={addToCart}>
//       <input type="hidden" name="productId" value={productId} />
//       <button type="submit">Add to Cart</button>
//     </form>
//   );
// }

// import { useFormStatus } from "react-dom";
// // import { submitForm } from "./actions.js";

// export default function SubmitButton() {
//   const { pending } = useFormStatus();

//   return (
//     <button type="submit" disabled={pending}>
//       {pending ? "Submitting..." : "Submit"}
//     </button>
//   );
// }

// function Form({ action }) {
//   return (
//     <form action={action}>
//       <SubmitButton />
//     </form>
//   );
// }

// export default function Thread({ messages, sendMessage }) {
//   const formRef = useRef();

//   const [optimisticMessages, addOptimisticMessage] = useOptimistic(
//     messages,
//     (state, newMessage) => [...state, { text: newMessage, sending: true }]
//   );

//   async function formAction(formData) {
//     addOptimisticMessage(formData.get("message"));
//     formRef.current.reset();
//     await sendMessage(formData);
//   }

//   return (
//     <>
//       {optimisticMessages.map((msg, i) => (
//         <div key={i}>
//           {msg.text} {!!msg.sending && <small> (Sending...)</small>}
//         </div>
//       ))}
//       <form action={formAction} ref={formRef}>
//         <input type="text" name="message" placeholder="Hello!" />
//         <button type="submit">Send</button>
//       </form>
//     </>
//   );
// }

// import { ErrorBoundary } from "react-error-boundary";

// export default function Search() {
//   function search() {
//     throw new Error("search error");
//   }

//   return (
//     <ErrorBoundary fallback={<p>There was an error submitting the form</p>}>
//       <form action={search}>
//         <input name="query" />
//         <button type="submit">Search</button>
//       </form>
//     </ErrorBoundary>
//   );
// }

// import { useActionState } from "react";
// import { signUpNewUser } from "./api";

// export default function Page() {
//   async function signup(prevState, formData) {
//     'use server';
//     const email = formData.get("email");
//     try {
//       await signUpNewUser(email);
//       alert(`Added "${email}"`);
//     } catch (err) {
//       return err.toString();
//     }
//   }

//   const [message, signupAction] = useActionState(signup, null);

//   return (
//     <form action={signupAction}>
//       <input name="email" placeholder="react@example.com" />
//       <button>Sign up</button>
//       {!!message && <p>{message}</p>}
//     </form>
//   );
// }

// import { useActionState } from "react";
// import { signUpNewUser } from "./api";

// export default function Page() {
//   async function signup(prevState, formData) {
//     "use server";
//     const email = formData.get("email");
//     try {
//       await signUpNewUser(email);
//       alert(`Added "${email}"`);
//     } catch (err) {
//       return err.toString();
//     }
//   }
//   const [message, signupAction] = useActionState(signup, null);
//   return (
//     <>
//       <h1>Signup for my newsletter</h1>
//       <p>Signup with the same email twice to see an error</p>
//       <form action={signupAction} id="signup-form">
//         <label htmlFor="email">Email: </label>
//         <input name="email" id="email" placeholder="react@example.com" />
//         <button>Sign up</button>
//         {!!message && <p>{message}</p>}
//       </form>
//     </>
//   );
// }

// export default function Search() {
//   function publish(formData) {
//     const content = formData.get("content");
//     const button = formData.get("button");
//     alert(`'${content}' was published with the '${button}' button`);
//   }

//   function save(formData) {
//     const content = formData.get("content");
//     alert(`Your draft of '${content}' has been saved!`);
//   }

//   return (
//     <form action={publish}>
//       <textarea name="content" rows={4} cols={40} />
//       <br />
//       <button type="submit" name="button" value="submit">Publish</button>
//       <button formAction={save}>Save draft</button>
//     </form>
//   );
// }
