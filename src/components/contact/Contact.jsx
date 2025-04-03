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
      initial={{ y: 500, opacity: 0 }} // Explicitly define initial state
      animate={{ y: 0, opacity: 1 }} // Explicitly define animate state
      transition={{ duration: 0.5 }}
      ref={ref}
    >
      <motion.div className="headerContainer">
        <motion.h1 variants={variants} className="styledHeading">
        <p>Follow up for<br></br><span>more </span> information</p>
        </motion.h1>
        <motion.div variants={variants} className="infoItem">
          <h2>Mail</h2>
          <span>lukasagripa72@gmail.com</span>
        </motion.div>
        <motion.div variants={variants} className="infoItem">
          <h2>Address</h2>
          <span>Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 
          </span>
        </motion.div>
        <motion.div variants={variants} className="infoItem">
          <h2>Phone</h2>
          <span>+62 813-1884-7388</span>
        </motion.div>
      </motion.div>

      <div className="formContainer">
        <motion.form
          ref={refForm}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="form"
        >
          <label className="lb" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="infos"
            required
          />

          <label className="lb" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="infos"
            required
          />

          <label className="lb" htmlFor="message">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            className="infos"
            rows="8"
            required
          ></textarea>

          <div className="options">
            <button id="send" type="submit">
              Send
            </button>
            <button id="limpar" type="reset">
              Clear
            </button>
          </div>
        </motion.form>

        {error && (
          <div
            role="alert"
            className="popup bg-red-100 border-l-4 border-red-500 text-red-900"
          >
            <p>Error - Something went wrong.</p>
          </div>
        )}
        {success && (
          <div
            role="alert"
            className="popup bg-green-100 border-l-4 border-green-500 text-green-900"
          >
            <p>Success - Everything went smoothly!</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Contact;
