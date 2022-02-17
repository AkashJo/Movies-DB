import React from 'react'
import { BrowserRouter , Switch, Route } from 'react-router-dom'

import Home from './Home'
import Movie from './SingleMovie'

function App() {
  return <div>
  <BrowserRouter> 
  <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/movies/:id" children={<Movie/>} /> {/*By default movie is called it url doesnt abcdh */}
  </Switch>
  </BrowserRouter>
  </div>
}

export default App
