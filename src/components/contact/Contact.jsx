import "./contact.scss";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";


const variants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};

const Contact = () => {
    const ref = useRef(); // Used for animation reference
    const refForm = useRef();
    const [error, setError] = useState(false); // Tracks if an error occurred
    const [success, setSuccess] = useState(false); // Tracks if the email was sent successfully

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_pbo2h58",
                "template_uitjoou",
                refForm.current,
                "LOYGT-Luyw8ZGHWfr"
            )
            .then(() => {
                setSuccess(true); // Reset error state on success
                setError(false);
            })
            .catch(() => {
                setError(true); // Set error state on failure
                setSuccess(false);
            });
    };

    return (
        <motion.div
            className="contact"
            initial="initial"
            whileInView="animate"
            variants={variants}
            ref={ref} // Ensure variants are passed here
        >
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's work together!</motion.h1>
                <motion.div variants={variants} className="item">
                    <h2>Mail</h2>
                    <span>lukasagripa27@gmail.com</span>
                </motion.div>

                <motion.div variants={variants} className="item">
                    <h2>Address</h2>
                    <span>Pesantren Kota Kediri, Jawa Timur</span>
                </motion.div>

                <motion.div variants={variants} className="item">
                    <h2>Phone</h2>
                    <span>+62 813-1884-7388</span>
                </motion.div>

                <div className="formContainer">
                    <motion.form
                        ref={refForm}
                        onSubmit={sendEmail}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        <input type="text" required placeholder="Name" name="name" />
                        <input type="email" required placeholder="Email" name="email" />
                        <textarea rows={8} required placeholder="Message" name="message"></textarea>
                        <button type="submit">Submit</button>
                        {error && <p className="error">Error sending email. Please try again.</p>}
                        {success && <p className="success">Email sent successfully!</p>}
                    </motion.form>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Contact;
