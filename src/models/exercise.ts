export interface Exercise {
  name: string;
  type: MeasurementType;
}

export enum MeasurementType {
  kg = "kilograms",
  p = "pounds",
}
export const MeasurementOptions = [
  { value: "kg", name: "kilograms" },
  { value: "p", name: "pounds" },
];
