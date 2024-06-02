// import AddChannel from "@src/pages/AddChannel";
// import Feed from "@src/pages/Feed";
// import SpecificDateFeed from "@src/pages/SpecificDateFeed";
// import Home from "@src/pages/Home";
// import NotFound from "@src/pages/NotFound";
// import Manual from "@src/pages/Manual";
// import { PATH_NAME } from "@src/@constants/path";
//
// import LayoutContainer from "src/components/layouts/LayoutContainer";
import LayoutContainer from "../src/components/layouts/LayoutContainer";

const routes = [
      {
        path: "",
        element: (
            <LayoutContainer>
              {/*<Manual/>*/}
            </LayoutContainer>
        ),
      },
      // {
      //   path: PATH_NAME.HOME,
      //   element: (
      //       <LayoutContainer>
      //         <Home/>
      //       </LayoutContainer>
      //   ),
      // },
      // {
      //   path: PATH_NAME.ADD_CHANNEL,
      //   element: <AddChannel />,
      // },
      // {
      //   path: `${PATH_NAME.FEED}/:date`,
      //   element: <SpecificDateFeed />,
      // },
      // {
      //   path: PATH_NAME.FEED,
      //   element:(
      //       <LayoutContainer>
      //         <Feed/>
      //       </LayoutContainer>
      //   ),
      // },
      // {
      //   path: "*",
      //   element: <NotFound />,
      // },
];

export default routes;
