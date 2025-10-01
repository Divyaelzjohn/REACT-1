// const fruits = ["Apple", "Banana", "Mango", "Orange"];

// export default function FruitList() {
//   return (
//     <ul>
//       {fruits.map((fruit, index) => (
//         <li key={index}>{fruit}</li>
//       ))}
//     </ul>
//   );
// }

const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];
export default function List() {
  const listItems = people.map((person) => <li>{person}</li>);
  return <ul>{listItems}</ul>;
}
