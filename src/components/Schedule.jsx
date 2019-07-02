import React from 'react'
import PropTypes from 'prop-types'

function Schedule(props){
  return (
    <div>
      <style jsx>{`
                div {
                  background-color: #BC8F8F;
                  padding: 45px;
                  padding-top: 10px;
                  padding-right: 4px;
                  padding-botton: 5px;
                  width: 200px;
                }

                h3 {
                  font-weight: bold;
                }

              `}</style>

      <h2>{props.day}</h2>
      <h4>{props.location}</h4>
      <h4>{props.hours}</h4>
      <h4>{props.booth}</h4>


    </div>
  )
}

Schedule.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired,
}

export default Schedule
