import { Link } from 'react-router-dom'
// Components 
import Header from '../components/Header'



const Home = () => {
    return (
        <>

        <Header />

        <div className="optionBox">
            <Link to="/wineries">
            <h2>Our Wineries</h2>
                <img src="https://i.imgur.com/Ef7QHv3.png" alt="Tilfældig Vin Mark" />
            </Link>
        </div>
        
        <div className="optionBox">
            <Link to="/about">
            <h2>About us</h2>
                <img src="https://i.imgur.com/CehHkqA.png" alt="Tilfældig Vin Mark" />
            </Link>
        </div>

        <div className="optionBox">
            <Link to="/contact">
            <h2>Book a taste</h2>
                <img src="https://i.imgur.com/XvaW9F6.png" alt="Tilfældig Vin Mark" />
            </Link>
        </div>

        </>
    )
}

export default Home
