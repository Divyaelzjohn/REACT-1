import { getImageUrl } from "./utils.jsx";

export default function Profile({
  name,
  imageId,
  profession,
  awards,
  discoverd,
  size=70
}){
  const thumb=size<90?'s':'b';

  return(
    <section>
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId, thumb)}
        alt={name}
        width={size}
        height={size}
      />
      <ul>
        <li><b>Profession: </b>{profession}</li>
        <li><b>Award: </b>{awards}</li>
        <li><b>Discovered: </b>{discoverd}</li>
      </ul>
    </section>
  )
}
