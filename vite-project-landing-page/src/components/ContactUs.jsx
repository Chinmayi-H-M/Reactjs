import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { useState } from 'react'
import toast from 'react-hot-toast'



const ContactUs = () => {
    const [result, setResult] = useState("");
    const onSubmit = async (e) => {
        e.preventDefault();
        setResult("Sending....");
        const formData = new FormData(e.target);
        formData.append("access_key", "00f42e23-7de2-433e-8959-d6cbf66f7338");
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            if (data.success) {
                toast.success("Message sent successfully");
                e.target.reset();
            }
            else {
                toast.error(data.message);
            }
        }
        catch (error) {
            toast.error(error.message);
        }

    }
    return (
        <div id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
            <Title title="Reach out to us" desc="Have a project in mind? We would love to hear from you. Whether you have a an idea, a question, or just want to say hi, feel free to reach out to us. We are always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Our team is ready to collaborate and bring your ideas to life." />

            <form onSubmit={onSubmit} action="" className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
                <div>
                    <p className="mb-2 text-sm font-medium">Your name</p>
                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                        <img src={assets.person_icon} alt='' />
                        <input type="text" name="name" placeholder='Enter your name' className='w-full p-3 text-sm ouline-none' required />
                    </div>
                </div>
                <div>
                    <p className="mb-2 text-sm font-medium">Your email</p>
                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                        <img src={assets.email_icon} alt='' />
                        <input type="email" name="email" placeholder='Enter your email' className='w-full p-3 text-sm outline-none' required />
                    </div>
                </div>
                <div className='sm:col-span-2'>
                    <p className="mb-2 text-sm font-medium">Your message</p>
                    <textarea rows={8} placeholder='Enter your message' name="message" className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600' required />
                </div>
                <button type='submit' className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all mb-5'>
                    Submit <img src={assets.arrow_icon} alt="" className='w-4' />
                </button>
            </form>

        </div>
    )
}

export default ContactUs
