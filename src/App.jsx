import { useState, useEffect } from "react";
import Homepage from "./components/Homepage";
import ProductDetail from "./components/ProductsDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./components/ CartContext";
import Layout from "./components/Layout";
import styled, { createGlobalStyle } from "styled-components";
import Loading from "./components/Loading";
const GlobalStyle = createGlobalStyle`


  body {
    font-family: 'Raleway', sans-serif;
  
    
  }

  
`;

function App() {
  const [loading, setLoading] = useState(true);

  const simulateNetworkLoad = () => {
    if (navigator.connection) {
      const effectiveType = navigator.connection.effectiveType;
      switch (effectiveType) {
        case "2g":
        case "3g":
          return 5000;
        case "4g":
        case "wifi":
        default:
          return 2000;
      }
    }
    return 3000;
  };

  useEffect(() => {
    const loadingTime = simulateNetworkLoad();

    const timer = setTimeout(() => {
      setLoading(false);
    }, loadingTime);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <CartProvider>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/product/:id"
            element={
              <Layout>
                <ProductDetail />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
