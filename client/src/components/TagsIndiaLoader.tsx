import React from 'react';
import styled from 'styled-components';

const TagsIndiaLoader = () => {
  return (
    <FullScreenWrapper>
      <div className="loader-wrapper">
        <span className="loader-letter">M</span>
        <span className="loader-letter">I</span>
        <span className="loader-letter">N</span>
        <span className="loader-letter">D</span>
        <span className="loader-letter">W</span>
        <span className="loader-letter">A</span>
        <span className="loader-letter">R</span>
        <span className="loader-letter">E</span>
        <div className="loader" />
      </div>
    </FullScreenWrapper>
  );
}

const FullScreenWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background: #111;
  display: flex;
  align-items: center;
  justify-content: center;

  .loader-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
    width: auto;
    font-family: "Poppins", sans-serif;
    font-size: 2.2em;
    font-weight: 700;
    user-select: none;
    color: #fff;
    scale: 2;
  }

  .loader {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    background-color: transparent;
    mask: repeating-linear-gradient(
      90deg,
      transparent 0,
      transparent 6px,
      black 9px,
      black 10px
    );
  }

  .loader::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at 50% 50%, #ff0 0%, transparent 50%),
      radial-gradient(circle at 45% 45%, #f00 0%, transparent 45%),
      radial-gradient(circle at 55% 55%, #0ff 0%, transparent 45%),
      radial-gradient(circle at 45% 55%, #0f0 0%, transparent 45%),
      radial-gradient(circle at 55% 45%, #00f 0%, transparent 45%);
    mask: radial-gradient(
      circle at 50% 50%,
      transparent 0%,
      transparent 10%,
      black 25%
    );
    animation:
      transform-animation 2s infinite alternate,
      opacity-animation 4s infinite;
    animation-timing-function: cubic-bezier(0.6, 0.8, 0.5, 1);
  }

  @keyframes transform-animation {
    0% {
      transform: translate(-55%);
    }
    100% {
      transform: translate(55%);
    }
  }

  @keyframes opacity-animation {
    0%,
    100% {
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    65% {
      opacity: 0;
    }
  }

  .loader-letter {
    display: inline-block;
    opacity: 0;
    animation: loader-letter-anim 4s infinite linear;
    z-index: 2;
  }

  .loader-letter:nth-child(1) {
    animation-delay: 0.3s;
  }
  .loader-letter:nth-child(2) {
    animation-delay: 0.405s;
  }
  .loader-letter:nth-child(3) {
    animation-delay: 0.310s;
  }
  .loader-letter:nth-child(4) {
    animation-delay: 0.715s;
  }
  .loader-letter:nth-child(5) {
    animation-delay: 0.821s;
  }
  .loader-letter:nth-child(6) {
    animation-delay: 0.926s;
  }
  .loader-letter:nth-child(7) {
    animation-delay: 1.0s;
  }
  .loader-letter:nth-child(8) {
    animation-delay: 1.307s;
  }
  .loader-letter:nth-child(9) {
    animation-delay: 1.200s;
  }
  .loader-letter:nth-child(10) {
    animation-delay: 0.947s;
  }

  @keyframes loader-letter-anim {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 1;
      text-shadow: 0 0 4px #fff;
      transform: scale(1.1) translateY(-2px);
    }
    20% {
      opacity: 0.2;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default TagsIndiaLoader;