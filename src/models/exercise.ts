export interface Exercise {
  _id: string;
  name: string;
  type: MeasurementType;
}

export enum MeasurementType {
  kg = "kilograms",
  p = "pounds",
  kilograms = "kg",
  pounds = "p",
}
export const MeasurementOptions = [
  { value: "kg", name: "kilograms" },
  { value: "p", name: "pounds" },
];
