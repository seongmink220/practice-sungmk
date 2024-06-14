import * as Styled from "./style";
import { PATH_NAME } from "../../../../src/@constants/path";
// import MenuIcon from "@public/assets/icons/MenuIcon.svg";
// import StarIconUnfill from "@public/assets/icons/StarIcon-Unfill.svg";
// import HomeIconUnfill from "@public/assets/icons/HomeIcon-Unfill.svg";
// import WrapperButton from "@src/components/@shared/WrapperButton";
// import Dimmer from "@src/components/@shared/Dimmer";
// import Portal from "@src/components/@shared/Portal";
// import WrapperLink from "@src/components/@shared/WrapperLink";
// import Drawer from "@src/components/Drawer";
import {Link} from "react-router-dom";
import React from "react";

function Navigation() {
  // const [isMenuDrawerOpened, setIsMenuDrawerOpened] = useState(false);
  //
  // const handleCloseDrawer = () => {
  //   setIsMenuDrawerOpened(false);
  // };
  //
  // const handleToggleDrawer = () => {
  //   setIsMenuDrawerOpened((prev) => !prev);
  // };

  // useEffect(() => {
  //   if (isMenuDrawerOpened) {
  //     document.body.style.overflowY = "hidden";
  //     return;
  //   }
  //   document.body.style.overflowY = "auto";
  // }, [isMenuDrawerOpened]);

  return (
      <Styled.Container>
          <Styled.WrapperLink to={PATH_NAME.TERMINAL}>Terminal</Styled.WrapperLink>
          <Styled.WrapperLink to={PATH_NAME.TERMINAL}>Test</Styled.WrapperLink>
          <Styled.WrapperLink to={PATH_NAME.HOME}>난 Navigation 이다.</Styled.WrapperLink>
      </Styled.Container>
      // <Styled.Container>
    //   <WrapperButton kind="bigIcon" onClick={handleToggleDrawer}>
    //     <MenuIcon width="24px" height="24px" fill="#121212" />
    //   </WrapperButton>
    //   <WrapperLink to={PATH_NAME.HOME} kind="bigIcon">
    //     <HomeIconUnfill width="24px" height="24px" fill="#121212" />
    //   </WrapperLink>
    //   <WrapperLink to={PATH_NAME.FEED} kind="bigIcon">
    //     <StarIconUnfill width="24px" height="24px" fill="#121212" />
    //   </WrapperLink>
    //   <Portal isOpened={isMenuDrawerOpened}>
    //     <>
    //       <Dimmer hasBackgroundColor={true} onClick={handleCloseDrawer} />
    //       <Drawer />
    //     </>
    //   </Portal>
    // </Styled.Container>
  );
}

export default Navigation;
