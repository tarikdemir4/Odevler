import { Container, Row, Col } from 'reactstrap';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Menu from "./Menu";
import Footer from './Footer';

function App() {
  const title = "React Uygulaması";
  
  const products = [
    { id: 1, name: "Elma", price: "100 TL" },
    { id: 2, name: "Armut", price: "200 TL" },
    { id: 3, name: "Üzüm", price: "300 TL" },
  ];
  
  const menuItems = ["Anasayfa", "Hakkımızda", "İletişim", "Ürünler"];

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <Navbar title={title} />
        </Col>
        <Col xs={3}>
          <Menu items={menuItems}></Menu>
        </Col>
        <Col xs={9}>
          <Dashboard products={products}></Dashboard> {/* members prop'u çıkarıldı */}
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  )
}

export default App;
