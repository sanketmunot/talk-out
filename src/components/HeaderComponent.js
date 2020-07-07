import React, { Component } from 'react'
import { Navbar, NavbarBrand, Jumbotron, Form, Button, Modal, ModalHeader, ModalBody, Nav, NavbarToggler, Collapse, NavItem, FormGroup, Input, Label } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const LoginComponent = function (props) {
  if(!props.isLoggedIn){
  return (
    <>
    <NavItem id='loginButton'>
      <Button outline onClick={props.toggleModal} >
        <span className='fa fa-sign-in fa-lg'> Login</span>
      </Button>
    </NavItem>
    <NavItem id='registerButton'>
      <Button color='primary' className='ml-3' href='/register'>
        <span className='fa fa-user fa-lg'> Register</span>
      </Button>
    </NavItem>
    </>
    )}
    if(props.isLoggedIn){
      return(<>
        <NavItem id='logoutButton'>
        <Button outline onClick={props.handleLogout} >
          <span className='fa fa-sign-in fa-lg'> Logout</span>
        </Button>
      </NavItem>
      </>
      )
    }
}
class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    }

    this.toggleNav = this.toggleNav.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)

  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    })
  }

  toggleModal() {
    // this.props.changeLoginStatus(true)
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  handleLogin() {
    this.toggleModal()
    var data = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    }

    axios.post('http://localhost:9000/login', data).then((res) => {
      if (res.data.auth) {
        this.props.changeLoginStatus(true)
        
        console.log('loggedin')
      }
      else {
        alert('Wrong Credentials! Please Try Again')
        this.toggleModal()
        document.getElementById('username').value=''
        document.getElementById('password').value=''
      }

    })
  }

  handleLogout() {
    this.props.changeLoginStatus(false)
  }


  render() {
    return (
      <>

        <Navbar dark expand='md' color='warning'>
          <div className='container'>
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className='mr-auto'>Talk Out
            </NavbarBrand>

            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className='nav-link' to='/home'>
                    <span className='fa fa-home fa-lg'></span> Home
                </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className='nav-link' to='/aboutus'>
                    <span className='fa fa-info fa-lg'></span> About Us
                </NavLink>
                </NavItem>

              </Nav>


              <Nav className='ml-auto' navbar>
                <LoginComponent toggleModal={this.toggleModal}
                handleLogout={this.handleLogout} isLoggedIn={this.props.isLoggedIn} />



               
              </Nav>

            </Collapse>
          </div>
        </Navbar>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader>Login</ModalHeader>
          <ModalBody>

            <FormGroup>
              <Label htmlFor='username'>Username</Label>
              <Input type='text' id='username' name='username'
                innerRef={(input => this.username = input)} />
            </FormGroup>

            <FormGroup>
              <Label htmlFor='password'>Password</Label>
              <Input type='password' id='password' name='username'
                innerRef={(input => this.password = input)} />
            </FormGroup>

            <Button type='submit' value='submit' color='primary' onClick={this.handleLogin}>Login</Button>


            <NavLink to='/register' onClick={this.toggleModal}>
              New on community? Register to help others
              </NavLink>


          </ModalBody>
        </Modal>
        <Jumbotron>
          <div className='container'>
            <div className='row row-header'>
              <div className='col-12 col-sm-6'>
                <h1>Talk Out</h1>
                <p>Lets talk togeather to fight depression ! </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </>
    )
  }
}

export default Header;