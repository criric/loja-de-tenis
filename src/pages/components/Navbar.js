import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link as ReachLink } from 'react-router-dom'
import Carrinho from './Carrinho'
import Home from './Home'
import Contato from './Contato'
import styles from '../layouts/Navbar.module.css'
import { ImCart } from 'react-icons/im'
import { Link } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

function Navbar() {
  const [cart, setCart] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    if (localStorage.getItem('cart')) {
      setCart(JSON.parse(localStorage.getItem('cart')))
    }
  }, [])

  const removeFromCart = item => {
    const cartFilter = cart.filter(product => {
      return product.id !== item.id
    })

    setCart(cartFilter)
    JSON.parse(localStorage.setItem('cart', cartFilter))
  }

  return (
    <Router>
      <nav className={styles.navStyle}>
        <ImCart className={styles.logo} />

        <ul className={styles.listStyle}>
          <input
            type="text"
            placeholder="Qual produto está procurando?"
            className={styles.input}
            onChange={event => setSearch(event.target.value)}
          ></input>
          <li>
            <Link as={ReachLink} to="/" className={styles.textStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link as={ReachLink} to="/carrinho" className={styles.textStyle}>
              Carrinho
            </Link>
          </li>
          <li>
            <Link as={ReachLink} to="/contato" className={styles.textStyle}>
              Contato
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home setCart={setCart} cart={cart} search={search} />}
        ></Route>
        <Route
          path="/carrinho"
          element={<Carrinho cart={cart} removeFromCart={removeFromCart} />}
        ></Route>
        <Route path="/contato" element={<Contato />}></Route>
      </Routes>
    </Router>
  )
}

export default Navbar
