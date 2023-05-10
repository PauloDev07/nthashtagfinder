import React from 'react';
import {
  AboutMainStyled,
  AboutTextAndImageStyle,
  AboutUsStyle,
} from './styled';
import Header from '../Header';
import Footer from '../Footer';

import aboutContentImage from '../../assets/img/aboutImage.svg';
import emailBoxIcon from '../../assets/img/envelope_font_awesome.svg';
import gitHubIcon from '../../assets/img/github.svg';
import linkednIcon from '../../assets/img/linkedin.svg';

import developerInfos from './developers.json';

export default function AboutPageContent() {
  const userData = [...developerInfos];
  return (
    <>
      <Header />
      <AboutMainStyled>
        {/*  <div style={{height:'100%',display:'flex',justifyContent:"center"}}> */}
        <AboutTextAndImageStyle>
          <div id='titleAndTextContent'>
            <h1>Sobre o projeto</h1>
<<<<<<< HEAD
            <p style={{ margin: '0px' }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
=======
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
              sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
              duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
              dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam.

>>>>>>> f4e2b0ef1c408f7e9f972466601bf448268db12a
            </p>
          </div>
          <div id='aboutImageContent'>
            <img src={aboutContentImage} alt='illustrative developer' />
          </div>
        </AboutTextAndImageStyle>
        <AboutUsStyle>
          <h2>Quem somos</h2>
          <div id='itensPositions'>
            {userData.map((developersInfoUnit, index) => {
              return (
                <div id='developersDataContent' key={index}>
                  <img
                    id='developersImage'
                    key={index}
                    src={developersInfoUnit.userImage}
                  />
<<<<<<< HEAD
                  <h3 style={{ color: '#72EFDB' }}>
                    {developersInfoUnit.UserTitle}
                  </h3>
                  <p /* style={{backgroundColor:"gray", textAlign:"center"}} */>
=======
                  <h3>
                    {developersInfoUnit.UserTitle}
                  </h3>
                  <p>
>>>>>>> f4e2b0ef1c408f7e9f972466601bf448268db12a
                    {developersInfoUnit.userText}
                  </p>
                  <div id='iconsBoxContent'>
                    <img
                      src={gitHubIcon}
                      alt='github icon'
                      style={{
<<<<<<< HEAD
                        width: '20px',
                        height: '20px' /* , backgroundColor: "red" */,
=======
                        width: "25px",
                        height: "25px",
>>>>>>> f4e2b0ef1c408f7e9f972466601bf448268db12a
                      }}
                    />
                    <img
                      src={emailBoxIcon}
                      alt='github icon'
                      style={{
<<<<<<< HEAD
                        width: '20px',
                        height: '20px' /* , backgroundColor: "red"  */,
=======
                        width: "25px",
                        height: "25px",
>>>>>>> f4e2b0ef1c408f7e9f972466601bf448268db12a
                      }}
                    />
                    <img
                      src={linkednIcon}
                      alt='github icon'
                      style={{
<<<<<<< HEAD
                        width: '20px',
                        height: '20px' /* , backgroundColor: "red"  */,
=======
                        width: "25px",
                        height: "25px",
>>>>>>> f4e2b0ef1c408f7e9f972466601bf448268db12a
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </AboutUsStyle>
        {/* </div> */}
      </AboutMainStyled>
      <Footer />
    </>
  );
}
