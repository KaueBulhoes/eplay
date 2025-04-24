import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import Tag from '../Tag'
import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quantity,
  Sidebar
} from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { getTotalPrice, parseToBrl } from '../../utils'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{parseToBrl(item.prices.current)}</span>
                <button onClick={() => removeItem(item.id)} type="button">
                  X
                </button>
              </div>
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} jogos no carrinho</Quantity>
        <Prices>
          Total de {parseToBrl(getTotalPrice(items))}{' '}
          <span>Em até 6x sem Juros</span>
        </Prices>
        <Button
          onClick={goToCheckout}
          title="Clique para continuar com a compra"
          type="button"
        >
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
