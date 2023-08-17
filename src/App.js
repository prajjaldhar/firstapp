import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./App";

function CardComp({ imgsrc, title, desc }) {
  return (
    <Card style={{ width: "18rem" }} className="cardstyle">
      <Card.Img variant="top" src={imgsrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button variant="primary">Watch Now</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComp;
