import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import image from '../assets/contact.png'
import image2 from '../assets/contact2.svg'
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
        <div>
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
                    <form ref={form} onSubmit={sendEmail}>
                        <div>
                            <label className="label">Name:-</label>
                            <input type="text" name="name" required
                                placeholder='your name'
                                className="input input-bordered border border-myRed"
                            />
                        </div>
                        <div>
                            <label className="label">Email:-</label>
                            <input type="email" name="email" required
                                placeholder='your email'
                                className="input input-bordered border border-myRed"
                            />
                        </div>
                        <div>
                            <label className="label">Message:-</label>
                            <textarea name="message" required
                                placeholder='your message here'
                                className="textarea textarea-bordered textarea-sm w-full max-w-xs border border-myRed" />
                            <br />
                            <input type="submit" value="Send"
                                className='myBtn shadow-md border border-myRed rounded-md'
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;