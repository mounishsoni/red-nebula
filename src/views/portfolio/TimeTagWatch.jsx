import React from "react";
import { getPortfolioItem } from "../../api/portfolio/PortfolioData";

import { Container } from "react-bootstrap";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import DsnGrid from "../../components/DsnGrid";

//--> Component
import HeaderHalf from "../../components/header/HeaderHalf";
import TitleCover from "../../components/heading/title-cover/TitleCover";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import TextTrigger from "../../animation/TextTrigger";
import ButtonProject from "../../components/button/button-project/ButtonProject";
import BoxGallery, { BoxGalleryItem } from "../../components/box-gallery/BoxGallery";
import ButtonDefault from "../../components/button/button-default/ButtonDefault";
import BoxImageVertical from "../../components/box-image-vertical/BoxImageVertical";
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import ButtonPopup from "../../components/button/button-popup/ButtonPopup";
import MoveBox from "../../components/move-box/MoveBox";
import FJustifiedGallery from "../../components/justified-gallery/FJustifiedGallery";
import NextProject from "../../components/next/NextProject";
import { Helmet } from "react-helmet";

const TimeTagWatch = ({ data }) => {
  const nextData = getPortfolioItem(2);

  return (
    <React.Fragment>
      <Helmet>
        <title>Red Nebula - {data.title} </title>
        <meta name="description" content={data.description} />
      </Helmet>
      {/*Start Header Half*/}
      <HeaderHalf heroContent={data} parallax={{ yPercent: 30, scale: 1.1 }} textButton="Contact Us" href="/contact" overlay={data.overlay}>
        <strong className="color-heading">We carries RED, CANON, SONY AND FUJI GEAR</strong>
      </HeaderHalf>
      {/*End Header Half*/}

      {/*Start Info Project*/}
      <Container className="section-margin">
        <TitleCover>Red Nebula</TitleCover>
        <TextTrigger duration={0.8} stagger={0.1}>
          {(ref) => (
            <h2 className="title-section" ref={ref}>
              Rent Gear
            </h2>
          )}
        </TextTrigger>
        <FadeUpTrigger stagger={0.5}>
          <p className="mt-20">
            At Red Nebula, we have a rich variety of production equipment to help achieve the perfect look for every video. Every tool used on a video shoot has its purpose, therefore we have a
            seemingly endless list. Therefore, this page is dedicated to our favorites as well as most requested. Give us a call for specific request, we love making use of everything we have to
            offer.
          </p>
          <ButtonProject className={"mt-20"} href="/contact" target="_blank" rel="noopener noreferrer">
            Rent Now
          </ButtonProject>
        </FadeUpTrigger>
      </Container>
      {/*End Info Project*/}

      <FJustifiedGallery
        images={[
          { src: "/assets/img/gear/red.jpg", caption: "RED 5K Gemini Cinema Camera" },
          { src: "/assets/img/gear/steadicam.jpg", caption: "Steadicam" },
          { src: "/assets/img/gear/sigmacineprimes.jpg", caption: "Sigma Cine FF Primes" },
          { src: "/assets/img/gear/drone.jpg", caption: "Drone/Aerial Cinematography" },
          { src: "/assets/img/gear/cinema-jib.jpg", caption: "Cinema Jib" },
          { src: "/assets/img/gear/dji-ronin.jpg", caption: "DJI Ronin" },
        ]}
        className="section-margin z-index-1"
      />

      {/*Start Gallery List*/}
      {/* <BoxGallery className="section-margin" col={3} colMobile={1} colGap={0} rowGap={0}>
                <BoxGalleryItem
                    src="/assets/img/project/project1/4.jpg" caption="Trevor Bittinger"
                    groupPopup="gallery"/>
                <BoxGalleryItem src="/assets/img/project/project1/2.jpg" caption={"Sef McCullough"}
                                groupPopup="gallery"/>
                <BoxGalleryItem src="/assets/img/project/project1/3.jpg" caption={"Sef McCullough"}
                                groupPopup="gallery"/>
            </BoxGallery> */}
      {/*End Gallery List*/}

      {/*Start Box 1 Info With Image*/}
      <BoxImageVertical src="/assets/img/gear/red.jpg" className="section-margin">
        <FadeUpTrigger>
          {(ref) => (
            <DsnGrid col={1} rowGap={30} rowGapTablet={20}>
              <TitleCover>Red Nebula</TitleCover>
              <h2 className="title-section border-line-left" ref={ref}>
                RED 5K Gemini Cinema Camera
              </h2>
              <h6 ref={ref}>We love using the 5K RED GEMINI for the cinematic & ultra-sleek images it provides.</h6>
              <p ref={ref}>
                Our RED DRAGON captures over 9x more pixels than HD, is unrivaled detail, and impressive native exposure eclipse 35mm film in both latitude and image density. The industry-leading
                specs distinguish the DRAGON as a model for image innovation, helming the evolution of digital cinema technology.
                <br />
                <br />
                <h6>Movies shot on RED:</h6>
                <ul style={{ listStyle: "revert", margin: "revert", padding: "revert" }}>
                  <li style={{ listStyle: "revert", margin: "revert", padding: "revert" }}>Guardians of the Galaxy vo.2</li>
                  <li style={{ listStyle: "revert", margin: "revert", padding: "revert" }}>Transformers</li>
                  <li style={{ listStyle: "revert", margin: "revert", padding: "revert" }}>The Hobbit</li>
                  <li style={{ listStyle: "revert", margin: "revert", padding: "revert" }}>Stranger Things 2 & many, many more...</li>
                </ul>
              </p>
            </DsnGrid>
          )}
        </FadeUpTrigger>
      </BoxImageVertical>
      {/*End  Box Info With Image*/}

      {/*Start Box 2 Info With Image*/}
      <BoxImageVertical src="/assets/img/gear/steadicam.jpg" className="section-margin">
        <FadeUpTrigger>
          {(ref) => (
            <DsnGrid col={1} rowGap={30} rowGapTablet={20}>
              <TitleCover>Red Nebula</TitleCover>
              <h2 className="title-section border-line-left" ref={ref}>
                Steadicam
              </h2>
              <h6 ref={ref}>
                Some of the greatest movie scenes of all time were filmed using Steadicams. They allow moviemakers to produce moving, hand-held shots that are smooth & have no shakes or jolts. Due to
                this, Steadicam is an invaluable, dynamic production tool in the film and video industry that unleashes endless creative possibilities. Steadicam will give your video immense visual
                appeal with its smooth, free-flowing motion.
              </h6>
              <p ref={ref}>
                <ul style={{ listStyle: "revert", margin: "revert", padding: "revert" }}>
                  <li style={{ listStyle: "revert", margin: "revert", padding: "revert" }}>
                    In "Rocky" (1976), one of the first feature films to use Steadicams, operator Garrett Brown let the audience follow Sylvester Stallone as he ran up the steps of the Philadelphia
                    Art Museum. This iconic shot would have been nearly impossible before the Steadicam.
                  </li>
                  <li style={{ listStyle: "revert", margin: "revert", padding: "revert" }}>
                    In "The Shining" (1980), director Stanley Kubrick used a Steadicam shot to zip down the hallways of a haunted hotel and another to follow Jack Nicholson through a snowy hedge maze.
                  </li>
                  <li style={{ listStyle: "revert", margin: "revert", padding: "revert" }}>
                    Then there's the mesmerizing "gala" scene in "Pride and Prejudice" (2005). In the scene, the camera takes the viewer around a fashionable ball, where Mr. Darcy and Elizabeth first
                    meet. The Steadicam moves around the party focusing smoothly on various people.
                  </li>
                </ul>
              </p>
            </DsnGrid>
          )}
        </FadeUpTrigger>
      </BoxImageVertical>
      {/*End  Box Info With Image*/}

      {/*Start Box 3 Info With Image*/}
      <BoxImageVertical src="/assets/img/gear/sigmacineprimes.jpg" className="section-margin">
        <FadeUpTrigger>
          {(ref) => (
            <DsnGrid col={1} rowGap={30} rowGapTablet={20}>
              <TitleCover>Red Nebula</TitleCover>
              <h2 className="title-section border-line-left" ref={ref}>
                Sigma Cine FF Primes
              </h2>
              <h6 ref={ref}>
                The Sigma Cine FF primes are a new family of lenses specially designed and built for digital cinematography with full-frame sensor HDSLR and other professional cameras to deliver
                high-end optics. Due to this, we use these cine lenses to capture every detail of your project.
              </h6>
            </DsnGrid>
          )}
        </FadeUpTrigger>
      </BoxImageVertical>
      {/*End  Box Info With Image*/}

      {/*Start Box 4 Info With Image*/}
      <BoxImageVertical src="/assets/img/gear/drone.jpg" className="section-margin">
        <FadeUpTrigger>
          {(ref) => (
            <DsnGrid col={1} rowGap={30} rowGapTablet={20}>
              <TitleCover>Red Nebula</TitleCover>
              <h2 className="title-section border-line-left" ref={ref}>
                Drone/Aerial Cinematography
              </h2>
              <h6 ref={ref}>We’re FAA-approved FAA commercial aircraft licenses and insured for film and television productions with full-time professionals.</h6>
              <p ref={ref}>
                We specialize in low-altitude drone aerial cinematography to capture breathtaking aerial footage not possible in any other way. These shots are perfect for Feature Films, TV Series,
                Commercials, Ad agencies & Industrial applications.
              </p>
            </DsnGrid>
          )}
        </FadeUpTrigger>
      </BoxImageVertical>
      {/*End  Box Info With Image*/}

      {/*Start Box 5 Info With Image*/}
      <BoxImageVertical src="/assets/img/gear/cinema-jib.jpg" className="section-margin">
        <FadeUpTrigger>
          {(ref) => (
            <DsnGrid col={1} rowGap={30} rowGapTablet={20}>
              <TitleCover>Red Nebula</TitleCover>
              <h2 className="title-section border-line-left" ref={ref}>
                Cinema Jib
              </h2>
              {/* <h6 ref={ref}>We love using the 5K RED GEMINI for the cinematic & ultra-sleek images it provides.</h6> */}
              <p ref={ref}>
                A Jib enables 'almost' limitless different camera effects and angles. A Jib will add drama to product shots, get extreme high and low angle shots, create dynamic scene transitions,
                achieve artistic shots, and shoot smooth motion over obstacles (such as furniture).
                <br />
                <br />
                Camera movement created with the jib adds perspective and viewer interest. Each camera angle can create a unique effect as well. For example, in the high angle, characters can seem
                small or weak, but from the low angle, shots create the opposite effect. The possibilities are truly endless.
                <br />
                <br />
                The very best part of using a jib is that it adds high production value for little effort and at a reasonable cost.
              </p>
            </DsnGrid>
          )}
        </FadeUpTrigger>
      </BoxImageVertical>
      {/*End  Box Info With Image*/}

      {/*Start Box 6 Info With Image*/}
      <BoxImageVertical src="/assets/img/gear/dji-ronin.jpg" className="section-margin">
        <FadeUpTrigger>
          {(ref) => (
            <DsnGrid col={1} rowGap={30} rowGapTablet={20}>
              <TitleCover>Red Nebula</TitleCover>
              <h2 className="title-section border-line-left" ref={ref}>
                DJI Ronin
              </h2>
              <h6 ref={ref}>
                Designed to resist high G-forces using powerful motors and IMUs, the Ronin is engineered to maintain stability and hold horizon when mounted to an aircraft or a vehicle. When mounted
                to the M600 aerial system, it communicates directly with DJI's flight controller, allowing it to stabilize actively for a smoother shot.
              </h6>
            </DsnGrid>
          )}
        </FadeUpTrigger>
      </BoxImageVertical>
      {/*End  Box Info With Image*/}

      {/*Start Box Info Center Content*/}
      {/* <div className="p-relative section-margin v-dark-head text-center">
        <ParallaxImage src="/assets/img/project/project1/7.jpg" overlay={4} />
        <Container className="v-middle z-index-1">
          <ButtonPopup href="http://media.w3.org/2010/05/sintel/trailer.mp4" />
        </Container>
      </div> */}
      {/*End Box Info Center Content*/}

      {/*Start Box Info Move Content*/}
      <div className="p-relative section-margin">
        <ParallaxImage src="/assets/img/gear/dollies.jpg" overlay={4} />
        <Container className="v-middle z-index-1">
          <ButtonPopup href="https://www.youtube.com/watch?v=B-JqZmh3VBQ" target="_blank" />
        </Container>
        <MoveBox>
          <h3>Dollies</h3>
          <p className="mt-30">
            Watch this video to see Brett using the Dana Dolly. He has this larger version, plus one smaller version, to fit to your needs.
            <br />
            <br />
            The uses of the Dana Dolly are unlimited and the shots produced are stunning. It adds production value to any commercial shoot and produces ultra smooth shots with extreme creative and
            cinematic appeal.
            <br />
            <br />
            There are also specific effects that can only be accomplished with the Dana Dolly that we are happy to discuss with you.
          </p>
        </MoveBox>
      </div>
      {/*End Box Info Move Content*/}

      {/* <NextProject heroContent={nextData} overlay={nextData.overlay} /> */}
    </React.Fragment>
  );
};

export default TimeTagWatch;
