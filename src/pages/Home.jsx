import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Welcome to DigiSeal</h1>
            <p className="text-lg text-center mb-6">
                DigiSeal is your secure encryption tool. Generate keys, encrypt messages, and decrypt messages with ease.
            </p>
            <div className="flex justify-center space-x-4">
                <Link to="/generatekey" className="btn btn-primary">
                    Generate Key
                </Link>
                <Link to="/encrypt" className="btn btn-secondary">
                    Encrypt
                </Link>
                <Link to="/decrypt" className="btn btn-accent">
                    Decrypt
                </Link>
            </div>
        </div>
    );
};

export default Home;
