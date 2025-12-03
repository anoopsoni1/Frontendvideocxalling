import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './Pages/App'
import Page2 from './Pages/Page2'
import SocketProvider from "./Provider/Socket.jsx"
import PeerProvider from './Provider/Peer.jsx'
import Home from './Components/Home.jsx'


const router = createBrowserRouter([
  {
    path: "/8969gregerger+5598ew484ew89w4g89489+7w9874w49w4fwf7w979g/room" ,
    element: <App /> ,
  } , {
    path : "/654654654984654654fgdrgeragerighiuhguarigaapgiurahguire8576767676" ,
    element :  <Page2 />
  }  ,
  {
    path : "/" , 
    element : <Home />
  } ,
])


createRoot(document.getElementById('root')).render(
    <SocketProvider>
      <PeerProvider>
    <RouterProvider router={router} />
    </PeerProvider>
    </SocketProvider>
)

  