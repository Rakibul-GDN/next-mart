import { NextPage } from "next";
import { Button, Card, Grid, Header } from "semantic-ui-react";

type ProductCardPropsType = {
    productName: string;
    productQty: string;
    productPrice: number;
    productImage: string
}

const ProductCard: NextPage<ProductCardPropsType> = ({ productName, productQty, productPrice, productImage }) => {
    const extra = (
        <Button.Group fluid>
            <Button color="yellow">Details</Button>
            <Button color="green">Add to Cart</Button>
        </Button.Group>
    );

    const header = (
        <Header size="medium" style={{ textAlign: "center", margin: "0px", height: "50px" }}>
            {
                productName.length > 50
                    ? productName.substring(0, 50).concat(". . . ")
                    : productName
            }
        </Header>
    );

    const description = (
        <Header color="red" style={{ textAlign: "center", margin: "0px" }}>
            ৳ {productPrice}
        </Header>
    );
    const meta = (
        <Header
            size="small"
            color="grey"
            style={{ textAlign: "center", margin: "15px 0px" }}
        >
            {productQty}
        </Header>
    );

    return (
        <Grid.Column style={{ margin: "10px 0px" }} computer={4} largeScreen={4} tablet={5} mobile={16}>
            <Card
                image={productImage}
                header={header}
                meta={meta}
                description={description}
                extra={extra}
            />
        </Grid.Column>
    );
};

export default ProductCard;
