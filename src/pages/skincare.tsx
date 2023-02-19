import HeadComponent from '@/components/HeadComponent';
import Layout from '@/components/layout/Layout';
import { IProducts } from '@/components/types/productTypes';
import ProductGrid from '@/features/products/ProductGrid';
import ProductsHeader from '@/features/headercta/ProductsHeader';
import ProductDisplay from '@/features/products/ProductDisplay';
import { getSkincare } from '@/lib/fetchData';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { productLink } from '@/features/products/productHelperFunction';

interface IWomens {
  skinCare: IProducts;
}

export default function Skincare({ skinCare }: IWomens) {
  return (
    <>
      <HeadComponent />
      <Layout mediumWidth>
        <ProductsHeader
          title="Amazing skincare products"
          description="Awesome variety of our refreshing skin care products."
        />
        <ProductGrid products={skinCare}>
          {skinCare?.map((product) => (
            <ProductDisplay
              {...product}
              key={product.id}
              link={productLink(product.id)}
            />
          ))}
        </ProductGrid>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const skinCare = await getSkincare();

  return {
    props: {
      skinCare,
    },
  };
};
