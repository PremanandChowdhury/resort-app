import React from 'react'
import './css/App.css'

import Home from './pages/Home'
import Rooms from './pages/Rooms'
import Room from './pages/Room'
import Error from './pages/Error'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './component/Navbar'
import Footer from './component/Footer'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/rooms' component={Rooms} />
          <Route exact path='/rooms/:slug' component={Room} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
