import './App.css'
import Navbar from './components/navbar'
import Movies from './components/Movies'
import Watchlist from './components/Watchlist'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Banner from './components/Banner'

export default function App() {
  return (
    <>
    <BrowserRouter basename="/MovieWebsite/">
     <Navbar/>
     <Routes>
      <Route path='/' element={<><Banner/> <Movies/></>}/>
      <Route path='/watchlist' element={ <Watchlist/>}/>
      
    
     </Routes>
    </BrowserRouter>
    
    </>
  )
}
