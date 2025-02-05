import { AnimatedTestimonials } from "./UI/animated-members";
import akshayAvatar from "../assets/akshay_Avatar.png"
import ranaAvatar from "../assets/rana_Avatar.png"
import sanaAvatar from "../assets/sana_Avatar.png"
import balajiAvatar from "../assets/balaji_Avatar.png"

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Akshay",
      designation: "akshay.m@carinami.com",
      src: akshayAvatar
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Rana Prathap",
      designation: "rana.prathap@carinami.com",
      src: ranaAvatar,
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Sana Shaik",
      designation: "sana.shaik@carinami.com",
      src: sanaAvatar,
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Balaji",
      designation: "balaji.sai@carinami.com",
      src: balajiAvatar,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
