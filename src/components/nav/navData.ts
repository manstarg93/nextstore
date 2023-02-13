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
        { title: 'mens shirt', link: '/mens' },
        { title: 'mens shoes', link: '/mens' },
        { title: 'mens watches', link: '/mens' },
      ],
    },
  },
  {
    title: 'shop women',
    link: '/womens',
    dropdownData: {
      title: 'shop women',
      dropDown: [
        { title: 'womens dress', link: '/womens' },
        { title: 'womens shoes', link: '/womens' },
        { title: 'womens watches', link: '/womens' },
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
