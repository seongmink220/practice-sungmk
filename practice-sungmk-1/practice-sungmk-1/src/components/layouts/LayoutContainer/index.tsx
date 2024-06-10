import Header from "../../../../src/components/layouts/Header";
import Footer from "../../../../src/components/layouts/Footer";
import * as Styled from "./style";
import Navigation from "../Navigation";
import {Link, useLocation} from "react-router-dom";
import {StrictPropsWithChildren} from "../../../../src/@types/utils";
import routes from '../../../Routes';
import {PATH_NAME} from "../../../../src/@constants/path";

function LayoutContainer({ children }: StrictPropsWithChildren) {
// function LayoutContainer() {
  const { pathname } = useLocation();

  const hasHeader = () => pathname === "/" || pathname === "/addChannel";

    // console.log("PATH_NAME.TERMINAL==" + PATH_NAME.TERMINAL);

  return (
      <Styled.Container>
          <section>
              <Header />
              <Navigation />
              {/*{hasHeader() && <div>DefaultLayOut View</div>}*/}
              {children && children}
              {/*<Link to={routes.find(route => route.path === PATH_NAME.TERMINAL)?.path || '/'}>Terminal</Link>*/}
              <Footer/>
          </section>
      </Styled.Container>

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
