import React from 'react'
import Header from './Header'
import ScheduleList from './ScheduleList'
import ProductList from './ProductList'

function App(){
  return (
    <div>
      <style global jsx>{`
              div {
                display: grid;
              
              }
            `}</style>
      <Header/>
      <ScheduleList/>
      <ProductList/>

    </div>
  )
}

export default App
