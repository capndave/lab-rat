import React from 'react'
import Keyboard from 'react-simple-keyboard'
import 'simple-keyboard/build/css/index.css'
import PropTypes from 'prop-types'
import './NameEntry.css'
const ReactDOM = require('react-dom')

class NameEntry extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      input: '',
      inputName: 'input1',
      layoutName: "default"
    }
  }

  tagline = this.props.spanish ? 'Favor de entregar su nombre completo' : 'Please enter your first and last name'
  buttonText = this.props.spanish ? 'Enviar' : 'Submit'
  firstName = this.props.spanish ? 'Primer Nombre' : 'First Name'
  lastName = this.props.spanish ? 'Appellido' : 'Last Name'


  componentDidMount(){
    /**
     * Retrieved the rendered simple-keyboard instance
     */
    console.log(this.keyboard);
    document.getElementsByClassName('hg-button')[13].classList.add("submit-button")
  }

  
  onChangeAll = (input) => {
    this.setState({
      input: input
    }, () => {
      console.log("Inputs changed", input);
    });
  }

  onKeyPress = (button) => {
    // console.log(this.keyboard);
    console.log("Button pressed", button);

    /* Shift functionality */
    if(button === "{lock}" || button === "{shift}")
      this.handleShiftButton();
   
    /* Submit functionality */
    // if(button === "{enter}")


    /* Submit functionality */
  }

  handleShiftButton = () => {
    let layoutName = this.state.layoutName;
    let shiftToggle = layoutName === "default" ? "shift" : "default";

    this.setState({
      layoutName: shiftToggle
    });
  }

  setActiveInput = (event) => {
    console.log("onfocus");
    let inputId = event.target.id;

    this.setState({
      inputName: inputId
    });
  }
  
  render(){
    return (
      <div className={"demoPage"}>
 <h2 className="NameEntry-Tagline">{ this.tagline }</h2>
          <form className="NameEntry-flex-form" autoComplete="off" >
            <input id="input1" className="NameEntry-input" type="text" ref="firstName" name="firstName" placeholder={this.firstName} value={this.props.firstName} autoFocus onFocus={this.setActiveInput} value={this.state.input['input1'] || ""} />
            <input id="input2" className="NameEntry-input" type="text" ref="lastName"  name="lastName"
    placeholder={this.lastName}  value={this.props.lastName} onFocus={this.setActiveInput} value={this.state.input['input2'] || ""} />
          </form>
        <Keyboard 
          layout={{
            'default': [
              '{tab} q w e r t y u i o p {bksp}',
              '{lock} a s d f g h j k l {enter}',
              '{shift} z x c v b n m , {shift}',
              '{space}'
            ],
            'shift': [
              '{tab} Q W E R T Y U I O P {bksp}',
              '{lock} A S D F G H J K L {enter}',
              '{shift} Z X C V B N M < {shift}',
              '{space}'
            ]
          }}
          display={{
            '{bksp}': '<<',
            '{enter}': 'Submit',
            '{shift}': 'Shift',
            '{s}': 'Shift',
            '{tab}': 'Clear',
            '{lock}': 'Caps',
            '{accept}': 'Submit',
            '{space}': 'Space',
            '{//}': ' '
          }}
          theme="hg-layout-custom"
          ref={r => this.keyboard = r}
          inputName={this.state.inputName}
          onChangeAll={inputs => this.onChangeAll(inputs)}
          onKeyPress={button => this.onKeyPress(button)}
          layoutName={this.state.layoutName}
        />
      </div>
    );
  }
}

export default NameEntry
