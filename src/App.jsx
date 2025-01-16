import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'
import Footer from './components/Footer/Footer'
import Layout from './Layout'
import Notfound from './components/Notfound/Notfound'

let routes = createBrowserRouter([
  {path: '', element: <Layout/>,
    children: [
      {index: true, element: <Home/>},
      {path: 'about', element: <About/>},
      {path: 'contact', element: <Contact/>},
      {path: 'portfolio', element: <Portfolio/>},
      {path: '*', element: <Notfound/>}
    ]
  },
])

function App() {

  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default App
