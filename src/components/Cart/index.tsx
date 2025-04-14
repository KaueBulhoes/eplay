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

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src="" alt="" />
          <div>
            <h3>Nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
            <button type="button">X</button>
          </div>
        </CartItem>
      </ul>
      <Quantity>2 jogos no carrinho</Quantity>
      <Prices>
        Total de R$ 250,00 <span>Em até 6x sem Juros</span>
      </Prices>
      <Button title="Clique para continuar com a compra" type="button">
        Continuar com a compra
      </Button>
    </Sidebar>
  </CartContainer>
)

export default Cart
