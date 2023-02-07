export const navData = [
  {
    title: 'Shop Men',
    link: '/mens',
    dropdownData: [
      { title: 'mens-shirt', link: '/mens-shirt' },
      { title: 'mens-shoes', link: '/mens-shoes' },
      { title: 'mens-watch', link: '/mens-watch' },
    ],
  },
  {
    title: 'Shop Women',
    link: '/womens',
    dropdownData: [
      { title: 'womens-dress', link: '/womens-dress' },
      { title: 'womens-shoes', link: '/womens-shoes' },
      { title: 'womens-watch', link: '/womens-watch' },
    ],
  },
  {
    title: 'Skincare',
    link: '/skincare',
    dropdownData: [{ title: 'skincare', link: '/skincare' }],
  },
  {
    title: 'Fragrances',
    link: '/fragrances',
    dropdownData: [{ title: 'fragrances', link: '/skincare' }],
  },
];

export type navDataType = {
  title: string;
  link: string;
  dropdownData: { title: string; link: string }[];
}[];

export type IDropdownTypes = {
  title: string;
  link: string;
  dropdownData: { title: string; link: string }[];
} | null;
