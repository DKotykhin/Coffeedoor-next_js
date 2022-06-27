// import { useState, useEffect } from "react";
// import Layout from "../components/footer/Layout";
// import Spinner from "../components/spinner/Spinner";

// import "../styles/globals.css";

// function MyApp({ Component, pageProps }) {
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         setLoading(true);
//     }, []);

//     return (
//         <>
//             {loading ? (
//                 <Layout>
//                     <Component {...pageProps} />
//                 </Layout>
//             ) : (
//                 <Spinner />
//             )}
//         </>
//     );
// }

// export default MyApp;

import Layout from '../components/footer/Layout';
import { Provider } from "react-redux";
import store from "../store/store";
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Provider store={store}>
      <Component {...pageProps } />
    </Provider>
  </Layout>
)

export default MyApp
