import { NextPage } from "next";
import { Button, Card, Grid, Header, Image } from "semantic-ui-react";
import { ProductCardPropsType } from "../dataTypes/propsTypes";


const ProductCard: NextPage<ProductCardPropsType> = ({ productName, productQty, productPrice, productImage, inStock }) => {
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
        <Header color="black" style={{ textAlign: "center", margin: "0px" }}>
            ৳ {productPrice}
        </Header>
    );
    const meta = (
        <Header
            size="small"
            color="grey"
            style={{ textAlign: "center", margin: "0px 0px 15px 0px" }}
        >
            <span style={{color: inStock ? "green" : "red", display:"block"}}>{inStock ? "In stock" : "Out of Stock"}</span>
            {productQty}
        </Header>
    );

    const img = (
        <Image centered src={productImage} size='small' />
    )

    return (
        <Grid.Column style={{ margin: "10px 0px" }} computer={4} largeScreen={4} tablet={5} mobile={16}>
            <Card
                color={inStock ? "green" : "red"}
                image={img}
                header={header}
                meta={meta}
                description={description}
                extra={extra}
                
            />
        </Grid.Column>
    );
};

export default ProductCard;
