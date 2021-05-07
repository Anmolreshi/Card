import {
  Col,
  Container,
  Button,
  Row,
  Card,
  CardTitle,
  CardText,
  CardImg
} from "reactstrap";
import "./styles.css";

export default function App() {
  return (
    <Container>
      <Row className="outerbox">
        <Col xl={4} lg={2} md={2} xs={2}></Col>
        <Col xl={4} lg={6} md={6} xs={8}>
          <div className="box1">
            <div className="box2">
              <Card className="cards" body inverse color="primary">
                <CardImg
                  width="100px"
                  height="200px"
                  src="https://i.gadgets360cdn.com/large/convert_word_to_pdf_1591366878562.jpg"
                  alt="Card image cap"
                />
                <CardTitle tag="h5">Heading</CardTitle>
                <CardText>
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsu lorem ipsum
                </CardText>
                <Button color="danger">Submit</Button>
              </Card>
            </div>
          </div>
        </Col>
        <Col xl={3} lg={2} md={2} xs={2}></Col>
      </Row>
    </Container>
  );
}
