import React from "react";
import { getPortfolioItem } from "../../api/portfolio/PortfolioData";
import { getPortfolioCategoryVideos } from "../../api/portfolio/PortfolioVideoData";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";

//--> Components
import HeaderFull from "../../components/header/HeaderFull";
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import ButtonPopup from "../../components/button/button-popup/ButtonPopup";
import NextProject from "../../components/next/NextProject";

/**
 * PortfolioVideoPage
 *
 * Single reusable view for all portfolio category detail pages.
 * Reads the category name from `data.title` (which matches the keys in
 * PortfolioVideoData.js) and renders each video item as a full-width
 * parallax section with a centred play button popup.
 *
 * Usage in PortfolioData.js:
 *   component: (props) => <PortfolioVideoPage {...props} nextId={8} />
 *
 * Props:
 *   data    — the portfolio item object from PortfolioData.js (required)
 *   nextId  — id of the next portfolio item to show in the footer (default: 8)
 */
const PortfolioVideoPage = ({ data, nextId = 8 }) => {
  const nextData = getPortfolioItem(nextId);

  // data.title must match the category key in PortfolioVideoData.js exactly,
  // e.g. "Commercial / TV", "Documentaries / Events", etc.
  const videos = getPortfolioCategoryVideos(data.title);

  return (
    <React.Fragment>
      <Helmet>
        <title>Red Nebula - {data.title}</title>
        <meta name="description" content={data.description} />
      </Helmet>

      {/*── Header ─────────────────────────────────────────────────────────*/}
      <HeaderFull
        heroContent={data}
        parallax={{ yPercent: 30, scale: 1.1 }}
        textButton="View Website"
        overlay={data.overlay}
      >
        <strong className="color-heading">Published</strong>
        <span> - September 26th 2019 </span>
      </HeaderFull>

      {/*── Video Sections ─────────────────────────────────────────────────*/}
      {videos.length > 0 ? (
        videos.map((item) => (
          <div
            key={item.id}
            className="p-relative section-margin v-dark-head text-center"
          >
            <ParallaxImage src={item.src} overlay={item.overlay} />
            <Container className="v-middle z-index-1">
              <ButtonPopup href={item.href} />
              {item.title && (
                <h4 className="mt-20 color-heading">{item.title}</h4>
              )}
              {item.description && (
                <p className="mt-10">{item.description}</p>
              )}
            </Container>
          </div>
        ))
      ) : (
        // Graceful fallback when no videos are found for this category
        <div className="p-relative section-margin text-center">
          <Container>
            <p>No videos found for this category.</p>
          </Container>
        </div>
      )}

      {/*── Next Project ───────────────────────────────────────────────────*/}
      {nextData && <NextProject heroContent={nextData} overlay={nextData.overlay} />}
    </React.Fragment>
  );
};

export default PortfolioVideoPage;