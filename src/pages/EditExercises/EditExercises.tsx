import React, { useState } from "react";
import { GridItem } from "../../components/Grid/GridItem";
import { Card } from "../../components/Card/Card";
import { CardHeader } from "../../components/Card/CardHeader";
import { CardBody } from "../../components/Card/CardBody";
import { GridContainer } from "../../components/Grid/GridContainer";
import useStyles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";
import { CardFooter } from "../../components/Card/CardFooter";
import { RegularButton } from "../../components/CustomButtons/Button";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import {
  Exercise,
  MeasurementOptions,
  MeasurementType,
} from "../../models/exercise";
import { ArrowDownward, ArrowUpward, Cancel } from "@material-ui/icons";
import { CustomSelect } from "../../components/CustomSelect/CustomSelect";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  card: {
    paddingLeft: "40px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20px",
    },
  },
}));

const EditExercise = () => {
  const classes = useStyles();
  const [exercises, setExercises] = useState<Exercise[]>([
    { _id: "1", name: "Exercise #1", type: MeasurementType.kg },
    { _id: "2", name: "Exercise #2", type: MeasurementType.kg },
    { _id: "3", name: "Exercise #3", type: MeasurementType.kg },
    { _id: "4", name: "Exercise #4", type: MeasurementType.kg },
    { _id: "5", name: "Exercise #5", type: MeasurementType.kg },
  ]);
  const s = useStyle();
  const changeMeasurementType = (id: string, event: any) => {
    console.log();
    setExercises(
      exercises.map((item) => {
        if (item._id === id) {
          return {
            ...item,
            type: MeasurementType[event.target.value as MeasurementType],
          };
        }
        return item;
      })
    );
  };
  const changeTaskName = (id: string, event: any) => {
    setExercises(
      exercises.map((item) => {
        if (item._id === id) {
          return {
            ...item,
            name: event.target.value,
          };
        }
        return item;
      })
    );
  };
  return (
    <div>
      <GridContainer spacing={5}>
        <GridItem xs={12} sm={12} md={12} lg={10} xl={10}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Create new exercise</h4>
              <p className={classes.cardCategoryWhite}>
                Please, add a new exercise name and measurement type
              </p>
            </CardHeader>
            <CardBody className={s.card}>
              {exercises.map((exercise, index) => {
                return (
                  <GridContainer key={index} alignItems={"center"} spacing={3}>
                    <GridItem
                      xs={12}
                      sm={6}
                      md={6}
                      lg={6}
                      xl={6}
                      zeroMinWidth={true}
                    >
                      <CustomInput
                        labelText="Exercise"
                        id={"exercise" + exercise.name}
                        inputProps={{
                          value: exercise.name,
                          onChange: (event: any) => {
                            changeTaskName(exercise._id, event);
                          },
                        }}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem
                      xs={12}
                      sm={2}
                      md={2}
                      lg={2}
                      xl={2}
                      zeroMinWidth={true}
                    >
                      <CustomSelect
                        labelText="Measurement type"
                        id="measurement_type"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          value: MeasurementType[exercise.type],
                          onChange: (event: any) => {
                            changeMeasurementType(exercise._id, event);
                          },
                        }}
                        selectOptions={MeasurementOptions}
                      />
                    </GridItem>
                    <GridItem
                      xs={"auto"}
                      lg={"auto"}
                      md={"auto"}
                      zeroMinWidth={true}
                    >
                      <RegularButton regularColor="info">
                        <ArrowUpward />
                      </RegularButton>
                      <RegularButton regularColor="info">
                        <ArrowDownward />
                      </RegularButton>
                      <RegularButton regularColor="warning">
                        <Cancel />
                      </RegularButton>
                    </GridItem>
                  </GridContainer>
                );
              })}
            </CardBody>
            <CardFooter>
              <RegularButton regularColor="primary">
                UPDATE EXERCISES
              </RegularButton>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default EditExercise;
