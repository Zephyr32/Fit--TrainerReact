/*eslint-disable*/
import React, { FC, useState } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classnames from "classnames";

import imagine1 from "assets/img/sidebar-1.jpg";
import imagine2 from "assets/img/sidebar-2.jpg";
import imagine3 from "assets/img/sidebar-3.jpg";
import imagine4 from "assets/img/sidebar-4.jpg";

import { RegularButton } from "../CustomButtons/Button";

export interface FixedPluginPropsTypes {
  bgImage?: string;
  handleFixedClick?: (...args: any[]) => any;
  rtlActive?: boolean;
  fixedClasses?: string;
  bgColor?: "purple" | "blue" | "green" | "orange" | "red";
  handleColorClick?: (...args: any[]) => any;
  handleImageClick?: (...args: any[]) => any;
}

export const FixedPlugin: FC<FixedPluginPropsTypes> = (
  props: FixedPluginPropsTypes
) => {
  const [classes, setClasses] = useState("dropdown show");
  const [bg_checked, setBg_checked] = useState(true);
  const [bgImage, setBgImage] = useState(props.bgImage);
  const handleClick = () => {
    props.handleFixedClick && props.handleFixedClick();
  };
  return (
    <div
      className={classnames("fixed-plugin", {
        "rtl-fixed-plugin": props.rtlActive,
      })}
    >
      <div id="fixedPluginClasses" className={props.fixedClasses}>
        <div onClick={handleClick}>
          <i className="fa fa-cog fa-2x" />
        </div>
        <ul className="dropdown-menu">
          <li className="header-title">SIDEBAR FILTERS</li>
          <li className="adjustments-line">
            <a className="switch-trigger">
              <div>
                <span
                  className={
                    props.bgColor === "purple"
                      ? "badge filter badge-purple active"
                      : "badge filter badge-purple"
                  }
                  data-color="purple"
                  onClick={() => {
                    props.handleColorClick && props.handleColorClick("purple");
                  }}
                />
                <span
                  className={
                    props.bgColor === "blue"
                      ? "badge filter badge-blue active"
                      : "badge filter badge-blue"
                  }
                  data-color="blue"
                  onClick={() => {
                    props.handleColorClick && props.handleColorClick("blue");
                  }}
                />
                <span
                  className={
                    props.bgColor === "green"
                      ? "badge filter badge-green active"
                      : "badge filter badge-green"
                  }
                  data-color="green"
                  onClick={() => {
                    props.handleColorClick && props.handleColorClick("green");
                  }}
                />
                <span
                  className={
                    props.bgColor === "red"
                      ? "badge filter badge-red active"
                      : "badge filter badge-red"
                  }
                  data-color="red"
                  onClick={() => {
                    props.handleColorClick && props.handleColorClick("red");
                  }}
                />
                <span
                  className={
                    props.bgColor === "orange"
                      ? "badge filter badge-orange active"
                      : "badge filter badge-orange"
                  }
                  data-color="orange"
                  onClick={() => {
                    props.handleColorClick && props.handleColorClick("orange");
                  }}
                />
              </div>
            </a>
          </li>
          <li className="header-title">Images</li>
          <li className={bgImage === imagine1 ? "active" : ""}>
            <a
              className="img-holder switch-trigger"
              onClick={() => {
                setBgImage(imagine1);
                props.handleImageClick && props.handleImageClick(imagine1);
              }}
            >
              <img src={imagine1} alt="..." />
            </a>
          </li>
          <li className={bgImage === imagine2 ? "active" : ""}>
            <a
              className="img-holder switch-trigger"
              onClick={() => {
                setBgImage(imagine2);
                props.handleImageClick && props.handleImageClick(imagine2);
              }}
            >
              <img src={imagine2} alt="..." />
            </a>
          </li>
          <li className={bgImage === imagine3 ? "active" : ""}>
            <a
              className="img-holder switch-trigger"
              onClick={() => {
                setBgImage(imagine3);
                props.handleImageClick && props.handleImageClick(imagine3);
              }}
            >
              <img src={imagine3} alt="..." />
            </a>
          </li>
          <li className={bgImage === imagine4 ? "active" : ""}>
            <a
              className="img-holder switch-trigger"
              onClick={() => {
                setBgImage(imagine4);
                props.handleImageClick && props.handleImageClick(imagine4);
              }}
            >
              <img src={imagine4} alt="..." />
            </a>
          </li>

          <li className="button-container">
            <div className="button-container">
              <RegularButton
                regularColor="success"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                target="_blank"
                fullWidth
                regularSize={"lg"}
              >
                Download free!
              </RegularButton>
            </div>
          </li>
          <li className="button-container">
            <div className="button-container">
              <RegularButton
                regularColor="warning"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                target="_blank"
                fullWidth
              >
                Get PRO version
              </RegularButton>
            </div>
          </li>
          <li className="button-container">
            <RegularButton
              regularColor="info"
              fullWidth
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
              target="_blank"
            >
              Documentation
            </RegularButton>
          </li>
          <li className="adjustments-line" />
        </ul>
      </div>
    </div>
  );
};
