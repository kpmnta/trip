import styled, { css } from "styled-components";
import Contact from "./Components/Contact";
import Feature from "./Components/Feature";
import Footer from "./Components/Footer";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";
import Price from "./Components/Price";
import Service from "./Components/Service";

const Container = styled.div`
  height: 100vh;
  color: #019492;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -10;
`;

const IntroShape = styled.div`
  ${Shape}
  clip-path: polygon(100% 0%, 100% 100%, 50% 100%, 71% 0%);
  background-color: #f5ebb290;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0% 0%, 0% 100%, 27% 100%, 50% 0%);
  background-color: #FF88CF20;
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0% 0%, 0% 100%, 27% 100%, 27% 0%);
  background-color: #FF88CF40;
`;

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(100% 100%, 100% 0%, 27% 0%, 84% 100%);
  background-color: #f5ebb290;
`;

const FooterShape = styled.div`
  ${Shape}
  clip-path: polygon(100% 100%, 100% 0%, 84% 0%, 84% 100%);
  background-color: #f5ebb2;
`;

const App = () => {
  const smallScreen =  window.screen.width <= 480 ? true : false

  return (
    <>
    <Container>
      <Navbar />
      <Intro />
      {!smallScreen && <IntroShape />}
    </Container>
    <Container>
      <Feature />
      {!smallScreen && <FeatureShape />}
    </Container>
    <Container>
      <Service />
      { !smallScreen && <ServiceShape />}
    </Container>
    <Container>
      <Price />
      {!smallScreen && <PriceShape />}
    </Container>
    <Container>
      <Contact />
      <Footer />
      {!smallScreen && <FooterShape />}
    </Container>
    </>
  );
};

export default App;