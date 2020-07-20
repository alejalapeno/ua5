import {AppProps} from 'next/app';
import Head from 'next/head';
import '../global-styles/global.scss';
import {FC} from 'react';

const MyApp: FC<AppProps> = ({Component, pageProps}) => {
	return (
		<>
			<Head>
				<title>UA5 Developer Quiz</title>
				<meta name="description" content="UseAllFive front-end test." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff1493" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="theme-color" content="#ffffff" />
				<meta property="og:image" content="/opengraph.png" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="2400" />
				<meta property="og:image:height" content="1260" />
				<meta property="og:type" content="website" />
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
