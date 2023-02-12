import type { AppProps } from 'next/app';
import store from '@/features/store/store';
import '../globals.css';
import '../styles/globalStyle';
import { Provider } from 'react-redux';
import { Karla } from '@next/font/google';
const karla = Karla({ weight: '300', subsets: ['latin'] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={karla.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
