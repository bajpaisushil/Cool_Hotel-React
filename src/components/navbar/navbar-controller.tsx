import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function useNavbarController(){
    const [isOpen, setIsOpen] = useState(false);
    const location=useLocation();

    const toggleMenu = () => {
      setIsOpen((prev)=> !prev);
    };
    const isRouteActive = (path: any) => {
      return location.pathname === path;
    }
    const color=location.pathname==='/'? "#1d1b1a": "#f4f2f1";
    useEffect(()=>{
      AOS.init({duration: 1000});
    })

    return {isRouteActive, isOpen, toggleMenu, color};
}

export default useNavbarController;
