import React from "react";

import { Container } from "react-bootstrap";
import FadeUpTrigger from "../animation/FadeUpTrigger";

import HeaderNormal from "../components/header/HeaderNormal";
import BoxRight from "../components/box-right/BoxRight";
import TitleSection from "../components/heading/TitleSection";
import ServiceTow from "../components/services/ServiceTow";
import Team from "../components/team/Team";
import BrandClient from "../components/brand-client/BrandClient";
import NextPageContent from "../components/next/NextPageContent";
import Footer from "../components/footer/Footer";
import TestimonialTow from "../components/testimonial/TestimonialTow";
import { Helmet } from "react-helmet";

const headerContent = {
  title: "Video Production Company",
  description: `NORTH CAROLINA'S "ONE-STOP SHOP" FOR VIDEO PRODUCTION.`,
};

function About() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Red Nebula - About Us</title>
      </Helmet>

      {/*Start Header*/}
      <HeaderNormal className="background-section" description={headerContent.description}>
        {headerContent.title.toUpperCase()}
      </HeaderNormal>

      {/*Start Box Right Info*/}
      <BoxRight className="mb-section text-center" src="/assets/img/team/brett.jpg" parallaxFrom={{ scale: 1.2 }} parallax={{ scale: 1 }} overlay={4}>
        <FadeUpTrigger>
          <h3>
            Welcome to the, <br /> Red Nebula
          </h3>
          <p className="mt-30 m-w750 dsn-auto">
            Founded in 2000, NORTH CAROLINA'S "ONE-STOP SHOP" FOR VIDEO PRODUCTION. From Local Ads to Fortune 500 companies, Red Nebula provides a tailor-made crew for your project without the company
            fee.
          </p>
          <p className="mt-30 m-w750 dsn-auto">
            <i>BRETT MULLEN - FOUNDER</i>
            <br />
            <span>(20 YEARS OF VIDEO PRODUCTION EXPERIENCE)</span>
          </p>
        </FadeUpTrigger>
      </BoxRight>
      {/*End Box Right Info*/}

      {/*Start Service Section*/}
      <Container className="section-margin">
        <TitleSection description="Our Services"> {"Professional video services".toUpperCase()}</TitleSection>
        <ServiceTow col={2} colMobile={1} />
      </Container>
      {/*End Service Section*/}

      {/*Start Team*/}
      <section className="section-margin background-section section-padding">
        <Container className="dsn-right-container">
          <TitleSection description="our team">The best team ever!</TitleSection>
          <Team loop grabCursor />
        </Container>
      </section>
      {/*End Team*/}

      {/*Start Service Section*/}
      <Container className="section-margin">
        <TitleSection description="Client see">Feedback from our clients.</TitleSection>
        <TestimonialTow grabCursor loop />
      </Container>
      {/*End Service Section*/}

      {/*Start Brand*/}
      <Container className="section-margin">
        <TitleSection description="Our clients">
          Your successful, our <br /> reputation
        </TitleSection>
        <BrandClient col={4} colTablet={3} colMobile={2} colGap={1} rowGap={1}  />
      </Container>
      {/*End Brand*/}

      <NextPageContent className="section-margin" />
      <Footer />
    </React.Fragment>
  );
}

export default About;
