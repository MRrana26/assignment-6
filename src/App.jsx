import { useState } from 'react'
import './App.css'
import Banner from './Banner/Banner'
import CartSection from './CartSection/CartSection'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import Optional from './Optional/Optional'
import Pricing from './Pricing/Pricing'
import Products from './Products/Products'
import StarsSection from './StarsSection/StarsSection'
import StepsAction from './StepsAction/StepsAction'
import ToggleBtn from './ToggleBtn/ToggleBtn'

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.title} added to cart!`);
  };

  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter(item => item.id !== id);
    setCart(remaining);
  };

  const handleCheckout = () => {
    setCart([]); // সব রিমুভ হবে
    alert("Checkout successful! Your order has been placed.");
  };

  return (
    <>
      <header>
        <Navbar cartCount={cart.length} handleToggle={setShowCart} />
      </header>

      <main>
        <Banner />
        <StarsSection />
        
        <ToggleBtn handleToggle={setShowCart} showCart={showCart} cartCount={cart.length} />

        {
          showCart ? 
          <CartSection 
            cart={cart} 
            handleRemove={handleRemoveFromCart} 
            handleCheckout={handleCheckout} 
          /> : 
          <Products handleAddToCart={handleAddToCart} />
        }
        
        <StepsAction />
        <Pricing />
        <Optional />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App