import React, { Component } from 'react'

export default class LogIn extends Component {
  constructor(props){
    super(props);
    
    this.onClick = this.onClick.bind(this);
  }
   onClick (){
    alert('Under Construction')
   }
  render() {
    return (
      <div >
        <br/><br/>
        
        <div className="form-singin ">
        <form >
            <div className="col-4 ">
                <label for="inputUsu" className="sr-only">Email</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus=""/>
                <label for="inputPassword" className="sr-only">password</label>
                <input type="password" id="inputPassword" name="inputPassword" className="form-control" placeholder="Password" required/>

                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me"/> Remember me
                  </label>
                </div>
                            
                  <button className="btn btn-lg btn-primary" type="submit" value="submit" onClick={this.onClick}>Sing In</button>
                            
            </div>
            
    </form>
    </div>
      </div>
    )
  }
}
