import React from 'react'

const researcherFields = props => {

  const handleDropDown = e => {
    console.log('handling dropdown')
    var options = e.target.options
    var value = []
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value)
      }
    }

    props.handleInput(e)
  }

  return (
    <div>
      <label>Company</label>
      <div className="errMssg color-orange">{props.errMssgCompany}</div>
      <input
        value={props.company}
        name="company"
        onChange={props.handleInput}
      />
      <label>
        Organization Type
        <select
          value={props.orgType}
          name="orgType"
          onChange={handleDropDown}>
          <option value="academic">Academic</option>
          <option value="corporate">Corporate</option>
          <option value="individual">Individual</option>
          <option value="nonprofit">Individual</option>
          <option value="startup">Startup</option>
        </select>
      </label>
      <label>
        Industry
        <select
          multiple={true}
          name="industries"
          value={props.industries}
          onChange={handleDropDown}>
          <option value="behavioral">Behavioural</option>
          <option value="consumer">Consumer</option>
          <option value="demographics">Demographics</option>
          <option value="medical">Medical</option>
          <option value="political">Political</option>
          <option value="pharmaceutical">Pharmaceutical</option>
        </select>
      </label>
    </div>
  )
}

export default researcherFields
