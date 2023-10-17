import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
// import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText style={{ paddingBottom: 0 }}>
          The purpose of this portfolio site is to quickly familiarize me with a few of my projects and get general information about me. <br />
          Click on the contact link for more details and possible collaborations.
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;