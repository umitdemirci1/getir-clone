import { FiGlobe } from 'react-icons/fi'
import { FaUser, FaUserPlus } from 'react-icons/fa'
import navbarItems from '../..nav-items.json';

const Navbar = () => {
    return (
        <div className="bg-brand-color">
            <div className="mx-auto flex h-11 items-center justify-between">
                {
                    navbarItems.map((navItem) => (
                        <p>{navItem.name} </p>
                    ))
                }
                <a href="#">
                    <img className='w-8'
                        src="" />
                </a>


                <nav className="flex gap-x-8 align-middle">
                    <a href="#" className="text-header-color font-semibold hover:text-white flex items-center gap-x-2 transition-colors">
                        <FiGlobe />
                        Türkçe (TR)</a>
                    <a href="#" className="text-header-color font-semibold hover:text-white flex items-center gap-x-2 transition-colors">
                        <FaUser></FaUser>
                        Giriş Yap</a>
                    <a href="#" className="text-header-color font-semibold hover:text-white flex items-center gap-x-2 transition-colors mr-32">
                        <FaUserPlus size={20}></FaUserPlus>
                        Kayıt Ol</a>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;