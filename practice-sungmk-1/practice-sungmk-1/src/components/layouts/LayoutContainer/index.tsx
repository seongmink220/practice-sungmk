import Header from "../../../../src/components/layouts/Header";
import Footer from "../../../../src/components/layouts/Footer";
// import * as Styled from "./style";
// import Navigation from "../Navigation";
import { useLocation } from "react-router-dom";
import {StrictPropsWithChildren} from "../../../../src/@types/utils";

function LayoutContainer({ children }: StrictPropsWithChildren) {
// function LayoutContainer() {
  const { pathname } = useLocation();

  const hasHeader = () => pathname === "/" || pathname === "/addChannel";

  return (
      <section>
          <Header />

          <Footer />
      </section>
    // <Styled.Container>
    //   {hasHeader() && <Header />}
    //   <Styled.Main hasMarginTop={hasHeader()}>
    //     {children && children}
    //   </Styled.Main>
    //   <Footer />
    //   <Navigation />
    // </Styled.Container>
  );
}

export default LayoutContainer;
