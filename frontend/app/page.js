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


import {
  getProfile,
  getExperiences,
  getEducations,
  getServices,
  getProjects,
  getTestimonials,
  getSkills,
  getPricing,
} from "@/lib/api";

export default async function Home() {
  const [
    profile,
    experiences,
    educations,
    services,
    projects,
    testimonials,
    skills,
    pricing,
  ] = await Promise.all([
    getProfile(),
    getExperiences(),
    getEducations(),
    getServices(),
    getProjects(),
    getTestimonials(),
    getSkills(),
    getPricing(),
  ]);

  return (
    <div id="wrapper" className="counter-scroll bg_dark position-relative">

      <Header profile={profile}></Header>

      <div className="main-content style-fullwidth section-onepage">
        <div className="tf-container w-6">

          <About profile={profile}></About>
          <Resume experiences={experiences} educations={educations}></Resume>
          {/* <Service services={services}></Service> */}
          <Portfolio projects={projects}></Portfolio>
          <Testimonial testimonials={testimonials}></Testimonial>
          {/* <Pricing pricing={pricing}></Pricing> */}
          <Skill skills={skills}></Skill>
          <Contact profile={profile}></Contact>
          <Settings></Settings>
          <Footer profile={profile}></Footer>

        </div>
      </div>
    </div>


  );
}
