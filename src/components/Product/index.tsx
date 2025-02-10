import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.co/222x250" alt="" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio,
      eveniet ad? Nihil architecto odit ad sequi voluptas expedita adipisci.
      Eaque mollitia explicabo dolor cum voluptas dolorem quis voluptate ipsum
      in?
    </Descricao>
  </Card>
)

export default Product
