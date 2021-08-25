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
import { CustomSelect } from "../../components/CustomSelect/CustomSelect";
import { MeasurementOptions } from "../../models/exercise";

const NewExercise = () => {
  const classes = useStyles();
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
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Exercise Name"
                    id="exercise"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomSelect
                    labelText="Measurement type"
                    id="measurement_type"
                    selectOptions={MeasurementOptions}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <RegularButton regularColor="primary">
                CREATE EXERCISE
              </RegularButton>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default NewExercise;
