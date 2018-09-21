import React from 'react'
import './RadioGroup.css'

export default function RadioGroup(props) {
  const optionComponents = props.values.map((val, i) => {
    return (
      <li key={i}>
        <label>
          <input
            type="radio"
            value={val}
            name={val}
            checked={props.checkedProp === val}
            onChange={props.handleInput}
          />
          { /* Title Case of Val */
            val.slice(0, 1).toUpperCase() + val.slice(1, val.length)
          }
        </label>
      </li>
    )
  })
  
  return (
    <ul className="RadioGroup">
      { optionComponents } 
    </ul>
  )
}
