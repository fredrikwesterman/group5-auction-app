import '../styles/App.css'
import Home from './Home'
import CreateAuction from './CreateAuction'
import SingleAuction from './SingleAuction'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'

function App() {

  return (
    <div className="container">
        <Header />
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/create-auction" element={<CreateAuction/>}></Route>
            <Route path="/single-auction/:id" element={<SingleAuction/>}></Route>
        </Routes>
    </div>
  )
}

export default App
