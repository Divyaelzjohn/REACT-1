// export default function ChildInput({ onNameChange }) {
//   return (
//     <input
//       type="text"
//       onChange={(e) => onNameChange(e.target.value)}
//       placeholder="Eneter name"
//     />
//   );
// }

export default function ChildInput({ onIncrement }) {
  return <button onClick={onIncrement}>Increment</button>;
}
