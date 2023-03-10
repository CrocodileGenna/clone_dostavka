import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
// KFC
import menuKFC from './components/KFC/KFC.jsx';
// import titleMenuPizzaKFC from './components/KFC/titleMenuKFC.jsx';
// Pizza Day;
import menuPizza from './components/PizzaDay/pizzaDay';
// import titleMenuPizzaDay from './components/PizzaDay/titleMenuPizzaDay';
import { Menu } from './components/Menu/Menu';

import { GlobalStyle, Container } from './App.styled';

const App = () => {
  return (
    <GlobalStyle>
      <Header />
      <Container>
        <Routes>
          <Route path="/clone_dostavka" element={<Home />} />
          <Route path="/clone_dostavka/KFC" element={<Menu prop={menuKFC} />} />
          <Route
            path="/clone_dostavka/PizzaDay"
            element={<Menu prop={menuPizza} />}
          />
        </Routes>
      </Container>
      <Footer />
    </GlobalStyle>
  );
};

export default App;
