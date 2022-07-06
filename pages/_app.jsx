import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { useRouter } from "next/router";

import store from "../store/store";
import Layout from "../components/footer/Layout";
import Spinner from "../components/spinner/Spinner";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    useEffect(() => {
        // setLoading(true);
        router.events.on("routeChangeStart", () => setLoading(false));
        router.events.on("routeChangeComplete", () => setLoading(true));
    }, [router]);

    return (
        <>
            {loading ? (
                <Layout>
                    <Provider store={store}>
                        <Component {...pageProps} />
                    </Provider>
                </Layout>
            ) : (
                <Spinner />
            )}
        </>
    );
}

export default MyApp;

// import Layout from '../components/footer/Layout';
// import { Provider } from "react-redux";
// import store from "../store/store";
// import '../styles/globals.scss'

// const MyApp = ({ Component, pageProps }) => (
//   <Layout>
//     <Provider store={store}>
//       <Component {...pageProps } />
//     </Provider>
//   </Layout>
// )

// export default MyApp;
