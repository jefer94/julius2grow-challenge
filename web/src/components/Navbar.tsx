import {
  Collapse,
  Navbar as Nv,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(props) {
  return (
    <div>
      <Nv color="main-color" dark expand="md" className="c-navbar" style={{ height: 50, color: '#fff' }}>
        {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
        {/* <NavbarToggler onClick={toggle} /> */}
        <FontAwesomeIcon icon={faArrowLeft} />
      </Nv>
    </div>
  );
}