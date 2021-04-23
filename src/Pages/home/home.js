import Catbar from '../../components/catbar/catbar'
import Navbar from '../../components/navbar/navbar'
import Search from '../../components/search-bar/search'
import './home.css'

const Home = () => {
    return (
        <div>
         <Navbar/>
         <Search/>
         <Catbar/>
        </div>
    )
} 

export default Home