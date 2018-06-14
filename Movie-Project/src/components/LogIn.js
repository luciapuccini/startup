import React, { Component } from 'react'
import '../utils/css/style.css'

export default class LogIn extends Component {

  constructor(props){
    super(props);
    this.state ={
      user: '',
      password:''
    }
    this.onClick = this.onClick.bind(this);
    this.onUserChange = this.onUserChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onUserChange(event) {
    this.setState({
      user: event.target.value
    });
    //event.preventDefault();
  }

  onPasswordChange(event) {
    this.setState({
      password:event.target.value
    });
    event.preventDefault();
  }

   onClick (event) {
    event.preventDefault();
    let currentDiv = document.getElementById('welcome');
    if(this.state.user !== '' && this.state.password !== '') {
      currentDiv.innerHTML ='<h2> Welcome: '+this.state.user +'</h2>'
    }
    else {
      window.alert('Please fill all fields')
    }
   }

  render() {

    return (
      <div>
            <br/>
            <br/>
            <div className="form-singin ">
                  <form>
                        <div className="col-xs-4 ">
                              <label className="sr-only">Username</label>
                              <input type="text" id="inputUser" name="inputUser" className="form-control" placeholder="Username" onChange={this.onUserChange} value={this.state.user} required />
                              <label className="sr-only">password</label>
                              <input type="password" id="inputPassword" name="inputPassword" className="form-control" placeholder="Password" onChange={this.onPasswordChange} value={this.state.password} required/>
                              <div className="checkbox mb-3">
                                    <label>
                                          <input type="checkbox" value="remember-me" /> Remember me
                                    </label>
                              </div>
                              <button className="btn btn-lg btn-primary" type="submit" value="submit" onClick={this.onClick}>Sing In</button>
                        </div>
                  </form>
            </div>
            <div id="welcome" className="right-div">
            </div>
      </div>
    )
  }
}
