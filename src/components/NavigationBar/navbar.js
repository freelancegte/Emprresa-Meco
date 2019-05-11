import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="header">
        <Navbar color="light" className="height-header bg-white" light expand="md">
          <NavbarBrand href="/"><img src={logo} alt="Logo" className="img-logo"></img></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="nav-links">
                <Link to="/orden" className="nav-link-color flex-display" >
                  <i class="material-icons">
                    build
                  </i>Crear Orden</Link>
              </NavItem>
              <NavItem className="nav-links">

                <Link to="/facturas" className="nav-link-color flex-display">
                  <i class="material-icons">
                    description
                  </i>Facturas</Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="nav-link-color flex-display">
                  <i class="material-icons">
                    perm_identity
                  </i>
                  Administracion
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="nav-link-color flex-display">
                    <i class="material-icons">
                      account_box
                    </i>
                    Perfil
                  </DropdownItem>
                  <DropdownItem className="nav-link-color flex-display">
                    <i class="material-icons">
                      edit
                      </i>
                    Crear Rubros
                  </DropdownItem>
                  <DropdownItem className="nav-link-color flex-display">
                    <i class="material-icons">
                      add_circle_outline
                    </i>
                    Crear Articulo
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Salir
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}