import React, {useState} from 'react';
import HomePageHeader from "./HomePageHeader";
import Products from "./Products";

import {
    HomePageContainer,   
} from "./styles";

  
function HomePage(props){
    
  
    const [cartLength, setCartLength] = useState([])
    const [category, setCategory] = useState("");
    const [products, setProducts] = useState([{
  
          "id": 0,
          "category": "Frutas",
          "name": "Banana",
          "description": "Banana Orgânica 1kg",
          "price": 3.50,
          "image": "https://cdn.pixabay.com/photo/2017/06/27/22/21/banana-2449019_1280.jpg",
          "quantity": 0
      },
      {
  
          "id": 1,
          "category": "Frutas",
          "name": "Maçã",
          "description": "Maçã Orgânica 1kg",
          "price": 5.50,
          "image": "https://cdn.pixabay.com/photo/2015/06/10/19/56/apples-805124_1280.jpg",
          "quantity": 0
      },
      {
  
          "id": 2,
          "category": "Bebidas",
          "name": "Suco Rosa",
          "description": "Suco de 500ml",
          "price": 10.00,
          "image": "https://cdn.pixabay.com/photo/2020/07/09/22/23/fruit-juice-5388892_1280.jpg",
          "quantity": 0
      },
      {
  
          "id": 3,
          "category": "Bebidas",
          "name": "Suco Verde",
          "description": "Suco de couve 500ml",
          "price": 5.50,
          "image": "https://cdn.pixabay.com/photo/2020/07/09/22/23/fruit-juice-5388892_1280.jpg",
          "quantity": 0
      },
      {
  
          "id": 4,
          "category": "Verduras",
          "name": "Cenoura",
          "description": "Cenoura 1 molho",
          "price": 3.50,
          "image": "https://cdn.pixabay.com/photo/2018/02/25/08/56/carrot-3179988_1280.jpg",
          "quantity": 0
      },
  
    ]);
 
    
      
    return(
        <HomePageContainer>           
            <HomePageHeader 
            cartLength={cartLength} setCartLength={setCartLength}
            />
          
            <Products  
            category={category} setCategory={setCategory} 
            products={products} setProducts={setProducts} 
            cartLength={cartLength} setCartLength={setCartLength} 
            cartItems={props.cartItems} setCartItems={props.setCartItems}
            />
        </HomePageContainer>
        
    );
}

export default HomePage;