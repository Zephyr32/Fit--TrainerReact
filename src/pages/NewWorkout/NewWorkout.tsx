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
import { Workout } from "../../models/workout";

const useStyle = makeStyles((theme) => ({
  card: {
    paddingLeft: "40px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20px",
    },
  },
}));

const NewWorkout = () => {
  const classes = useStyles();
  const [exercises, setExercises] = useState<Exercise[]>([
    { _id: "1", name: "Exercise #1", type: MeasurementType.kg },
    { _id: "2", name: "Exercise #2", type: MeasurementType.kg },
    { _id: "3", name: "Exercise #3", type: MeasurementType.kg },
    { _id: "4", name: "Exercise #4", type: MeasurementType.kg },
    { _id: "5", name: "Exercise #5", type: MeasurementType.kg },
    { _id: "6", name: "Exercise #6", type: MeasurementType.kg },
  ]);
  const [workout, setWorkout] = useState<Workout[]>([
    { _id: "1", exercise: exercises[0], repeats: 3, measurement: 1 },
    { _id: "2", exercise: exercises[5], repeats: 2, measurement: 2 },
    { _id: "3", exercise: exercises[1], repeats: 2, measurement: 3 },
    { _id: "4", exercise: exercises[3], repeats: 2, measurement: 1 },
    { _id: "5", exercise: exercises[1], repeats: 2, measurement: 6 },
  ]);
  const s = useStyle();
  const changeMeasurement = (id: string, event: any) => {
    console.log();
    setWorkout(
      workout.map((item) => {
        if (item._id === id) {
          return {
            ...item,
            measurement: Number(event.target.value),
          };
        }
        return item;
      })
    );
  };
  const changeRepeats = (id: string, event: any) => {
    setWorkout(
      workout.map((item) => {
        if (item._id === id) {
          return {
            ...item,
            repeats: Number(event.target.value),
          };
        }
        return item;
      })
    );
  };
  const changeExercise = (id: string, event: any) => {
    console.log(event.target.value);
    const find = exercises.find((item) => item._id === event.target.value);
    setWorkout(
      workout.map((item) => {
        if (item._id === id && find) {
          return {
            ...item,
            exercise: find,
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
              <RegularButton regularColor="primary">ADD EXERCISE</RegularButton>
              {workout.map((workout, index) => {
                return (
                  <GridContainer key={index} alignItems={"center"} spacing={3}>
                    <GridItem
                      xs={12}
                      sm={2}
                      md={2}
                      lg={2}
                      xl={2}
                      zeroMinWidth={true}
                    >
                      <CustomSelect
                        labelText="Exercise"
                        id="exercise"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          value: workout.exercise._id,
                          onChange: (event: any) => {
                            changeExercise(workout._id, event);
                          },
                        }}
                        selectOptions={exercises.map((item) => {
                          return {
                            name: item.name,
                            value: item._id,
                          };
                        })}
                      />
                    </GridItem>
                    <GridItem
                      xs={12}
                      sm={3}
                      md={3}
                      lg={3}
                      xl={3}
                      zeroMinWidth={true}
                    >
                      <CustomInput
                        labelText="Repeats"
                        id={"repeats" + workout.exercise.name}
                        inputProps={{
                          type: "number",
                          value: workout.repeats,
                          onChange: (event: any) => {
                            changeRepeats(workout._id, event);
                          },
                        }}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem
                      xs={12}
                      sm={3}
                      md={3}
                      lg={3}
                      xl={3}
                      zeroMinWidth={true}
                    >
                      <CustomInput
                        labelText="Measurement"
                        id={"measurement" + workout.exercise.name}
                        inputProps={{
                          type: "number",
                          value: workout.measurement,
                          onChange: (event: any) => {
                            changeMeasurement(workout._id, event);
                          },
                        }}
                        formControlProps={{
                          fullWidth: true,
                        }}
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
                CREATE WORKOUT
              </RegularButton>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default NewWorkout;
