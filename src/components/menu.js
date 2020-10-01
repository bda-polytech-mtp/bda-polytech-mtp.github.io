import React from 'react';
import { push as PushMenu } from "react-burger-menu";
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from "gatsby-image";
import './menu.scss';

export const logoQuery = graphql`
  query LogoQuery {
    file(relativePath: { eq: "bda.png" }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

export const Menu = (props) => {

    const data = useStaticQuery(logoQuery);

    return <div id="wrapper">
        <PushMenu pageWrapId={ "main-content" } outerContainerId={ "wrapper" } >
            <div className="branding">
                <div className="brand">
                    <Img fluid={ data.file.childImageSharp.fluid } style={{ width: `100px` }} />
                </div>
                <h2>Bureau des arts</h2>
            </div>
            <Link className="menu-item" to="/ludotech/">
                <span>Ludotech</span>
            </Link>
            <Link className="menu-item" to="/">
                <span>Poly'move</span>
            </Link>
        </PushMenu>
        <main id="main-content">
            { props.children }
        </main>
    </div>

};