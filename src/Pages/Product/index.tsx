import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import residentEvil from '../../assets/images/resident.png'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          magnam, unde eius odio molestias voluptates id cumque ut quos delectus
          ullam amet obcaecati aliquam voluptas impedit nam ipsam quas odit.
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          magnam, unde eius odio molestias voluptates id cumque ut quos delectus
          ullam amet obcaecati aliquam voluptas impedit nam ipsam quas odit.
        </p>
      </Section>
      <Section title="Galeria" background="black">
        <Gallery name="jogo teste" defaultCover={residentEvil} />
      </Section>
    </>
  )
}

export default Product
