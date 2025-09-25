// import { getImageUrl } from "./utils.jsx";

// export default function Profile({
//   name,
//   imageId,
//   profession,
//   awards,
//   discoverd,
//   size=70
// }){
//   const thumb=size<90?'s':'b';

//   return(
//     <section>
//       <h2>{name}</h2>
//       <img
//         className="avatar"
//         src={getImageUrl(imageId, thumb)}
//         alt={name}
//         width={size}
//         height={size}
//       />
//       <ul>
//         <li><b>Profession: </b>{profession}</li>
//         <li><b>Award: </b>{awards}</li>
//         <li><b>Discovered: </b>{discoverd}</li>
//       </ul>
//     </section>
//   )
// }


import { getImageUrl } from "./utils";

function Profile({ name, imageId, profession, awards, discovery }) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b> 
          {profession}
        </li>
        <li>
          <b>Awards: {awards.count} </b> 
          ({awards.items.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}
 export default Profile