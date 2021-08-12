import { useState } from 'react'
import styles from './dropdown.module.css'

const Dropdown = ({ dropdowns }) => {
    const [visible, setVisible] = useState([])

    const handleClick = (id) => {
        const update = [ ...visible ]
        const foundAt = update.indexOf(id)
        if ( foundAt >= 0) {
            update.splice(foundAt, 1)
        } else {
            update.push(id)
        }
        setVisible(update)
    }

    return ( 
        <div >
            <h2>Dropdown</h2>
            { dropdowns.map( item =>
                    <div className={ styles.dropdown } key= {item.id} id={item.id}>
                        <div className={ styles.trigger } onClick={ (e) => handleClick (item.id, e) }>{ item.title }</div>
                        <div className={ !visible.includes(item.id) ? styles.content : `${ styles.content } ${ styles.active }` }>
                            { item.content }
                        </div>
                    </div>                
            )}
        </div>
     );
}
 
export default Dropdown;