export default function ChildComponent({ onUpdateMessage }) {
  const handleClick = () => {
    onUpdateMessage('Message updated from child!');
  };

  return <button onClick={handleClick}>Update Parent Message</button>;
}
