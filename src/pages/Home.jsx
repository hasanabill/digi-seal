import { Link } from 'react-router-dom';
import hero from '../assets/hero.jpg'

const Home = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${hero})` }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to DigiSeal</h1>
                    <p className="mb-5">DigiSeal is your secure encryption tool. Generate keys, encrypt messages, and decrypt messages with ease.</p>
                    <div className="flex justify-center space-x-4">
                        <Link to="/generatekey" className="btn btn-outline btn-info">
                            Generate Key
                        </Link>
                        <Link to="/encrypt" className="btn btn-accent">
                            Encrypt
                        </Link>
                        <Link to="/decrypt" className="btn  btn-outline btn-success">
                            Decrypt
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
