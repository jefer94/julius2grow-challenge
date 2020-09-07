import { Navbar as Nv } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faSignOutAlt, faPlus, faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import router from 'next/router'
import styles from '../styles/Navbar.module.css'
import logout from '../hooks/logout';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Nv color="main-color" dark expand="md" className="c-navbar" style={{ height: 50, color: '#fff' }}>
        <div>
          <FontAwesomeIcon onClick={() => router.back()} icon={faArrowLeft} style={{ width: 20, height: 20, margin: '0 9px' }} />
        </div>
        <div style={{ position: 'absolute', right: '16px' }}>
          <FontAwesomeIcon onClick={logout} icon={faSignOutAlt} style={{ width: 20, height: 20, margin: '0 9px' }} />
        </div>
      </Nv>
    </div>
  );
}