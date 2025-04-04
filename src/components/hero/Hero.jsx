import "./hero.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    if (route.startsWith("/#")) {
      const id = route.slice(2); // Extract ID from route (e.g., "#Portfolio")
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the element
      }
    } else {
      navigate(route); // Navigate to other routes
    }
  };

  const items = [
    { label: "View Showcase Creations", route: "/#Portfolio" },
    { label: "Contact Me", route: "/#Contact" },
  ];

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>LUKAS RAJA AGRIPA</motion.h2>
          <motion.h1 variants={textVariants}>
            Web/Mobile Developer and AI/ML Explorer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            {items.map((item) => (
              <motion.button
                key={item.route}
                variants={textVariants}
                whileHover={{
                  scale: 1.1,
                  background: "linear-gradient(90deg, #ff00ff, #00ffff)",
                  color: "#000",
                }}
                whileTap={{
                  scale: 0.9,
                  background: "linear-gradient(90deg, #00ffff, #ff00ff)",
                  color: "#fff",
                }}
                onClick={() => handleNavigation(item.route)} // Updated navigation logic
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
          <motion.img
            src="scroll.png"
            alt=""
            animate="scrollButton"
            variants={textVariants}
          />
        </motion.div>

        <motion.div
          id="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
          style={{ zIndex: -1, pointerEvents: "none" }}
        >
          an IT Enthusiast @ Informatics, STEI ITB 2023
        </motion.div>
        <div className="imageContainer">
          <img src="hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
