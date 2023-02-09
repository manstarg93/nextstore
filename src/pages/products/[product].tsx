import Layout from '@/components/layout/Layout';
import { useRouter } from 'next/router';

export default function Product() {
  const router = useRouter();
  const { product } = router.query;
  return (
    <Layout>
      <h1>{product} products</h1>
    </Layout>
  );
}
