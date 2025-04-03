import { motion } from "framer-motion";


const variants =  { 
  open : { 
    transition : {
      //  untuk animasi item ketika menekan tombol sidebar 
      staggerChildren: 0.2
     }
  }, 

  closed : {
    transition : {
      //  untuk animasi item ketika menekan tombol sidebar 
      staggerChildren: 0.05, 
      staggerDirection: -1, 
    }
  }
}

const itemVariants =  { 
  open : { 
    y: 0 , 
    opacity : 1, 
  }, 

  closed : {
    y : 50, 
    opacity : 0,
  }
}

const Links = () => {

  const items = [
    "Homepage", 
    "Services", 
    "Portfolio",
    "Contact",
  ]

  
  return (
    <motion.div className= "Links" variants={variants}>{items.map(item=>(
      <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTap= {{scale: 0.9}}>{item}</motion.a>
        ))}</motion.div>
  )
}

export default Links;