import React, { useState } from 'react';
import { aboutData } from '../data';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import dragon from '../img/header/dragon.svg';

const About = () => {
  const { title, subtitle1, subtitle2, btnIcon } = aboutData;
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const buttonText = expanded ? 'Cerrar' : 'Saber más';

  return (
    <section className='lg:py-16 xl:pb-[160px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-[70px] items-center'>
          <motion.div
            variants={fadeIn('right')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex flex-col lg:flex-row flex-1'
          >
            <div className='text-[360px] xl:text-[720px] leading-none font-tertiary lg:-tracking-[0.055em] bg-about bg-no-repeat bg-right bg-clip-text text-transparent'>
              <img src={dragon} alt='Logo' className='w-[400px] lg:w-[600px]' />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }}
            className='flex-1 h-full xl:mt-48'
          >
            <h2 className='h2'>{title}</h2>
            <div className='flex flex-col items-end'>
              <div className='max-w-[530px] text-grey'>
                <p className='mb-6'>{subtitle1}</p>
                <motion.p
                  className={`mb-6 ${expanded ? 'block' : 'hidden'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Soy un apasionado ilustrador y tatuador profesional.
                  Desde que era joven, siempre he sentido una conexión
                  profunda con el arte y la expresión creativa.
                  Después de años de estudio y práctica, me sumergí en el mundo del tatuaje
                  , decidido a hacer de mi pasión mi profesión.
                  es mi pasión y mi forma de vida.
                  Me siento honrado de poder utilizar mi talento
                  para ayudar a mis clientes a contar sus historias y
                  llevar consigo un pedazo de arte que les acompañará para siempre.
                </motion.p>
                <p className={`mb-9 ${expanded ? 'hidden' : 'block'}`}>{subtitle2}</p>
                <button className='btn btn-lg btn-link' onClick={toggleExpanded}>
                  {buttonText} {btnIcon}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
