import { motion } from "framer-motion"
import { useState } from "react"

const Motion = () => {

  const [open, setOpen] = useState(false)


  // const variants = {
  //   visible: { opacity: 1 },
  //   halfway: { opacity: 0.5 },
  //   hidden: { opacity: 0 },
  // }

  const variant = { 
    visible: { 
      opacity: 1,
      x : 100, 
      // transition : { type: "spring", stiffness: 100, damping : 50}
      transition : { staggerChildren: 0.3}
    },
    hidden: { 
      opacity : 0
    },
  }

  const items = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB"]

  return (
    <div className="course"> 
      {/* <motion.div className="box" 
      initial={{opacity:0.5, scale: 0.5}} 
      transition= {{duration:2, type:"spring", stiffness:25}}
      whileInView={{opacity :1, scale :2}}>
      </motion.div> */}

      <motion.ul initial="hidden" animate="visible" variants = {variant} > 
        {items.map ((item) => (
          <motion.li key={item}  variants={variant}>{item}</motion.li>
        ))} 
      </motion.ul>

    </div>
  )
}
  
export default Motion ; 