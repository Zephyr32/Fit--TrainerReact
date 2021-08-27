import { Exercise } from "./exercise";

export interface Workout {
  _id: string;
  exercise: Exercise;
  repeats: number;
  measurement: number;
}
