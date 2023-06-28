import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import image2 from '../assets/contact3.svg'


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
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
                <div>
                    <img src={image2} alt="" />
                </div>
                <div>
                    <form ref={form} onSubmit={sendEmail} className='px-3'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <div>
                                <label className="label">Name:-</label>
                                <input type="text" name="name" required
                                    placeholder='your name'
                                    className="input bg-transparent input-bordered border border-myOrange w-full"
                                />
                            </div>
                            <div>
                                <label className="label">Email:-</label>
                                <input type="email" name="email" required
                                    placeholder='your email'
                                    className="input bg-transparent input-bordered border border-myOrange w-full"
                                />
                            </div>
                            <div className='lg:col-span-2'>
                                <label className="label">Message:-</label>
                                <textarea name="message" required
                                    placeholder='your message here'
                                    className="textarea bg-transparent textarea-bordered textarea-sm w-full border border-myOrange" />
                                <br />
                            </div>
                        </div>
                        <input type="submit" value="Send"
                            className='myBtn bg-transparent shadow-md border border-myOrange rounded-md w-full mt-3'
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;