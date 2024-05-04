import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const HeroSection = () => (
    <div id="about">
        <HeroContainer>
            {/* <HeroBg>
            <HeroBgAnimation />
        </HeroBg> */}
            <HeroInnerContainer>
                <HeroLeftContainer id="Left">
                    {/* <Title><br /> {Bio.name}</Title> */}
                    <TextLoop>
                        <Span>
                            <Typewriter
                                options={{
                                    strings: Bio.roles,
                                    autoStart: true,
                                    delay: 10,
                                    loop: true,
                                }} />
                        </Span>
                    </TextLoop>
                    <SubTitle>{Bio.about}</SubTitle>
                    {/* <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton> */}
                </HeroLeftContainer>

                <HeroRightContainer id="Right">

                    <Img src={HeroImg} alt="hero-image" />
                </HeroRightContainer>
            </HeroInnerContainer>

        </HeroContainer>
    </div>
)

export default HeroSection