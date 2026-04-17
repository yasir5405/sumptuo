import CompanyMarquee from "@/components/CompanyMarquee";
import Hero from "@/components/Hero Section/Hero";

const Home = () => {
  return (
    <div className="h-full w-full flex flex-col gap-12">
      <Hero />
      <CompanyMarquee />
    </div>
  );
};

export default Home;
