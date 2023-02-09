import HeadComponent from '@/components/HeadComponent';
import Layout from '@/components/layout/Layout';
import { IProducts } from '@/components/types/productTypes';
import ProductFilter from '@/components/ui/ProductFilter';
import { womensDropdown } from '@/components/ui/productFilterTypes';
import ProductGrid from '@/components/ui/ProductGrid';
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
  useResetProductDropdown();
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
            <ProductGrid products={womensDress}>
              {womensDress?.map((product) => (
                <ProductDisplay
                  {...product}
                  key={product.id}
                  link={`/products/${product.title}`}
                />
              ))}
            </ProductGrid>
            <ProductGrid products={womensWatches}>
              {womensWatches?.map((product) => (
                <ProductDisplay
                  {...product}
                  key={product.id}
                  link={`/products/${product.title}`}
                />
              ))}
            </ProductGrid>
            <ProductGrid products={womensShoes}>
              {womensShoes?.map((product) => (
                <ProductDisplay
                  {...product}
                  key={product.id}
                  link={`/products/${product.title}`}
                />
              ))}
            </ProductGrid>
          </>
        )}
        {productFilterOption === 'womens dress' && (
          <ProductGrid products={womensDress}>
            {womensDress?.map((product) => (
              <ProductDisplay
                {...product}
                key={product.id}
                link={`/products/${product.title}`}
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
                link={`/products/${product.title}`}
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
                link={`/products/${product.title}`}
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
