import React from "react";
import Page6 from "./Page6";
import Page40 from "./Page40";
import Page352 from "./Page352";
import Page452 from "./Page452";
import Page215 from "./Page215";

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default {
  path: "/",
  component: App,
  indexRoute: { component: Page6 },
  childRoutes: [
    {
      path: "/work",
      name: "/work",
      component: Page6
    },
    {
      path: "/about",
      name: "/about",
      component: Page40
    },
    {
      path: "/Pixel2017",
      name: "/Pixel2017",
      component: Page352
    },
    {
      path: "/GH2018",
      name: "/GH2018",
      component: Page452
    },
    {
      path: "/new-page",
      name: "/new-page",
      component: Page215
    },
    {
      path: "*",
      name: "notfound",
      component: Page6
    }
  ]
};
