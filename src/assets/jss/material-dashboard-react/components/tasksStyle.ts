import {
  defaultFont,
  primaryColor,
  dangerColor,
  grayColor,
  hexToRgb,
  blackColor,
} from "../../material-dashboard-react";
import checkboxAdnRadioStyle from "../../material-dashboard-react/checkboxAdnRadioStyle";
import { makeStyles, Theme } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) => ({
  tooltip: {
    padding: "10px 15px",
    minWidth: "130px",
    lineHeight: "1.7em",
    border: "none",
    borderRadius: "3px",
    boxShadow:
      "0 8px 10px 1px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 3px 14px 2px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 5px 5px -3px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2)",
    maxWidth: "200px",
    textAlign: "center",
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 400,
    textShadow: "none",
    textTransform: "none",
    letterSpacing: "normal",
    wordBreak: "normal",
    wordSpacing: "normal",
    wordWrap: "normal",
    whiteSpace: "normal",
    lineBreak: "auto",
  },
  ...checkboxAdnRadioStyle,
  table: {
    marginBottom: "0",
    overflow: "visible",
  },
  tableRow: {
    position: "relative",
    borderBottom: "1px solid " + grayColor[5],
  },
  tableActions: {
    display: "flex",
    border: "none",
    padding: "12px 8px !important",
    verticalAlign: "middle",
  },
  tableCell: {
    ...defaultFont,
    padding: "8px",
    verticalAlign: "middle",
    border: "none",
    lineHeight: "1.42857143",
    fontSize: "14px",
  },
  tableCellRTL: {
    textAlign: "right",
  },
  tableActionButton: {
    width: "27px",
    height: "27px",
    padding: "0",
  },
  tableActionButtonIcon: {
    width: "17px",
    height: "17px",
  },
  edit: {
    backgroundColor: "transparent",
    color: primaryColor[0],
    boxShadow: "none",
  },
  close: {
    backgroundColor: "transparent",
    color: dangerColor[0],
    boxShadow: "none",
  },
}));
export default useStyles;
