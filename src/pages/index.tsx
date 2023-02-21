import Head from 'next/head';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import {
  getAllProducts,
  getFragrances,
  getMensShirt,
  getMensShoes,
  getMensWatches,
  getSkincare,
  getWomensDress,
  getWomensShoes,
} from '@/lib/fetchData';

import Layout from '../components/layout/Layout';

const ProductDisplay = dynamic(
  () => import('../features/products/ProductDisplay')
);
import { IProducts } from '@/components/types/productTypes';
const ProductGrid = dynamic(() => import('@/features/products/ProductGrid'));

import {
  largeItemHandler,
  productLink,
  productPreviewHandler,
} from '@/features/products/productHelperFunction';

const LargeItem = dynamic(() => import('../components/cta/LargeItem'));
import PageSummary from '@/features/summary/PageSummary';
import Header from '@/features/headercta/Header';
import dynamic from 'next/dynamic';
import HeadComponent from '@/components/HeadComponent';

interface Iindex {
  mensShirt: IProducts;
  mensShoes: IProducts;
  mensWatches: IProducts;
  womensDress: IProducts;
  womensShoes: IProducts;
  skinCare: IProducts;
  fragrances: IProducts;
}

export default function Home({
  mensShirt,
  mensShoes,
  mensWatches,
  womensDress,
  womensShoes,

  skinCare,
  fragrances,
}: Iindex) {
  return (
    <>
      <HeadComponent />
      <Layout>
        <Header />
        <ProductGrid
          gridRow="2/3"
          title={'Womens dress'}
          products={womensDress}
        >
          {productPreviewHandler(
            womensDress,
            mensShirt,
            skinCare,
            fragrances
          ).map((product) => {
            return <ProductDisplay key={product.id} {...product} />;
          })}
        </ProductGrid>
        <LargeItem
          link="/fragrances"
          description="Long lasting refreshing memories of a simple fresh dream."
        />
        <ProductGrid
          gridRow="4/5"
          title={'latest skincare products'}
          products={skinCare}
        >
          {skinCare.slice(1, 5).map((product) => {
            return (
              <ProductDisplay
                key={product.id}
                {...product}
                link={productLink(product.id)}
              />
            );
          })}
        </ProductGrid>
        <PageSummary gridRow="5/6" />
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
  const womensDress = await getWomensDress();
  const womensShoes = await getWomensShoes();

  const skinCare = await getSkincare();
  const fragrances = await getFragrances();
  const allProducts = await getAllProducts();

  return {
    props: {
      mensShirt,
      mensShoes,
      mensWatches,
      womensDress,
      womensShoes,

      skinCare,
      fragrances,
      allProducts,
    },
  };
};
