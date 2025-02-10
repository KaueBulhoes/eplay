import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header'
import Banner from './components/Banner'
import { GlobalCss } from './styles'

const Rotas = createBrowserRouter([
  {
    path: '/',
    element: <Banner />
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
