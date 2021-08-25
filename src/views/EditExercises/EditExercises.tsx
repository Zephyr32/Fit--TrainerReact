import React from "react";
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

const EditExercise = () => {
  const classes = useStyles();
  const exercises: Exercise[] = [
    { name: "Exercise #1", type: MeasurementType.kg },
    { name: "Exercise #2", type: MeasurementType.kg },
    { name: "Exercise #3", type: MeasurementType.kg },
    { name: "Exercise #4", type: MeasurementType.kg },
    { name: "Exercise #5", type: MeasurementType.kg },
  ];

  const changeMeasurementType = (exercise: Exercise) => {
    console.log(exercise);
  };
  const changeTaskName = (exercise: Exercise) => {
    console.log(exercise);
  };
  return (
    <div>
      <GridContainer>
        <GridItem xs={10}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Create new exercise</h4>
              <p className={classes.cardCategoryWhite}>
                Please, add a new exercise name and measurement type
              </p>
            </CardHeader>
            <CardBody>
              {exercises.map((exercise) => {
                return (
                  <>
                    <GridContainer direction="row" alignItems="center">
                      <GridItem xs={6} lg={6} md={6}>
                        <CustomInput
                          labelText="Exercise"
                          id={"exercise" + exercise.name}
                          inputProps={{
                            value: exercise.name,
                            onChange: () => {
                              changeTaskName(exercise);
                            },
                          }}
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                      <GridItem xs={2} lg={2} md={2}>
                        <CustomSelect
                          labelText="Measurement type"
                          id="measurement_type"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            value: "kg",
                          }}
                          selectOptions={MeasurementOptions}
                          handleChange={changeMeasurementType(exercise)}
                        />
                      </GridItem>
                      <GridItem xs={3} lg={3} md={3}>
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
                  </>
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
