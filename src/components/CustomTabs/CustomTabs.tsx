import React, { FC, ReactNode } from "react";
import classNames from "classnames";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useStyles from "../../assets/jss/material-dashboard-react/components/customTabsStyle";
import { Card } from "../Card/Card";
import { CardHeader, ColorType } from "../Card/CardHeader";
import { CardBody } from "../Card/CardBody";

export interface CustomTabPropsType {
  tabName: string;
  tabIcon?: any;
  tabContent: ReactNode;
}
export interface CustomTabsPropsType {
  headerColor?: ColorType;
  title?: string;
  tabs: Array<CustomTabPropsType>;
  plainTabs?: boolean;
}

export const CustomTabs: FC<CustomTabsPropsType> = (
  props: CustomTabsPropsType
) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, value: any) => {
    setValue(value);
  };
  const s = useStyles();
  const { headerColor, plainTabs, tabs, title } = props;
  const cardTitle = classNames({
    [s.cardTitle]: true,
  });
  return (
    <Card plain={plainTabs}>
      <CardHeader color={headerColor} plain={plainTabs}>
        {title !== undefined ? <div className={cardTitle}>{title}</div> : null}
        <Tabs
          value={value}
          onChange={handleChange}
          classes={{
            root: s.tabsRoot,
            indicator: s.displayNone,
            scrollButtons: s.displayNone,
          }}
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabs.map((prop, key) => {
            let icon = {};
            if (prop.tabIcon) {
              icon = {
                icon: <prop.tabIcon />,
              };
            }
            return (
              <Tab
                classes={{
                  root: s.tabRootButton,
                  selected: s.tabSelected,
                  wrapper: s.tabWrapper,
                }}
                key={key}
                label={prop.tabName}
                {...icon}
              />
            );
          })}
        </Tabs>
      </CardHeader>
      <CardBody>
        {tabs.map((prop, key) => {
          if (key === value) {
            return <div key={key}>{prop.tabContent}</div>;
          }
          return null;
        })}
      </CardBody>
    </Card>
  );
};
