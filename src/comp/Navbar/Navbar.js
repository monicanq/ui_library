import { useState } from "react"
import useIsMobile from "../../hooks/useIsMobile";
import styles from './navbar.module.css'

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const isMobile = useIsMobile();
    
    const links = [
        'About',
        'Projects',
        'Contact'
    ]

    return ( 
        <nav className={ styles.mainNavbar }>
            <div className={ styles.logo }>
                <h1>My Page</h1>
            </div>

            {(!isMobile || (isMobile & open)) ?
                <div className={ styles.links }>
                    { links.map(( link, idx ) => <li key={ idx }> { link } </li>) }
                </div> 
                : null
            }

            {isMobile  && 
                <div className={ styles.burger } onClick = { open => setOpen( open =>  !open ) }>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            }
        </nav>
     );
}
 
export default Navbar;