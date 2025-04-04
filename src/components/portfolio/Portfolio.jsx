import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title:
      "Finalist - AI4IMPACT Career Scholarship 3.0 for Internship Terra AI Singapore (2023)",
    img: ["sertif1.png"],
    desc: "Out of 15,000 participants, I was included in the 500 participants who passed the final selection of AI4IMPACT career scholarships. In the last selection, I built a Chatbot and did another Algorithm test with the Python programming language.",
  },
  {
    id: 2,
    title: "Ex-Member of Google Developer Student Club ITB (2023 - 2024)",
    img: ["sertif2.jpg"],
    desc: "I was an active member of the Google Developer Student Club ITB (2023 - 2024), where I had the opportunity to deepen my technical skills through various activities and workshops. One of the highlights was participating in the iCCom Class on Cloud #3, which focused on CI/CD on Google Cloud. Although the class primarily covered concepts of continuous integration and continuous deployment, I was particularly engaged in the Machine Learning segment. During this experience, I enhanced my ability to build and deploy ML models within cloud environments, gaining valuable insights into leveraging cloud infrastructure for scalable and efficient data processing.",
  },
  {
    id: 3,
    title: "ModelMorphosis: My First Web Development Competition Experience",
    img: ["web1.png"],
    desc: "ModelMorphosis is a web project I built for the Web Development Competition held by Universitas Atma Jaya Yogyakarta. As my first experience in web development competitions, it was both challenging and insightful. The project utilized a modern tech stack, including React JSX, Node.js, AOS, Swiper, and Accordion, and was designed to be fully mobile responsive. Although I didn’t make it to the finals, this experience ignited my passion for web development, motivating me to continue honing my skills and pursuing more competitions in the future.",
  },
  {
    id: 4,
    title: "Beyond Coding: Representing Renewable Energy Innovations",
    img: ["pertamina1.jpg"],
    desc: "As an Informatics student, my journey extends beyond coding and working behind a screen. I also had the privilege of representing the Pertamina Sobat Bumi Scholarship program to the University of Twente, Netherlands. During this opportunity, I introduced our project on photovoltaic systems and biogas schemes as part of the Desa Energi Berdikari initiative. This experience not only enhanced my communication skills but also deepened my passion for sustainable energy solutions.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            {item.img.length > 1 ? (
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 7000, disableOnInteraction: false }}
                loop={true}
              >
                {item.img.map((src, index) => (
                  <SwiperSlide key={index}>
                    <img src={src} alt={`Slide ${index + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <img src={item.img[0]} alt="" />
            )}
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {item.id === 1 ? (
              <button
                onClick={() =>
                  window.open("https://drive.google.com/file/d/1uSEYvrTqr7sZ1z4UdTDJvD57c7vBYOic/view?usp=drive_link", "_blank")
                }
              >
                View Certificate
              </button>
            ) : item.id === 2 ? (
              <button
                onClick={() =>
                  window.open("https://drive.google.com/file/d/1_6-vFZhTFc58rM0R8BOZ8SrLAMTESgT4/view?usp=drive_link", "_blank")
                }
              >
                View Certificate
              </button>
            ) : item.id === 3 ? (
              <>
                <button
                  onClick={() => window.open("https://rlukassa.github.io/IFest-13_WDC_ModelMorphosis_Institut-Teknologi-Bandung/", "_blank")}
                >
                  View Demo
                </button>
                <button
                  onClick={() => window.open("https://github.com/rlukassa/IFest-13_WDC_ModelMorphosis_Institut-Teknologi-Bandung", "_blank")}
                >
                  View Repository
                </button>
              </>
            ) : item.id === 4 ? (
              <button
                onClick={() =>
                  window.open("https://drive.google.com/drive/folders/1Fv40SsAWlfpbDSb1NmSbYCUcUL38Sh4G?usp=drive_link", "_blank")
                }
              >
                View Other Documentation
              </button>
            ) : null}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    restDelta: 0.01,
    duration: 0.5,
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Standout Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
