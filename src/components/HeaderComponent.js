import React, { Component } from 'react'
import { Navbar, NavbarBrand, Jumbotron, Form, Button, Modal, ModalHeader, ModalBody, Nav, NavbarToggler, Collapse, NavItem, FormGroup, Input, Label } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
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
    this.props.changeLoginStatus(true)
    document.getElementById('registerButton').style.display = 'none'
    document.getElementById('loginButton').style.display = 'none'
    document.getElementById('logoutButton').style.display = 'block'
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
        document.getElementById('registerButton').style.display = 'none'
        document.getElementById('loginButton').style.display = 'none'
        document.getElementById('logoutButton').style.display = 'block'
        console.log('loggedin')
      }
      else {
        console.log("wrong")
      }

    })
  }

  handleLogout(){
    this.props.changeLoginStatus(false)
        document.getElementById('registerButton').style.display = 'block'
        document.getElementById('loginButton').style.display = 'block'
        document.getElementById('logoutButton').style.display = 'none'
  }


  render() {
    return (
      <>
        <Navbar dark expand='md' color='warning'>
          <div className='container'>
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className='mr-auto' href='/'>Talk Out
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
                <NavItem id='loginButton'>
                  <Button outline onClick={this.toggleModal}>
                    <span className='fa fa-sign-in fa-lg'> Login</span>
                  </Button>
                </NavItem>

                <NavItem id='registerButton'>
                  <Button color='primary' className='ml-3' href='/register'>
                    <span className='fa fa-user fa-lg'> Register</span>
                  </Button>
                </NavItem>

                <NavItem id='logoutButton' style={{ display: 'none' }}>
                  <Button outline onClick={this.handleLogout} >
                    <span className='fa fa-sign-in fa-lg'> Logout</span>
                  </Button>
                </NavItem>
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


            <NavLink to='/register'>
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