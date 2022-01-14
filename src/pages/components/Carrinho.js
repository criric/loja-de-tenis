import styles from '../layouts/Carrinho.module.css'
import { ImCross } from 'react-icons/im'

function Carrinho({ cart, removeFromCart }) {
  return (
    <>
      <h1 className={styles.carrinho}>Carrinho</h1>

      <div>
        {cart?.length > 0 ? (
          cart.map(item => {
            return (
              <div className={styles.carrinhoDisplay}>
                <img src={item.image} alt="Imagem Exemplo" />
                <h3>{item.title}</h3>
                <h3>{item.price.toFixed(2)}</h3>

                <button
                  className={styles.buttonStyle}
                  onClick={() => removeFromCart(item)}
                  alt="Remover"
                >
                  <ImCross />
                </button>
              </div>
            )
          })
        ) : (
          <p className={styles.carrinho}>O carrinho está vazio</p>
        )}
        <h2 className={styles.total}>
          Total:
          {cart
            .reduce((acc, item) => {
              return (acc += item.price)
            }, 0)
            .toFixed(2)}
        </h2>
      </div>
    </>
  )
}

export default Carrinho
