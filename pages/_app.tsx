import { Box, ChakraProvider } from '@chakra-ui/react'
import images from 'assets/images'
import Footer from 'component/shared/Footer'
import NavBar from 'component/shared/NavBar'
import { APP_NAME } from 'core/common/constants'
import { theme } from 'core/common/theme'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'
import 'styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Head>
				<title>{APP_NAME}</title>
				<link rel="shortcut icon" href={images.logo.circle.src} />
				<meta property="og:title" content={APP_NAME} key="title" />
			</Head>
			<NextNprogress
				color="#ecb75d"
				startPosition={0.5}
				options={{ easing: 'ease' }}
			/>
			<Box minH="100vh">
				<NavBar />
				<Component {...pageProps} />
			</Box>
			<Footer />
		</ChakraProvider>
	)
}

export default MyApp
