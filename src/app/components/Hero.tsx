'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);
  
  // Handle video loading and fade in
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => {
        setIsLoaded(true);
      });
    }
    
    // Trigger animations after a small delay regardless of video load status
    // as a fallback for slow connections
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: custom * 0.2 + 0.3,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0] // Custom easing curve
      }
    })
  };
  
  // Button animation variants
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        delay: 1.1, 
        duration: 0.5,
        type: "spring",
        stiffness: 150
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(219, 50, 70, 0.4)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { scale: 0.98 }
  };

  // Divider animation
  const dividerVariants = {
    hidden: { width: "0%" },
    visible: { 
      width: "100%", 
      transition: { 
        delay: 0.7, 
        duration: 1.2, 
        ease: "easeInOut" 
      }
    }
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Background video with optimized loading */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/7103565/7103565-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          {/* Fallback image for browsers that don't support video */}
          <img 
            src="/api/placeholder/1920/1080" 
            alt="Creative design workspace" 
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Dynamic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 z-10" />

      {/* Wave SVG divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-20 md:h-32 fill-white"
          preserveAspectRatio="none"
        >
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 1,
              transition: { duration: 1.5, delay: 0.8, ease: "easeInOut" }
            }}
            d="M0,256L48,234.7C96,213,192,171,288,149.3C384,128,480,128,576,133.3C672,139,768,149,864,154.7C960,160,1056,160,1152,165.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="2"
          />
        </svg>
      </div>
      
      {/* Content container */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full px-6 md:px-8">
        <motion.div 
          className="max-w-4xl text-center"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {/* Creative brand signature */}
          <motion.div 
            custom={0}
            variants={textVariants}
            className="mb-3 text-xs md:text-sm tracking-widest text-white/80 uppercase font-light"
          >
            Where vision meets execution
          </motion.div>
          
          {/* Main headline */}
          <motion.h1 
            custom={1}
            variants={textVariants}
            className="text-4xl md:text-5xl lg:text-4xl font-bold tracking-tight text-white"
          >
            Guava Creative Studio
          </motion.h1>

          {/* Animated divider */}
          <div className="relative mt-4 max-w-sm mx-auto overflow-hidden">
            <motion.div 
              variants={dividerVariants}
              className="h-px bg-gradient-to-r from-transparent via-white to-transparent"
            />
          </div>

          {/* Compelling tagline */}
          <motion.p 
            custom={2}
            variants={textVariants}
            className="max-w-lg mx-auto mt-8 md:mt-10 text-sm font-light leading-relaxed text-white/90 md:text-base lg:text-lg"
          >
            We don't just design—we transform. Crafting digital experiences that captivate, 
            convert, and create lasting emotional connections with your audience.
          </motion.p>

          {/* CTA button with animation */}
          <motion.div 
            className="mt-10 md:mt-14"
            variants={textVariants}
            custom={3}
          >
            <motion.button 
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-10 py-4 text-sm font-medium tracking-wider text-white uppercase transition-all duration-300 bg-[#db3246] rounded-full shadow-lg shadow-[#db3246]/20"
            >
              See Our Masterpieces
            </motion.button>
          </motion.div>
          
         
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;