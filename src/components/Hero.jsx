import React from "react";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import "../index.css";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[100px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className='text-[#915EFF]'>Aolin</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Software, business <br className='sm:block hidden' />
            and the future!
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute bottom-2 w-full flex justify-center items-center'>
        <a href='#about' className='flex flex-col items-center gap-0' style={{ lineHeight: 0 }}>
          <motion.div
            animate={{ opacity: [0, 1, 0.3, 0] }}
            transition={{
              duration: 1.0,
              repeat: Infinity,
              repeatDelay: 1.0,
              ease: "easeInOut",
            }}
            className='text-secondary font-thin'
            style={{ fontSize: '72px', transform: 'rotate(90deg) scaleY(1.8)', letterSpacing: '0', lineHeight: 0, margin: 0, padding: 0, display: 'block', height: '20px' }}
          >
            ›
          </motion.div>
          <motion.div
            animate={{ opacity: [0, 0.3, 1, 0.3, 0] }}
            transition={{
              duration: 1.0,
              repeat: Infinity,
              repeatDelay: 1.0,
              delay: 0.5,
              ease: "easeInOut",
            }}
            className='text-secondary font-thin'
            style={{ fontSize: '72px', transform: 'rotate(90deg) scaleY(1.8)', letterSpacing: '0', lineHeight: 0, margin: 0, padding: 0, display: 'block', height: '20px' }}
          >
            ›
          </motion.div>
          <motion.div
            animate={{ opacity: [0, 0.3, 1, 0] }}
            transition={{
              duration: 1.0,
              repeat: Infinity,
              repeatDelay: 1.0,
              delay: 1.0,
              ease: "easeInOut",
            }}
            className='text-secondary font-thin'
            style={{ fontSize: '72px', transform: 'rotate(90deg) scaleY(1.8)', letterSpacing: '0', lineHeight: 0, margin: 0, padding: 0, display: 'block', height: '20px' }}
          >
            ›
          </motion.div>
        </a>
      </div>

    </section>
  );
}

export default Hero;