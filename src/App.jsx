import { TextGenerateEffect } from "./components/UI/text-generate-effect";
import { BackgroundLines } from "./components/background-lines";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
// import { TextRevealCard } from './components/UI/text-reveal-card';
import AnimatedTestimonialsDemo from "./components/TeamMembers";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <h2 className="font-canela bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-4xl lg:text-7xl py-2 md:pt-10 relative z-9 font-bold tracking-[24px] ">
            Carinami
          </h2>
          {/* <span className="font-raleway bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-sm md:text-lg lg:text-xl py-2 md:pb-10 relative z-20 tracking-tight">S T U D I O S</span> */}
          <TextGenerateEffect words={"S T U D I O S"} />
          {/* <TextRevealCard
      text="You know the business"
      revealText="I know the chemistry "
    /> */}
        </BackgroundLines>
        <Services />
        <AnimatedTestimonialsDemo />
      </div>
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
