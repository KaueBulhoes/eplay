import Button from '../../components/Button'
import Card from '../../components/Card'
import { InputGroup, Row } from './styles'

const Checkout = () => (
  <div className="container">
    <Card title="Dados de cobrança">
      <>
        <Row>
          <InputGroup>
            <label htmlFor="full name">Nome Completo</label>
            <input type="text" id="fullname" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="cpf">CPF</label>
            <input type="text" id="cpf" />
          </InputGroup>
        </Row>
        <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
        <Row>
          <InputGroup>
            <label htmlFor="deliveryEmail">E-mail</label>
            <input type="email" id="deliveryEmail" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
            <input type="email" id="confirmDeliveryEmail" />
          </InputGroup>
        </Row>
      </>
    </Card>
    <Card title="Pagamento">
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          dolorem, sit, repellendus neque rerum magnam at enim vitae nisi
          officiis quibusdam voluptatem doloremque provident illo facilis quasi
          facere iste culpa.
        </p>
      </div>
    </Card>
    <Button type="button" title="Clique aqui para finalizar a compra">
      Finalizar a compra
    </Button>
  </div>
)

export default Checkout
