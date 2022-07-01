import React from 'react';
import toast from "react-hot-toast"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faFan, faGear, faHome, faRightFromBracket, faRocket, faSortUp, faUserEdit, } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { HashLink } from 'react-router-hash-link';
import { auth } from '../firebase.init';
const DropdownLinks = ({ user }) => {
    //navigate func
    const navigate = useNavigate()

    const liStyle = "flex gap-4 items-center hover:bg-base-200 border-b border-base-200 pl-4 py-3"
    return (
        <>
            <li className={`${liStyle} justify-center border-b-2 border-primary hover:bg-base-100`}>
                <div className='flex flex-col justify-center items-center gap-4'>
                    {/* avatar : placeholder */}
                    {user?.photoURL ?
                        <div class="avatar">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} alt='' />
                            </div>
                        </div>
                        :
                        <div class="avatar placeholder">
                            <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
                                <span class="text-3xl uppercase">{user?.email?.slice(0, 1)}</span>
                            </div>
                        </div>}


                    <p className='text-lg text-black'>{user?.displayName}</p>
                    <p className='text-xs -mt-6 '>{user?.email}</p>
                </div>
            </li>
            <div className='lg:hidden'>
                {/* Home */}
                <li className={liStyle}> <FontAwesomeIcon
                    className='hover:bg-transparent'
                    icon={faHome} />
                    <HashLink
                        className='hover:bg-transparent'
                        to="/#home" smooth>Home</HashLink></li>
                {/* Rockets */}
                <li className={liStyle}> <FontAwesomeIcon
                    className='hover:bg-transparent'
                    icon={faRocket} />
                    <HashLink
                        className='hover:bg-transparent'
                        to="/#new_arrivals" smooth>Explore</HashLink></li>
                {/* orders */}
                <li className={liStyle}> <FontAwesomeIcon
                    className='hover:bg-transparent'
                    icon={faFan} />
                    <HashLink
                        className='hover:bg-transparent'
                        to="/#processors" smooth>Processors</HashLink></li>
            </div>
            {/* dashboard */}
            <li className={liStyle}> <FontAwesomeIcon
                className='hover:bg-transparent'
                icon={faGear} />
                <Link
                    className='hover:bg-transparent'
                    to="/dashboard">Dashboard</Link></li>

            {/* logout */}
            <li className={`${liStyle} border-b-0`}> <FontAwesomeIcon
                className='hover:bg-transparent'
                icon={faRightFromBracket} />
                <button onClick={() => {
                    signOut(auth)
                    navigate("/")
                    toast.success("Successfully logged out!")
                }}
                    className='hover:bg-transparent'
                >Logout</button></li>
            <FontAwesomeIcon className='absolute text-white text-lg -top-[6px] right-6' icon={faSortUp} />
        </>
    );
};

export default DropdownLinks;