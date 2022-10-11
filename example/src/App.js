import React from 'react'

import {  Button } from 'buttoncomponentfs'
import 'buttoncomponentfs/dist/index.css'

const App = () => {
  return ( 
  <>
    <div style={{height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <Button text="Click me" type="primary" />
      <Button text="Click me" />
      <Button text="Click me" type="dashed" />
      <Button text="Click me" type="text" />
      <Button text="Click me" type="link" />
      <Button text="Click me" type="danger" />
    </div>
  </>
  )
}

export default App
