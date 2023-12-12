import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import MyProfile from "../../../public/assets/images/profilePhoto.jpg";
import AboutBgAnimation from "../AboutBgAnimation";
import {
  AboutBg,
  AboutContainer,
  AboutInnerContainer,
  AboutLeftContainer,
  AboutRightContainer,
  ResumeButton,
  Span,
  SubTitle,
  TextLoop,
  Title,
  Image,
} from "./style";

const About = () => {
  return (
    <div id="about">
      <AboutContainer>
        <AboutBg>
          <AboutBgAnimation />
        </AboutBg>
        <AboutInnerContainer>
          <AboutLeftContainer>
            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="_blank">
              Check Resume
            </ResumeButton>
          </AboutLeftContainer>
          <AboutRightContainer>
            <Image src={MyProfile} alt="MyProfile" />
          </AboutRightContainer>
        </AboutInnerContainer>
      </AboutContainer>
    </div>
  );
};

export default About;
