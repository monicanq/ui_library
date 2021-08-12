import { useState } from "react"
import useIsMobile from "../../hooks/useIsMobile"
import styles from './navbar.module.css'
import { BrowserRouter as Router,
        NavLink,
        Link } from 'react-router-dom'
 
const Navbar = () => {

    const [open, setOpen] = useState(false);
    const isMobile = useIsMobile();
    console.log('render')
    const links = [
        {'text': 'About',
        'url': '/about'},
        {'text': 'Services',
        'url': '/services'},
        {'text': 'Projects',
        'url': '/projects'},
        {'text': 'Contact',
        'url': '/contact'}
    ]

    return ( 
        <Router>
            <nav className={ !isMobile ? styles.mainNavbar 
                : open ? `${styles.mainNavbar} ${styles.mobile} ${styles.open}`
                : `${styles.mainNavbar} ${styles.mobile}` }>
                <div className={ styles.logo } onClick = { open => setOpen( open =>  !open ) }>
                    <Link to='/'><h1>My Page</h1></Link>
                </div>

                {(!isMobile || (isMobile & open)) ?
                        <div className={ !isMobile ? styles.links : `${styles.links} ${styles.mobile}` }>
                            { links.map(link => 
                                <li key={ link.text }> 
                                    <NavLink  to={ link.url } onClick = { open => setOpen( open =>  !open ) }> 
                                        { link.text } 
                                    </NavLink> 
                                </li>) 
                            }
                        </div> 
                    : null
                }

                {isMobile  && 
                    <div className={ open ? `${styles.burger} ${styles.active}` : styles.burger  } onClick = { open => setOpen( open =>  !open ) }>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                }
            </nav>
        </Router>
     );
}
 
export default Navbar;