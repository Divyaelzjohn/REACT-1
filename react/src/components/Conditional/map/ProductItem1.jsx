export default function ProductItem1({ product }) {
  return (
    <li>
      <strong>{product.name}</strong> ({product.category}) - ${product.price}
      {!product.inStock && <span style={{ color: "red" }}> (Out of stock)</span>}
    </li>
  );
}