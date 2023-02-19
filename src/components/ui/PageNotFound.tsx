import Link from 'next/link';
import HeadComponent from '../HeadComponent';
import Layout from '../layout/Layout';

const PageNotFound = () => {
  return (
    <>
      <HeadComponent />
      <Layout>
        <div>
          <p className="center">
            {' '}
            Page not found click{' '}
            <Link className="linkBlue" href={'/'}>
              {' '}
              here to return home
            </Link>{' '}
          </p>
        </div>
      </Layout>
    </>
  );
};
export default PageNotFound;
