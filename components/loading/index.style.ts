import styled from "styled-components";

export const LoadingContainer = styled.div`
  text-align: center;
  @keyframes ldio-719iy7z31aa-1 {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-45deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @keyframes ldio-719iy7z31aa-2 {
    0% {
      transform: rotate(180deg);
    }
    50% {
      transform: rotate(225deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
  .ldio-719iy7z31aa > div:nth-child(2) {
    transform: translate(-15px, 0);
  }
  .ldio-719iy7z31aa > div:nth-child(2) div {
    position: absolute;
    top: 40px;
    left: 40px;
    width: 120px;
    height: 60px;
    border-radius: 120px 120px 0 0;
    background: #bb86fc;
    animation: ldio-719iy7z31aa-1 1s linear infinite;
    transform-origin: 60px 60px;
  }
  .ldio-719iy7z31aa > div:nth-child(2) div:nth-child(2) {
    animation: ldio-719iy7z31aa-2 1s linear infinite;
  }
  .ldio-719iy7z31aa > div:nth-child(2) div:nth-child(3) {
    transform: rotate(-90deg);
    animation: none;
  }
  @keyframes ldio-719iy7z31aa-3 {
    0% {
      transform: translate(190px, 0);
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    100% {
      transform: translate(70px, 0);
      opacity: 1;
    }
  }
  .ldio-719iy7z31aa > div:nth-child(1) {
    display: block;
  }
  .ldio-719iy7z31aa > div:nth-child(1) div {
    position: absolute;
    top: 92px;
    left: -8px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fffff4;
    animation: ldio-719iy7z31aa-3 1s linear infinite;
  }
  .ldio-719iy7z31aa > div:nth-child(1) div:nth-child(1) {
    animation-delay: -0.67s;
  }
  .ldio-719iy7z31aa > div:nth-child(1) div:nth-child(2) {
    animation-delay: -0.33s;
  }
  .ldio-719iy7z31aa > div:nth-child(1) div:nth-child(3) {
    animation-delay: 0s;
  }
  .loadingio-spinner-bean-eater-aqcbv1pk2bt {
    width: 10rem;
    height: 10rem;
    display: inline-block;
    overflow: hidden;
    background: none;
  }
  .ldio-719iy7z31aa {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-719iy7z31aa div {
    box-sizing: content-box;
  }
`;
