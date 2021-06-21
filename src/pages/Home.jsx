import { Link } from 'react-router-dom'
// Components 
import Header from '../components/Header'



const Home = () => {
    return (
        <>


        <Header />
        

        <div className="optionBox">
            <h2>Our Wineries</h2>
            <Link to="/wineries">
                <img src="https://i.imgur.com/Ef7QHv3.png" alt="Tilfældig Vin Mark" />
            </Link>
        </div>
        
        <div className="optionBox">
            <h2>TOM</h2>
            <img src="https://i.imgur.com/CehHkqA.png" alt="Tilfældig Vin Mark" />
        </div>

        <div className="optionBox">
            <h2>Book a taste</h2>
            <img src="https://i.imgur.com/XvaW9F6.png" alt="Tilfældig Vin Mark" />
        </div>



        
        </>
    )
}

export default Home
