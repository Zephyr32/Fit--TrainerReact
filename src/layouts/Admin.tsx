import React, { FC, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import routes from "../routes/routes";

import useStyles from "../assets/jss/material-dashboard-react/layouts/adminStyle";

import bgImage from "../assets/img/sidebar-2.jpg";
import logo from "../assets/img/reactlogo.png";
import { Sidebar, SidebarColor } from "../components/Sidebar/Sidebar";
import {
  FixedPlugin,
  FixedPluginColor,
} from "../components/FixedPlugin/FixedPlugin";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Navbars/Navbar";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/admin" to="/admin/dashboard" />
  </Switch>
);

export const Admin: FC = ({ ...rest }) => {
  // styles
  const classes = useStyles();
  const mainPanel = React.createRef<HTMLDivElement>();
  const [ps, setPs] = useState<PerfectScrollbar | null>(null);
  const [image, setImage] = React.useState(bgImage);
  const [color, setColor] = React.useState("blue");
  const [fixedClasses, setFixedClasses] = React.useState("dropdown");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleImageClick = (image: any) => {
    setImage(image);
  };
  const handleColorClick = (color: any) => {
    setColor(color);
  };
  const handleFixedClick = () => {
    if (fixedClasses === "dropdown") {
      setFixedClasses("dropdown show");
    } else {
      setFixedClasses("dropdown");
    }
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/admin/maps";
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1 && mainPanel.current !== null) {
      setPs(
        new PerfectScrollbar(mainPanel.current, {
          suppressScrollX: true,
          suppressScrollY: false,
        })
      );
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1 && ps !== null) {
        ps.destroy();
        setPs(null);
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel, ps]);
  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={routes}
        logoText={"Rick Astley"}
        logo={logo}
        image={image}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        bgColor={color as SidebarColor}
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Header
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        ) : (
          <div className={classes.map}>{switchRoutes}</div>
        )}
        {getRoute() ? <Footer /> : null}
        <FixedPlugin
          handleImageClick={handleImageClick}
          handleColorClick={handleColorClick}
          bgColor={color as FixedPluginColor}
          bgImage={image}
          handleFixedClick={handleFixedClick}
          fixedClasses={fixedClasses}
        />
      </div>
    </div>
  );
};
