export type navDataType = {
  title: string;
  link: string;
  dropdownData?: {
    title: string;
    dropDown: { title: string; link: string }[];
  };
}[];

export const navData = [
  {
    title: 'shop men',
    link: '/mens',
    dropdownData: {
      title: 'shop men',
      dropDown: [
        { title: 'mens-shirt', link: '/mens-shirt' },
        { title: 'mens-shoes', link: '/mens-shoes' },
        { title: 'mens-watch', link: '/mens-watch' },
      ],
    },
  },
  {
    title: 'shop women',
    link: '/womens',
    dropdownData: {
      title: 'shop women',
      dropDown: [
        { title: 'womens-dress', link: '/womens-dress' },
        { title: 'womens-shoes', link: '/womens-shoes' },
        { title: 'womens-watch', link: '/womens-watch' },
      ],
    },
  },
  {
    title: 'skincare',
    link: '/skincare',
  },
  {
    title: 'fragrances',
    link: '/fragrances',
  },
];

export type IDropdownTypes = {
  title: string;
  dropDown: { title: string; link: string }[];
};
