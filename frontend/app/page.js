import Header from "@/components/header";
import About from "@/components/about";
import Resume from "@/components/resume";
import Service from "@/components/service";
import Portfolio from "@/components/portfolio";
import Testimonial from "@/components/testimonial";
import Pricing from "@/components/pricing";
import Skill from "@/components/skills";
import Contact from "@/components/contact";
import Settings from "@/components/settings";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <div id="wrapper" className="counter-scroll bg_dark position-relative">
    
      <Header></Header>

      <div className="main-content style-fullwidth section-onepage">
        <div className="tf-container w-6">

          <About></About>
          <Resume></Resume>
          {/* <Service></Service> */}
          <Portfolio></Portfolio>
          <Testimonial></Testimonial>
          {/* <Pricing></Pricing> */}
          <Skill></Skill>
          <Contact></Contact>
          <Settings></Settings>
          <Footer></Footer>

        </div>
      </div>
    </div>


  );
}
