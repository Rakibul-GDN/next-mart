import { NextPage } from "next";
import { useRouter } from "next/router";
import { Button, Card, Grid } from "semantic-ui-react";

const extra = (
  <Button.Group fluid>
    <Button color="yellow">Details</Button>
    <Button color="green">Add to Cart</Button>
  </Button.Group>
);

const ProductPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Grid>
      <Grid.Row columns={4}>
        <Grid.Column style={{margin:"10px 0px"}}>
          <Card
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQWP5oJP7nRytBIbbxpmrHetm8pukOYuTgw&usqp=CAU"
            header="Nivea Soft Cream"
            meta="1 pc(s)"
            description="৳ 450"
            extra={extra}
          />
        </Grid.Column>
        <Grid.Column style={{margin:"10px 0px"}}>
          <Card
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQWP5oJP7nRytBIbbxpmrHetm8pukOYuTgw&usqp=CAU"
            header="Nivea Soft Cream"
            meta="1 pc(s)"
            description="৳ 450"
            extra={extra}
          />
        </Grid.Column>
        <Grid.Column style={{margin:"10px 0px"}}>
          <Card
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQWP5oJP7nRytBIbbxpmrHetm8pukOYuTgw&usqp=CAU"
            header="Nivea Soft Cream"
            meta="1 pc(s)"
            description="৳ 450"
            extra={extra}
          />
        </Grid.Column>
        <Grid.Column style={{margin:"10px 0px"}}>
          <Card
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQWP5oJP7nRytBIbbxpmrHetm8pukOYuTgw&usqp=CAU"
            header="Nivea Soft Cream"
            meta="1 pc(s)"
            description="৳ 450"
            extra={extra}
          />
        </Grid.Column>
        <Grid.Column style={{margin:"10px 0px"}}>
          <Card
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQWP5oJP7nRytBIbbxpmrHetm8pukOYuTgw&usqp=CAU"
            header="Nivea Soft Cream"
            meta="1 pc(s)"
            description="৳ 450"
            extra={extra}
          />
        </Grid.Column>
        <Grid.Column style={{margin:"10px 0px"}}>
          <Card
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQWP5oJP7nRytBIbbxpmrHetm8pukOYuTgw&usqp=CAU"
            header="Nivea Soft Cream"
            meta="1 pc(s)"
            description="৳ 450"
            extra={extra}
          />
        </Grid.Column>
        <Grid.Column style={{margin:"10px 0px"}}>
          <Card
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQWP5oJP7nRytBIbbxpmrHetm8pukOYuTgw&usqp=CAU"
            header="Nivea Soft Cream"
            meta="1 pc(s)"
            description="৳ 450"
            extra={extra}
          />
        </Grid.Column>
        <Grid.Column style={{margin:"10px 0px"}}>
          <Card
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQWP5oJP7nRytBIbbxpmrHetm8pukOYuTgw&usqp=CAU"
            header="Nivea Soft Cream"
            meta="1 pc(s)"
            description="৳ 450"
            extra={extra}
          />
        </Grid.Column>
        <Grid.Column style={{margin:"10px 0px"}}>
          <Card
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQWP5oJP7nRytBIbbxpmrHetm8pukOYuTgw&usqp=CAU"
            header="Nivea Soft Cream"
            meta="1 pc(s)"
            description="৳ 450"
            extra={extra}
          />
        </Grid.Column>
        <Grid.Column style={{margin:"10px 0px"}}>
          <Card
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQWP5oJP7nRytBIbbxpmrHetm8pukOYuTgw&usqp=CAU"
            header="Nivea Soft Cream"
            meta="1 pc(s)"
            description="৳ 450"
            extra={extra}
          />
        </Grid.Column>
        
      </Grid.Row>
    </Grid>
  );
};

export default ProductPage;
