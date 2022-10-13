import '../styles/app.scss'
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'antd/dist/antd.css'
import 'bootstrap/scss/bootstrap.scss'
import 'nprogress/nprogress.css'
import NProgress from 'nprogress';
import {Router} from "next/router";
import RouteLoader from "../components/common/preloader";
import Head from "next/head";
import SiteContext from "../contexts/site";
import {useFetch} from "../helpers/hooks";
import {fetchSiteSettings} from "../helpers/backend_helper";

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


function MyApp({ Component, pageProps }) {
    const [settings] = useFetch(fetchSiteSettings)
	
  return (
        <>
            <Head>
                <title>{settings?.site_title}</title>
                <link rel='manifest' href='/manifest.json' />
            </Head>
            <RouteLoader/>
            <SiteContext.Provider value={settings}>
                <Component {...pageProps}/>
            </SiteContext.Provider>
        </>
    )
}

export default MyApp
