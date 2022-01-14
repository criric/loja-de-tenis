import Cards from './Cards'
import styles from '../layouts/Home.module.css'

function Home({ cart, setCart, search }) {
  return (
    <div>
      <h1 className={styles.home}>Produtos</h1>
      <div className={styles.cardsDisplay}>
        <Cards setCart={setCart} cart={cart} search={search} />
      </div>
    </div>
  )
}

export default Home
