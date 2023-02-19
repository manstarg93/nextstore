import HeadComponent from '@/components/HeadComponent';
import Layout from '@/components/layout/Layout';
import { IProduct, IProducts } from '@/components/types/productTypes';
import SelectedProducts from '@/features/selectedProducts/SelectedProducts';
import { getAllProducts, getSingleProduct } from '@/lib/fetchData';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

interface IProductParam {
  dataProduct: IProduct;
}

export default function Product({ dataProduct }: IProductParam) {
  const router = useRouter();
  const { product } = router.query;

  return (
    <>
      <HeadComponent />
      <Layout>
        <SelectedProducts selectedProduct={dataProduct} />
      </Layout>
    </>
  );
}

////////// Server side render static paths
export const getStaticPaths: GetStaticPaths = async () => {
  const allProducts = await getAllProducts();

  const paths =
    allProducts &&
    allProducts.map((prod: IProduct) => {
      return {
        params: {
          product: prod.id.toString(),
        },
      };
    });

  return {
    paths,
    fallback: false,
  };
};

interface Iparams extends ParsedUrlQuery {
  product: string;
}
export const getStaticProps: GetStaticProps = async (context) => {
  const { product } = context.params as Iparams;

  const dataProduct = await getSingleProduct(product);

  return {
    props: { dataProduct },
  };
};
