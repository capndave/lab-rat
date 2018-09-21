import React from 'react'

const InputFields = props => {
  return (
    <div>
      <div>
        <label>Email</label>
        <div className="errMssg color-orange">{props.errMssg.email}</div>
        <input
          value={props.email}
          name="email"
          onChange={props.handleInput}
        />
      </div>
      <div>
        <label>Password</label>
        <div className="errMssg color-orange">{props.errMssg.pwd}</div>
        <input value={props.pwd} name="pwd" onChange={props.handleInput} />
      </div>
      <div>
        <label>First Name</label>
        <div className="errMssg color-orange">{props.errMssg.fName}</div>
        <input
          value={props.fName}
          name="fName"
          onChange={props.handleInput}
        />
      </div>
      <div>
        <label>Last Name</label>
        <div className="errMssg color-orange">{props.errMssg.lName}</div>
        <input
          value={props.lName}
          name="lName"
          onChange={props.handleInput}
        />
      </div>
    </div>
  )
}

export default InputFields
