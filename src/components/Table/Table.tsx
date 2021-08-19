import React, { FC } from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import useStyles from "../../assets/jss/material-dashboard-react/components/tableStyle";
export type TableHeaderColor =
  | "warning"
  | "primary"
  | "danger"
  | "success"
  | "info"
  | "rose"
  | "gray";
export type TableHeaderNames =
  | "warningTableHeader"
  | "successTableHeader"
  | "dangerTableHeader"
  | "infoTableHeader"
  | "primaryTableHeader"
  | "roseTableHeader"
  | "grayTableHeader";
export interface CustomTablePropsTypes {
  tableHeaderColor?: TableHeaderColor;
  tableHead?: Array<string>;
  tableData?: Array<Array<string>>;
}
export const getTableHeaderClassName = (
  v: TableHeaderColor
): TableHeaderNames => {
  return `${v}TableHeader` as TableHeaderNames;
};

export const CustomTable: FC<CustomTablePropsTypes> = (props) => {
  const classes = useStyles();
  const { tableHead, tableData, tableHeaderColor = "gray" } = props;
  let TableColorHeader = undefined;
  if (tableHeaderColor) {
    TableColorHeader = getTableHeaderClassName(tableHeaderColor);
  }
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead ? (
          <TableHead className={TableColorHeader && classes[TableColorHeader]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {}
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData?.map((prop, key) => {
            return (
              <TableRow key={key} className={classes.tableBodyRow}>
                {prop.map((prop, key) => {
                  return (
                    <TableCell className={classes.tableCell} key={key}>
                      {prop}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
