import { NextPage } from "next";
import { useRouter } from "next/router";
import { Grid } from "semantic-ui-react";
import ProductCard from "../components/ProductCard";

const products = [
  {
    productName: "Cheese Puff",
    productQty: "1 pc(s)",
    productPrice: 10,
    productImage:
      "https://chaldn.com/_mpimage/cheese-puff-1-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D35210&q=low&v=1&m=400&webp=1",
  },
  {
    productName: "Bombay Sweets Potato Crackers",
    productQty: "22 gm",
    productPrice: 10,
    productImage:
      "https://chaldn.com/_mpimage/bombay-sweets-potato-crackers-22-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D47732&q=low&v=1&m=400&webp=1",
  },
  {
    productName: "Bombay Sweets Mr. Twist",
    productQty: "22 gm",
    productPrice: 15,
    productImage:
      "https://chaldn.com/_mpimage/bombay-sweets-mr-twist-22-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D47731&q=low&v=1&m=400&webp=1",
  },
  {
    productName: "Bombay Sweets Ring Chips",
    productQty: "20 gm",
    productPrice: 10,
    productImage:
      "https://chaldn.com/_mpimage/bombay-sweets-ring-chips-20-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D47733&q=low&v=1&m=400&webp=1",
  },
  {
    productName: "Detos Chicken Wing Chips",
    productQty: "30 gm",
    productPrice: 20,
    productImage:
      "https://chaldn.com/_mpimage/detos-chicken-wings-chips-30-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D65800&q=low&v=1&m=400&webp=1",
  },
  {
    productName: "Cheese Ball",
    productQty: "20 gm",
    productPrice: 10,
    productImage:
      "https://chaldn.com/_mpimage/bombay-sweets-cheese-ball-cheezee-corn-snacks-20-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D48121&q=low&v=1&m=400&webp=1",
  },
  {
    productName: "Lay's American Style Cream & Onion",
    productQty: "52 gm",
    productPrice: 60,
    productImage:
      "https://chaldn.com/_mpimage/lays-american-style-cream-onion-52-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D21317&q=low&v=1&m=400&webp=1",
  },
];

const ProductPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Grid centered>
      {products.map((product) => (
        <ProductCard
          productName={product.productName}
          productQty={product.productQty}
          productPrice={product.productPrice}
          productImage={product.productImage}
        />
      ))}
    </Grid>
  );
};

export default ProductPage;
