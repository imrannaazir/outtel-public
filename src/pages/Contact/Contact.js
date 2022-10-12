import { faBuilding, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import TopBanner from '../../Shared/TopBanner';

const Contact = () => {
    return (
        <div>
            <TopBanner img='https://autoprofitfx.com/wp-content/uploads/2022/03/Contact-us-page-done-e1641380029830.jpg' pageName='Contact Us' />

            <div className='flex flex-wrap justify-center  lg:gap-20 bg-white py-16'>

                {/*  */}
                <div className="flex flex-col w-[450px] gap-4 ">
                    <p className="text-xl">Contact with us</p>
                    {/* email */}
                    <div className="bg-primary flex flex-col items-center p-4 rounded-2xl text-white shadow-lg gap-2">
                        <FontAwesomeIcon
                            className="text-4xl text-white"
                            icon={faEnvelope}
                        />

                        <p className='text-lg font-semibold'>imrannaaziremon@gmail.com</p>
                        <p className='text-gray-300'>24/7 Customer support</p>
                    </div>
                    {/* whatsapp */}
                    <div className="bg-primary flex flex-col items-center p-4 rounded-2xl text-white shadow-lg gap-2">
                        <FontAwesomeIcon
                            className="text-4xl text-white" icon={faPhone} />

                        <p className='text-lg font-semibold'>+8801405580607</p>
                        <p className='text-gray-300'>Mon-Sat: 8:00 – 21:00</p>
                    </div>
                    {/* Messenger */}
                    <div className="bg-primary  flex flex-col items-center p-4 rounded-2xl text-white shadow-lg gap-2">
                        <FontAwesomeIcon
                            className="text-4xl text-white" icon={faBuilding} />
                        <p className='text-lg font-semibold'>Jessore, Bangladesh</p>
                        <p className='text-gray-300'>Main office location</p>
                    </div>
                </div>
                {/*  */}
                <div>
                    <form
                        className="flex flex-col justify-center w-[450px]  gap-6 "
                        action=""
                    >
                        <h3 className="text-xl">Send us Message</h3>
                        {/* your email */}
                        <input
                            className="border-2 h-16 pl-4 rounded-xl border-primary w-[450px]  text-box bg-base-100"
                            type="text"
                            name="email"
                            id=""
                            autoComplete="off"
                            placeholder="Email address "
                        />


                        {/* Subject */}
                        <label className="relative">
                            <input
                                className="border-2 h-16 pl-4 rounded-xl border-primary w-[450px]  text-box bg-base-100"
                                type="text"
                                name="subject"
                                id=""
                                autoComplete="off"
                                placeholder=" Subject"
                            />

                        </label>
                        {/* your message */}
                        <label className="relative">
                            <textarea
                                className="border-2 h-44 pl-4 rounded-xl border-primary  w-[450px] text-box bg-base-100 pt-4"
                                type="text"
                                name="message"
                                id=""
                                autoComplete="off"
                                placeholder="Message"
                            />

                        </label>

                        <button className="h-16  bg-primary text-white w-40 rounded-xl">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;