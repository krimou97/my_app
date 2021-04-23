import './search.css'
import {GoSearch, IoIosCart, FiChevronDown} from 'react-icons/all';

const Search = () => {
    return(
        <div className={'container'}>
            <div className={'search-first-item'} >
                <img src='https://www.medicament.com/img/medicamentcom-vente-en-ligne-de-médicaments-logo-1502891216.jpg'/>
            </div>
            <div className={'search-second-item'}>
                <input type='text' placeholder='Search' />
                <div className={'search-icon'}><GoSearch/></div>
            </div>
            <div className={'search-third-item'}>
                <div className={'cart-icon'}><IoIosCart/></div>
                <div className={'text'}>
                  <h3>Cart</h3>
                  <p>(empty)</p>
                </div>
                <div className={'arrow'}><FiChevronDown/></div>
            </div>
        </div>
    )
}

export default Search