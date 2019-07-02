import React from 'react'
import PropTypes from 'prop-types'

function Product(props){
  return (
    <div>
      <style jsx>{`
              div {
                background-color: LightGray;
                padding: 45px;
                padding-top: 10px;
                padding-right: 4px;
                padding-left: 500px;
                width: 300px;
                float: right;
              


              }
      `}</style>

      <h2>{props.month}</h2>
      <ul>{props.selection.map((selection)=>
        <li>{selection}</li>)}</ul>
    </div>
  )
}

Product.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired,
}

export default Product
