import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import SocialMedia from "../SocialMedia/SocialMedia.component";
import { HeaderContainer, Div1, Div2, NavLink, NavLink2 } from './HeaderStyles';
import { Link as ReactScrollLink } from "react-scroll";

const Header = () => {
  const { route } = useRouter();
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(!show)
  }, [route === '/all-projects'])


  return (
    <HeaderContainer sticky>
      {route === '/' ? (
        <Div1>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            @Riyadh
          </span>
        </Div1>
      ) : (
        <Div1>
          <Link href='/'>
            <a style={{ display: 'flex', alignItems: 'center' }}>
              @Riyadh
            </a>
          </Link>
        </Div1>
      )
      }
      <Div2>
        <li>
          {route === '/all-projects' ?
            <Link href="/">
              <NavLink>Home</NavLink>
            </Link> :
            <ReactScrollLink to='about' spy={true} smooth={true} offset={-100} duration={200}>
              <NavLink2>
                About
              </NavLink2>
            </ReactScrollLink>
          }
        </li>
        <li>
          <ReactScrollLink to='projects' spy={true} smooth={true} offset={-100} duration={200}>
            <NavLink2>
              Projects
            </NavLink2>
          </ReactScrollLink>
        </li>
        <li className={route === '/all-projects' ? "hidden" : ""}>
          <ReactScrollLink to='tech' spy={true} smooth={true} offset={-100} duration={200}>
            <NavLink2>
              Technologies
            </NavLink2>
          </ReactScrollLink>
        </li>
      </Div2>
      <SocialMedia />
    </HeaderContainer>
  )
};

export default Header;
