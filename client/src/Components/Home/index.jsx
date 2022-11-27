import { IconUserSearch } from '@tabler/icons';
import { Link } from 'react-router-dom';
import Button from '../../shared/Button';
import Search from '../Search';
import './Home.scss';


const Home = () => {
    return (
        <>
            <div className="parent-home recruiter">
                <h1>Select your role</h1>
                <Link to="/recruiter">
                    <Button className='button-home'>
                        are you a recruiter? <IconUserSearch width="18" height="18" />
                    </Button>
                </Link>
            </div>
            <Search />
        </>
    );
}

export { Home }