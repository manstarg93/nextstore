import HeadComponent from '@/components/HeadComponent';
import Layout from '@/components/layout/Layout';
import { IProducts } from '@/components/types/productTypes';
import ProductGrid from '@/features/products/ProductGrid';
import ProductsHeader from '@/features/headercta/ProductsHeader';

import { getFragrances, getSkincare } from '@/lib/fetchData';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { productLink } from '@/features/products/productHelperFunction';

interface IWomens {
  fragrances: IProducts;
}

export default function Skincare({ fragrances }: IWomens) {
  return (
    <>
      <HeadComponent />
      <Layout mediumWidth>
        <ProductsHeader
          title="Memory Fragrances"
          description="Long lasting refreshing memories of a simple fresh dream."
        />
        <ProductGrid products={fragrances} />
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const fragrances = await getFragrances();

  return {
    props: {
      fragrances,
    },
  };
};
