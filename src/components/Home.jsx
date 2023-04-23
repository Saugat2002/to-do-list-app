import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <div style={{ fontFamily: 'Permanent Marker' }} className="flex flex-col space-y-5 justify-center items-center w-screen h-screen bg-gray-700 text-neutral-100">
                <h1 className="" >Welcome to the To-Do-List App</h1>
                <Button variant='outline-light' size="lg" onClick={() => navigate('/main')}>Get Started</Button>
            </div>
        </>
    )
}

export default Home;