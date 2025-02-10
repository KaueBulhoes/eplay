import Product from '../Product'
import { Container, List, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ background, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <Title>{title}</Title>
      <List>
        <Product
          title="Nome do Jogo"
          category="Ação"
          system="Windows"
          description="teste"
          infos={['-10%', 'R$ 150,00']}
          image="//placehold.co/222x250"
        />
        <Product
          title="Nome do Jogo"
          category="Ação"
          system="Windows"
          description="teste"
          infos={['-10%', 'R$ 150,00']}
          image="//placehold.co/222x250"
        />
        <Product
          title="Nome do Jogo"
          category="Ação"
          system="Windows"
          description="teste"
          infos={['-10%', 'R$ 150,00']}
          image="//placehold.co/222x250"
        />
        <Product
          title="Nome do Jogo"
          category="Ação"
          system="Windows"
          description="teste"
          infos={['-10%', 'R$ 150,00']}
          image="//placehold.co/222x250"
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
