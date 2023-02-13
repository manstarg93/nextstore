import { title } from 'process';

export const mensDropdown = [
  { title: 'all' },
  { title: 'mens shirt' },
  { title: 'mens shoes' },
  { title: 'mens watches' },
];

export const womensDropdown = [
  { title: 'all' },
  { title: 'womens dress' },
  { title: 'womens shoes' },
  { title: 'womens watches' },
];

export type dropDownFilterType =
  | {
      title: string;
    }[];
