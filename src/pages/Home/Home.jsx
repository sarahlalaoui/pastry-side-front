import './Home.css';
import pic from '../../assets/pic.png'
const Home = () => {
    return (
        <div>
             <div className="pic" style={{ backgroundImage: `url(${pic})` }}></div>
        </div>
    );
};

export default Home;