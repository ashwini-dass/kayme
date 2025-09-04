import React from "react";


import Header from "./components/header";
import HomeSlider from "./components/homeslider";
import BlogSection from "./components/blogsection";
import BrandSection from "./components/brandsection";
import ProductSection from "./components/productsection";
import Footer from "./components/footer";

function App() {
  return (
    <>
     
     <Header/>
     <HomeSlider/>
     <ProductSection/>
     <BlogSection/>
     <BrandSection/>
     <Footer/>

    </>
  );
}

export default App;
