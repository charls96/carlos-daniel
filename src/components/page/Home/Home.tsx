import Footer from "../../footer/Footer";
import Matrix from "./Projects/Projects";
import MyIDCard from "./MyIDCard/MyIDCard";
import TimeLine from "./TimeLine/TimeLine";
import MotivationalPhrase from "./MotivationalPhrase";

const Home = () => {
  return (
    <div className="bg-gradient-to-t from-slate-900 via-slate-900 to-slate-800 h-[80vh] overflow-y-auto overflow-x-hidden text-gray-300 relative flex flex-col gap-16">
      <div className="mt-20 mb-12 sm:mt-32">
        <MotivationalPhrase />
      </div>
      <div className="mx-4 sm:mx-6">
        <MyIDCard />
      </div>
      <div className="my-32">
        <TimeLine />
      </div>
      <Matrix />
      {/* astropos estilo dni */}
      {/* timeline experience live */}
      {/* <p className="text-6xl">Red Pill (Front end Projects) or Blue pill (full stack projects)</p>
      <p className="text-6xl">Carousel</p>
      <p className="text-6xl">I know you want to know more from me but wait for the cream (referencia a malditos bastardos)</p>
      <p className="text-6xl">A little mis of these 🧪 and other from that 🧪 we get my skills</p> */}
      <div className="mb-12 sm:mb-24">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
