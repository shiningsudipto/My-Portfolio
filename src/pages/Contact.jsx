import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import Lottie from 'react-lottie-player'
import contact from '../assets/contact.json'
import Socials from '../components/Socials';
import { FaWhatsapp, } from "react-icons/fa";
import { HiOutlineMailOpen, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_klw5tdz',
            'template_neyo0ts',
            form.current,
            '15X4dJOwty6rmDxc1')
            .then((result) => {
                console.log(result);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contact'>
            <div>
                <SectionTitle
                    subHeading={"contact with me"}
                    heading={"Contact"}
                ></SectionTitle>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
                <div>
                    <div className='text-lg'>
                        <p className='inline-flex items-center'><FaWhatsapp className='text-myGreen text-4xl me-4 my-1 bg-myDeepPurple hover:bg-myPurple rounded-full p-1' /> +880 1758579417</p>
                        <br />
                        <p className='inline-flex items-center'><HiOutlinePhone className='text-myGreen text-4xl me-4 my-1 bg-myDeepPurple hover:bg-myPurple rounded-full p-1' />  +880 1758579417</p>
                        <p className='inline-flex items-center'><HiOutlineMailOpen className='text-myGreen text-4xl me-4 my-1 bg-myDeepPurple hover:bg-myPurple rounded-full p-1' /> sudiptadasdev@gmail.com</p>
                        <p className='inline-flex items-center'><HiOutlineLocationMarker className='text-myGreen text-4xl me-4 my-1 bg-myDeepPurple hover:bg-myPurple rounded-full p-1' /> Barishal, Bangladesh</p>
                    </div>
                    <div className='divider'></div>
                    <Socials />
                </div>
                <div>
                    <div>
                        <Lottie
                            loop
                            animationData={contact}
                            play
                            className='h-96'
                        />
                    </div>
                </div>
                <div>
                    <form ref={form} onSubmit={sendEmail} className='px-3'>
                        <div>
                            <label className="label">Name:-</label>
                            <input type="text" name="name" required
                                placeholder='your name'
                                className="input bg-transparent input-bordered border border-myPurple w-full"
                            />
                        </div>
                        <div>
                            <label className="label">Email:-</label>
                            <input type="email" name="email" required
                                placeholder='your email'
                                className="input bg-transparent input-bordered border border-myPurple w-full"
                            />
                            <div className='lg:col-span-2'>
                                <label className="label">Message:-</label>
                                <textarea name="message" required
                                    placeholder='your message here'
                                    className="textarea bg-transparent textarea-bordered textarea-sm w-full border border-myPurple" />
                                <br />
                            </div>
                        </div>
                        <input type="submit" value="Send"
                            className='myBtn bg-transparent shadow-md border border-myPurple rounded-md w-full mt-3'
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;