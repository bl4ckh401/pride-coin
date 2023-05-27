import React from 'react';
import '../App.css';
import { HeaderData } from '../utils/HeaderData';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Image from 'next/image';
import Link from 'next/link';


function Header() {

    return (
        <div className='main_nav bg-purple-600 w-screen'>
            <div className='PRIDELogo bg-purple-600'>
                <Image src='/LGBTQ.png' className='img_logo hidden md:flex' alt='mocha logo' width={200} height={200} />
            </div>
            <hr style={{
                width: "100%",
                height: 1,
                backgroundColor: "black"
            }} className="horizontal bg-purple-600" />
            <div className='logo_nav bg-purple-600'>
                <div className='logo_nav bg-purple-600'>
                    <ul className= "nav-options">
                        {HeaderData.map((item) => {
                            return (
                                    <li className={item.title.toUpperCase() == "CONTACTS" ? "contact_btn option mobile-option" : "option mobile-option"}>{item.title}</li>
                            )
                        })}
                    </ul>
                </div>

            </div>
        
        </div>
    );
}

export default Header;
