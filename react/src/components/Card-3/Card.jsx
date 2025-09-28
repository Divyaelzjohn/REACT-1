
export default function Card({ title, description, image, children }) {
  return (
    <div>
      <img src={image} alt={title} />

      <div>
        <h2>{title}</h2>
        <p>{description}</p>

        <div>{children}</div>
      </div>
    </div>
  )
}