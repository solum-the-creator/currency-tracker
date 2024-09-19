/* eslint-disable @typescript-eslint/no-explicit-any */
export type DataChart = {
  o: number;
  h: number;
  l: number;
  c: number;
  s: [number, number];
  x?: number;
};

export type DataConfigType = {
  datasets: [
    {
      label: string;
      data: DataChart[];
      backgroundColor: (ctx: any) => string;
      barThickness?: number;
      minBarLength?: number;
    },
  ];
};
