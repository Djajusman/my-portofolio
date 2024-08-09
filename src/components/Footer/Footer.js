import React from 'react';
import {
  FooterWrapper,
  SocialIconsContainer
} from './FooterStyles';
import SocialMedia from "../SocialMedia/SocialMedia.component";

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialIconsContainer>
        <SocialMedia inFooter />
        <span className='justify-center items-center flex pt-2'>Copyright © 2024 Allrights Reserved</span>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
