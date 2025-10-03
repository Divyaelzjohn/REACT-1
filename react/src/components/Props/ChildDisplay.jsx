// export default function ChildDisplay({ sendMessage }) {
//   return (
//     <button onClick={() => sendMessage("Hello Parent 👋")}>Send Message</button>
//   );
// }

// export default function ChildDisplay({name}){
//   return <h2>Name:{name}</h2>
// }

export default function ChildDisplay({count}){
  return <h1>Current Count: {count}</h1>
}

