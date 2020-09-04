import { Navbar as Nv } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faSignOutAlt, faPlus, faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Nv color="main-color" dark expand="md" className="c-navbar" style={{ height: 50, color: '#fff' }}>
        {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
        {/* <NavbarToggler onClick={toggle} /> */}
        <div>
          <FontAwesomeIcon icon={faArrowLeft} style={{ width: 20, height: 20, margin: '0 9px' }} />
          <input placeholder="search" className="c-searchbar" />
        </div>
        <div style={{ position: 'absolute', right: '16px' }}>
          <FontAwesomeIcon icon={faPlus} style={{ width: 20, height: 20, margin: '0 9px' }} />
          <FontAwesomeIcon icon={faSearchPlus} style={{ width: 20, height: 20, margin: '0 9px' }} />
          <FontAwesomeIcon icon={faSignOutAlt} style={{ width: 20, height: 20, margin: '0 9px' }} />
        </div>
      </Nv>
    </div>
  );
}