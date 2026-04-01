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

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Banner />
        <StarsSection />
        
        <ToggleBtn handleToggle={setShowCart} showCart={showCart} />

        {
          showCart ? <CartSection /> : <Products />
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