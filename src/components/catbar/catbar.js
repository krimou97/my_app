import './catbar.css'
import {IoHomeSharp} from 'react-icons/all';

const Catbar = () => {
    return (
        <div className={'catbar-container'}>
        <div className={'catbar-main'}>
            <div className={'home-icon'}>
              <IoHomeSharp/>
            </div>
            <span>Beauty</span>
            <span>Well-being</span>
            <span>Baby</span>
            <span>Hygiene</span>
            <span>Health</span>
            <span>Plants</span>
            <span>Medicines</span>
            <span>Homeopathy</span>
            <span>Animals</span>
            <span>Orthopedics</span>
            <span>Natural medicine</span>
        </div>
        </div>
    )
}

export default Catbar