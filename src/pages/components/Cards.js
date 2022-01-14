import Buy from './Buy'
import styles from '../layouts/Cards.module.css'
import { Products } from '../Products'

function Cards({ setCart, search }) {
  return (
    <>
      {Products.products
        .filter(value => {
          if (search === '') {
            return value
          } else if (value.title.toLowerCase().includes(search.toLowerCase())) {
            return value
          }
        })
        .map(item => {
          return (
            <div className={styles.box}>
              <img src={item.image} alt="Imagem Exemplo" />
              <h3>{item.title}</h3>
              <h3 className={styles.priceStyle}>{item.price.toFixed(2)}</h3>
              <Buy
                AddCart={() => {
                  // const exist = cart.find(x => x.id === item.id)

                  setCart(state => {
                    localStorage.setItem(
                      'cart',
                      JSON.stringify([...state, item])
                    )
                    return [...state, item]
                  })
                }}
              />
            </div>
          )
        })}
    </>
  )
}

export default Cards
