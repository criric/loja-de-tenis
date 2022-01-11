import Cards from './Cards'
import styles from '../layouts/Home.module.css'

function Home({ cart, setCart }) {
  return (
    <div>
      <h1 className={styles.home}>Produtos</h1>
      <div className={styles.cardsDisplay}>
        <Cards setCart={setCart} cart={cart} />
      </div>
    </div>
  )
}

export default Home
