import "./services.scss";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
    y: 100,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const techStackLogos = [
  { src: "html.svg", name: "HTML" },
  { src: "css.svg", name: "CSS" },
  { src: "js.svg", name: "JavaScript" },
  { src: "react-native.svg", name: "React" },
  { src: "react.svg", name: "React Native" },
  { src: "threejs.svg", name: "Three.js" },
  { src: "nodejs.svg", name: "Node.js" },
  { src: "expressjs.svg", name: "Express.js" },
  { src: "django.svg", name: "Django" },
  { src: "php.svg", name: "php" },
  { src: "mongodb.svg", name: "MongoDB" },
  { src: "mysql.svg", name: "MySQL" },
  { src: "mariadb.svg", name: "MariaDB" },
  { src: "firebase.svg", name: "Firebase" },
  { src: "matplotlib.svg", name: "Matplotlib" },
  { src: "python.svg", name: "Python" },
  { src: "c.svg", name: "C" },
  { src: "cpp.svg", name: "C++" },
  { src: "csharp.svg", name: "C#" },
  { src: "java.svg", name: "Java" },
  { src: "prolog.svg", name: "Prolog" },
  { src: "haskell.svg", name: "Haskell" },
];

const Services = () => {
  const ref = useRef(); // Used for animation reference
  return (
    <motion.div
      className="services"
      variants={variants}
      ref={ref}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={variants} className="textContainer">
        <p>
          Passionate about tech and innovation
          <br />
          Still learning, growing, and loving every step of the journey 🌟
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="service.png" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Get to </motion.b>know
          </h1>
        </div>

        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>
              Lukas Raja Agripa
            </motion.b>
          </h1>
          <button
            className="button"
          >
            <div className="dots_border"></div>
            <span className="text_button">What Lukas Do?</span>
          </button>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
        >
          <SwiperSlide>
            <motion.div
              className="box"
              whileHover={{ background: "lightgray", color: "black" }}
            >
              <h2>(S1) Informatics - Undergraduated STEI ITB 2023</h2>
              <p> From the School of Electrical Engineering and Informatics – Computing, Bandung Institute of Technology. Experienced in programming, digital content creation, and organizing impactful events. Passionate about applying technology and communication to solve real-world problems.              </p>
              <button
                onClick={() =>
                  window.open("https://drive.google.com/file/d/1RzGLvTCBcpYbtz-Co-q5l8EP-0CtOuyk/view?usp=sharing", "_blank")
                }
              >
                <b>Check My Resume</b>
              </button>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide>
            <motion.div
              className="box"
              whileHover={{ background: "lightgray", color: "black" }}
            >
              <h2>Awardee Pertamina Sobat Bumi Scholarship</h2>
              <p>
                Being part of Awardee Pertamina Foundation, playing a crucial
                role in the developing of renewable energy called the Desa
                Energi Berdikari program. Building photovoltaic and biogas
                schemes to fulfill the development of 3E, Energy Economy and
                Education in the village of Haurngombong Sumedang.
              </p>
              <button
                onClick={() =>
                  window.open("https://drive.google.com/drive/folders/1Fv40SsAWlfpbDSb1NmSbYCUcUL38Sh4G?usp=drive_link", "_blank")
                }
              >
                <b>View Documentation</b>
              </button>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide>
            <motion.div
              className="box techStackBox"
              whileHover={{ background: "lightgray", color: "black" }}
            >
              <h2>Tech Stack Overview</h2>
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 500 }}
                loop={true}
                spaceBetween={10}
                slidesPerView={3}
                className="techStackSwiper"
              >
                {techStackLogos.map((logo, index) => (
                  <SwiperSlide key={index}>
                    <div className="techStackItem">
                      <span>{logo.name}</span>
                      <img src={logo.src} alt={`TechStack ${logo.name}`} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button
                onClick={() =>
                  window.open("https://github.com/rlukassa/", "_blank")
                }
              >
                <b>Check My Github Profile</b>
              </button>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide>
            <motion.div
              className="box"
              whileHover={{ background: "lightgray", color: "black" }}
            >
              <h2>Many Projects</h2>
              <p>
                I have been involved in a wide range of projects throughout my
                journey, from academic assignments that sharpened my technical
                skills to self-driven explorations where I experimented with
                new technologies. Additionally, I have collaborated with peers
                on group projects, enhancing both my problem-solving abilities
                and teamwork.
              </p>
              <button
                onClick={() =>
                  window.open("https://github.com/rlukassa?tab=repositories", "_blank")
                }
              >
                <b>Check My Repository</b>
              </button>
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default Services;
