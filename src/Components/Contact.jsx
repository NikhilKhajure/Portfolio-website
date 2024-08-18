import React from 'react'
import Heading from './Heading'
import Social from './Social'
import { ToastContainer, toast } from 'react-toastify'
const access_keyEmail = import.meta.env.access_keyEmail;
function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", access_keyEmail);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            toast.success("Form Submitted Successfully")
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult("Please try again");
            toast.error("Please try again")
        }
    };
    return (
        <>
            <Heading heading="Contact Me" />
            <div className='form-hero' id='contact'>
                <form class="form" onSubmit={onSubmit}>
                    <div class="group">
                        <input required="true" class="main-input" type="text" name='name' />
                        <span class="highlight-span"></span>
                        <label class="lebal-email">Full Name</label>
                    </div>
                    <div class="group">
                        <input required="true" class="main-input" type="email" name='email' />
                        <span class="highlight-span"></span>
                        <label class="lebal-email">Email</label>
                    </div>
                    <div class="group">
                        <textarea name="message" class="main-input" placeholder='message' id=""></textarea>
                        <span class="highlight-span"></span>
                    </div>
                    <button class="btn" type='submit'>
                        <span class="btn-text-one">Submit</span>
                        <span class="btn-text-two">THANKS !</span>
                    </button>
                </form>
                <Social />
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={8000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )
}

export default Contact
