import React from 'react';
import styled from 'styled-components';
import LogoIcon from '../assets/logo_icon.svg';

const StyledLogo = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  color: #fff;
  display: grid;
  grid-template-columns: 75px 1fr;
  grid-template-rows: 1fr;
  gap: 5px;
  margin: 10px;
`;

const StyledLogoDiv = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  z-index: 5;
`;

const Backsplash = styled.div`
  width: 90%;
  height: 90%;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  background-color: #fff;
  z-index: 0;
  margin: 4px 0 0 4px;
  border-radius: 25px;
`;

const StyledTitle = styled.h1`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`;

const Logo = (props) => (
  <StyledLogo>
    <StyledLogoDiv>
      <LogoIcon fill="#f25621" width="100%" height="100%" viewBox="0 0 450 450" preserveAspectRatio="xMidYMid meet" />
    </StyledLogoDiv>
    <Backsplash />
    <StyledTitle>HOSTILEWORLD</StyledTitle>
  </StyledLogo>
);

export default Logo;