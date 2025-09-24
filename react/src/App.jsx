import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Hello'
import { getImageUrl } from './components/TASK-3/utils'
import Profile from './components/TASK-3/Profile'

// function App() {
//   // const [count, setCount] = useState(0)
//   // const seatNumbers=[1,4,7]
// const person={
//   name:"Rob",
//   message:"Hi there!",
//   emoji:"😄",
//   seatNumbers:[1,4,7]
// }
//   return (
//     <div className="App">
//       {/* <Hello 
//         name="Rob" 
//         message="Hi there!" 
//         emoji="😄" 
//         seatNumbers={seatNumbers}/> */}
//       {/* <Hello name="Tom" message="Hi Hello"/> */}

//       <Hello person={person}/>
//     </div>
//   )
// }
// export default App




export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>

      <Profile
        name="Maria Sklodowska-Curie"
        imageId="szV5sdG"
        profession="physicist and chemist"
        awards="4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        discovered="polonium (chemical element)"
      />

      <Profile
        name="Katsuko Saruhashi"
        imageId="YfeOqp2"
        profession="geochemist"
        awards="2 (Miyake Prize for geochemistry, Tanaka Prize)"
        discovered="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
/*
This Gallery component contains some very similar markup for two profiles. Extract a Profile component out of it to reduce the duplication. You’ll need to choose what props to pass to it.
export default function Gallery(){
return(
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>Maria Sklodowska-Curie</h2>
        <img 
        className='"avatar'
        src={getImageUrl('szV5sdG')}
        alt="Maria Sklodowska-Curie"
        width={70}
        height={70}
        />
         <ul>
          <li>
            <b>Profession: </b> 
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b> 
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (chemical element)
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src={getImageUrl('YfeOqp2')}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b> 
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  )
}
*/


/* 
// In this example, Avatar receives a numeric size prop which determines the <img> width and height. The size prop is set to 40 in this example. However, if you open the image in a new tab, you’ll notice that the image itself is larger (160 pixels). The real image size is determined by which thumbnail size you’re requesting.
// Change the Avatar component to request the closest image size based on the size prop. Specifically, if the size is less than 90, pass 's' (“small”) rather than 'b' (“big”) to the getImageUrl function. Verify that your changes work by rendering avatars with different values of the size prop and opening images in a new tab.

function Avatar({person,size}){
let imageSize=size<90?'s':'b';
  return(
    <img
      className="avatar"
      src={getImageUrl(person,imageSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  )
}
export default function Profile(){
  return(
    <Avatar
      size={40}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}
*/

/*
// Passing JSX in a children prop -> Extract a card component from the markup below , and use the children prop to pass diffrent JSX to it:
export default function Profile(){
  return(
    <div>
      <div className="card">
        <div className="card-content">
          <h1>Photo</h1>
          <img
            className="avatar"
            src="https://i.imgur.com/OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={70}
            height={70}
          />
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <h1>About</h1>
          <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
        </div>
      </div>
    </div>
  )
}
*/