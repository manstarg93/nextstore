import HeadComponent from '@/components/HeadComponent';
import Layout from '@/components/layout/Layout';
import { IProducts } from '@/components/types/productTypes';
import ProductFilter from '@/components/ui/ProductFilter';
import { womensDropdown } from '@/components/ui/productFilterTypes';
import ProductGrid from '@/features/products/ProductGrid';
import ProductsHeader from '@/features/headercta/ProductsHeader';
import ProductDisplay from '@/features/products/ProductDisplay';
import { useAppSelector } from '@/hooks/reduxHooks';
import { useResetProductDropdown } from '@/hooks/resetProductDropDown';
import {
  getMensShirt,
  getMensShoes,
  getMensWatches,
  getWomensDress,
  getWomensShoes,
} from '@/lib/fetchData';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { productLink } from '@/features/products/productHelperFunction';

interface IWomens {
  womensDress: IProducts;
  womensShoes: IProducts;
  womensWatches: IProducts;
}

export default function Womens({
  womensDress,
  womensShoes,
  womensWatches,
}: IWomens) {
  const { productFilterOption } = useAppSelector((state) => state.ui);
  return (
    <>
      <HeadComponent />
      <Layout mediumWidth>
        <ProductsHeader
          title="top Womens products"
          description="Here you will find all of our best womens dress, shoes and the perfect watch for her."
        />
        <ProductFilter dropDownFilter={womensDropdown} />

        {productFilterOption === 'all' && (
          <>
            {[womensDress, womensShoes, womensWatches].map(
              (womensProduct, index) => {
                return (
                  <ProductGrid key={index} products={womensProduct}>
                    {womensProduct?.map((product) => (
                      <ProductDisplay
                        {...product}
                        key={product.id}
                        link={productLink(product.id)}
                      />
                    ))}
                  </ProductGrid>
                );
              }
            )}
          </>
        )}
        {productFilterOption === 'womens dress' && (
          <ProductGrid products={womensDress}>
            {womensDress?.map((product) => (
              <ProductDisplay
                {...product}
                key={product.id}
                link={productLink(product.id)}
              />
            ))}
          </ProductGrid>
        )}
        {productFilterOption === 'womens watches' && (
          <ProductGrid products={womensWatches}>
            {womensWatches?.map((product) => (
              <ProductDisplay
                {...product}
                key={product.id}
                link={productLink(product.id)}
              />
            ))}
          </ProductGrid>
        )}
        {productFilterOption === 'womens shoes' && (
          <ProductGrid products={womensShoes}>
            {womensShoes?.map((product) => (
              <ProductDisplay
                {...product}
                key={product.id}
                link={productLink(product.id)}
              />
            ))}
          </ProductGrid>
        )}
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const womensDress = await getWomensDress();
  const womensShoes = await getWomensShoes();
  const womensWatches = await getMensWatches();

  return {
    props: {
      womensDress,
      womensShoes,
      womensWatches,
    },
  };
};
