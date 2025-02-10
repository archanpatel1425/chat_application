import '../styles/global.css';

import {CloudCannonConnect} from '@cloudcannon/react-connector'

export default function App({ Component, pageProps }) {
	const AppComponent = CloudCannonConnect(Component, {
		valueOptions: {
			keepMarkdownAsHTML: false
		}
	});
	return <AppComponent suppressHydrationWarning {...pageProps}/>
}