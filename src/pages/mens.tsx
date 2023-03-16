import HeadComponent from '@/components/HeadComponent';
import Layout from '@/components/layout/Layout';
import { IProducts } from '@/components/types/productTypes';
import ProductFilter from '@/components/ui/ProductFilter';
import { mensDropdown } from '@/components/ui/productFilterTypes';
import ProductGrid from '@/features/products/ProductGrid';
import ProductsHeader from '@/features/headercta/ProductsHeader';

import { useAppSelector } from '@/hooks/reduxHooks';

import { getMensShirt, getMensShoes, getMensWatches } from '@/lib/fetchData';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { productLink } from '@/features/products/productHelperFunction';

interface IMens {
  mensShirt: IProducts;
  mensShoes: IProducts;
  mensWatches: IProducts;
}

export default function Mens({ mensShirt, mensShoes, mensWatches }: IMens) {
  const { productFilterOption } = useAppSelector((state) => state.ui);

  return (
    <>
      <HeadComponent />
      <Layout mediumWidth>
        <ProductsHeader
          title="top mens products"
          description="Here you will find all of our best mens products including our best time teller watches."
        />
        <ProductFilter dropDownFilter={mensDropdown} />

        {productFilterOption === 'all' && (
          <>
            {[mensShirt, mensShoes, mensWatches].map((mensProduct, index) => {
              return <ProductGrid key={index} products={mensProduct} />;
            })}
          </>
        )}

        {productFilterOption === 'mens shirt' && (
          <ProductGrid products={mensShirt} />
        )}

        {productFilterOption === 'mens shoes' && (
          <ProductGrid products={mensShoes} />
        )}

        {productFilterOption === 'mens watches' && (
          <ProductGrid products={mensWatches} />
        )}
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const mensShirt = await getMensShirt();
  const mensShoes = await getMensShoes();
  const mensWatches = await getMensWatches();

  return {
    props: {
      mensShirt,
      mensShoes,
      mensWatches,
    },
  };
};
