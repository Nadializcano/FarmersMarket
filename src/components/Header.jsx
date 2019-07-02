import React from 'react'

function Header(){
  return (

    <div>
      <style global jsx>{`
                div {
                  background-color: gray;
                  padding: 10px;
                  display: grid;
                }
                h1 {
                  text-align: center;
                }
              `}</style>
      <h1>Avery's Organics farm</h1>
    </div>
  )
}

export default Header
