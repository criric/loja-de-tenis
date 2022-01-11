import styles from '../layouts/Carrinho.module.css'
import cardStyle from '../layouts/Cards.module.css'
import styless from '../layouts/Home.module.css'

function Carrinho({ cart }) {
  console.log(cart)
  return (
    <>
      <h1 className={styles.carrinho}>Carrinho</h1>
      <h2>
        Total:
        {cart
          .reduce((acc, item) => {
            return (acc += item.price)
          }, 0)
          .toFixed(2)}
      </h2>
      <div className={styless.cardsDisplay}>
        {cart?.length > 0 ? (
          cart.map(item => {
            return (
              <div className={cardStyle.box}>
                <img src={item.image} alt="Imagem Exemplo" />
                <h3>{item.title}</h3>
                <h3 className={cardStyle.priceStyle}>
                  {item.price.toFixed(2)}
                </h3>
              </div>
            )
          })
        ) : (
          <p>O carrinho está vazio</p>
        )}
      </div>
    </>
    // <div>
    //   <h1 className={styles.carrinho}>Carrinho</h1>
    //   {cart?.length === 0 && <p>Carrinho está vazio</p>}
    // </div>
  )
}

export default Carrinho
