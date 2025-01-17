import Container from './Container';
import { motion } from 'framer-motion';
import './About.css'

const ServiceArray = ["UIX", "Web Development", "App Development", "GenAI", "Data Analytics"];

const About = () => {
  return (
    <motion.div className="relative flex w-full h-[400px] justify-center items-center overflow-visible left-1/2 no-scrollbar">
      {ServiceArray.map((service, index) => (
        <Container heading={service} key={index} />
      ))}
    </motion.div>
  );
};

export default About;
