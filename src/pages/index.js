import {Layout} from '../layout/Layout';
import {Section} from '../styles/GlobalComponents';
// import Accomplishments from '../components/Accomplishments/Accomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
// import StartUp from '../components/StartUp/Startup';

const Home = () => {
  return (
    <>
        {/* <StartUp/> */}
    <Layout>
      <Section grid center>
        <Hero />
        {/* <BgAnimation /> */}
      </Section>
      <Timeline />
      <Projects />
      <Technologies />
    </Layout>
    </>
  );
};

export default Home;