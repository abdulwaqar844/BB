import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apollo";
import "./../styles/custom.scss";
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <ApolloProvider client={apolloClient}>
        <Header />
        <Component {...pageProps} />
        <Footer />
    </ApolloProvider>


  );
}
