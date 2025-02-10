import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header'
import Banner from './components/Banner'
import { GlobalCss } from './styles'
import ProductsList from './components/PorductsList'

const Rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProductsList title="Promoções" background="gray" />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={Rotas} />
    </>
  )
}

export default App
