import { Link, useNavigate } from 'react-router-dom';

const MobileHeaderLink = ({ item, setNavbarOpen }) => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(item.href);
        setNavbarOpen(false);
    }

    return (
        <div className="relative w-full">
            <div className="bg-white p-2 w-full">
                <Link onClick={handleNavigate} to={item.href} className="block py-2 text-gray-500 hover:bg-gray-200">
                    {item.label}
                </Link>
            </div>
        </div>
    );
};

export default MobileHeaderLink;
