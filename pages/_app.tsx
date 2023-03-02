import { AppProps } from 'next/app';
import { ContextProvider } from '../lib/context';

import '@theme/global.scss';
import 'highlight.js/styles/an-old-hope.css';
import 'katex/dist/katex.min.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ContextProvider>
            <Component {...pageProps} />
        </ContextProvider>
    );
}
