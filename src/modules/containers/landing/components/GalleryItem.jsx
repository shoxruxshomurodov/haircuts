import React from "react";
import { HiOutlineZoomIn } from "react-icons/hi";
import styled from "styled-components";
const GalleryItemStyle = styled.div`
  .grid figure {
    position: relative;
    float: left;
    text-align: center;
    cursor: pointer;
  }

  .grid figure img {
    position: relative;
    display: block;
    min-height: 100%;
    max-width: 100%;
  }

  .grid figure figcaption {
    color: #fff;
    text-transform: uppercase;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .grid figure figcaption::before,
  .grid figure figcaption::after {
    pointer-events: none;
  }

  .grid figure figcaption,
  .grid figure figcaption > a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }

  .grid figure figcaption > a {
    z-index: 1000;
    text-indent: 200%;
    white-space: nowrap;
    font-size: 0;
    opacity: 0;
  }

  .grid figure h2 {
    word-spacing: -0.15em;
    font-weight: 300;
  }

  .grid figure h2 span {
    font-weight: 800;
  }

  .grid figure h2,
  .grid figure p {
    margin: 0;
  }

  figure.effect-oscar img {
    opacity: 1;
    -webkit-transition: opacity 0.6s;
    transition: opacity 0.6s;
  }

  figure.effect-oscar figcaption {
    padding: 3em;
    -webkit-transition: background-color 0.35s;
    transition: background-color 0.35s;
  }

  figure.effect-oscar figcaption::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";
    background: rgba(7, 7, 7, 0.5);
    opacity: 0.1;
  }

  figure.effect-oscar h2 {
    -webkit-transition: -webkit-transform 0.35s;
    transition: transform 0.35s;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  figure.effect-oscar figcaption::before,
  figure.effect-oscar p {
    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  figure.effect-oscar:hover h2 {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  figure.effect-oscar:hover figcaption::before,
  figure.effect-oscar:hover p {
    opacity: 1;
    -webkit-transform: scale(5);
    transform: scale(5);
  }

  figure.effect-oscar:hover img {
    opacity: 1;
  }

  .img-hover-zoom {
    overflow: hidden;
    transition: transform 0.6s ease;
  }

  .img-hover-zoom img {
    transition: transform 0.6s ease;
  }

  .img-hover-zoom:hover img {
    transform: scale(1.1);
  }
`;
const GalleryItem = ({ image, url }) => {
  return (
    <GalleryItemStyle>
      <div className="grid">
        <figure class="effect-oscar img-hover-zoom">
          <img src={image} />
          <figcaption>
            <p>
              <a href={url}>
                <HiOutlineZoomIn color={"#ffffff"} />
              </a>
            </p>
          </figcaption>
        </figure>
      </div>
    </GalleryItemStyle>
  );
};

export default GalleryItem;
