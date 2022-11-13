import {Component} from 'react'

import HomePage from '../HomePage'

import './index.css'

class Login extends Component {
  state = {
    mobileNumber: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    isShownHome : false
  }

  onChangeUsername = event => {
    this.setState({mobileNumber: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
   
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = event => {
    event.preventDefault()
    const {mobileNumber, password} = this.state
    const conditionOne = mobileNumber.length === 10 
    const conditionTwo = password.length >= 8
    console.log(conditionOne,conditionTwo)
    if (conditionOne && conditionTwo ) {
        this.setState({isShownHome : true})
        this.setState({showSubmitError : false})
        this.setState({password : ""})
    } else if  ((conditionOne === true) && (conditionTwo === false)) {
        this.setState({showSubmitError : true})
        this.setState({errorMsg : "Invalid Password"})
    } else if ((conditionOne === false) && (conditionTwo === true)) {
        this.setState({showSubmitError : true})
        this.setState({errorMsg : "Invalid Mobile Number"})
    } else {
      this.setState({showSubmitError : true})
      this.setState({errorMsg : "Invalid Mobile Number and Password"})
    }
    
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="login-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="input-1-l"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="login-label" htmlFor="username">
          MOBILE NUMBER
        </label>
        <input
          type="number"
          id="username"
          placeholder="Username"
          className="input-1-l"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  isShownHomeMethod = val => {
    this.setState({isShownHome : val})
  }

  render() {
    const {showSubmitError, errorMsg,isShownHome} = this.state
    if (isShownHome) {
        return <HomePage isShownHomeMethod={this.isShownHomeMethod} />
    }
    return (
      <form className="login-container" onSubmit={this.submitForm}>
        <div className="login-card">
          <h1 className='login-head'>Login Form</h1>
          {this.renderUsernameField()}
          {this.renderPasswordField()}
          <button type="submit" className="login-butt">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </div>
      </form>
    )
  }
}

export default Login