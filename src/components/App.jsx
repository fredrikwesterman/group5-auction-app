import '../styles/App.css'
import Home from './Home'
import Nav from './Nav'
import CreateAuction from './CreateAuction'
import SingleAuction from './SingleAuction'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Nav />
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/create-auction" element={<CreateAuction/>}></Route>
            <Route path="/single-auction" element={<SingleAuction/>}></Route>
        </Routes>
    </>
  )
}

export default App
