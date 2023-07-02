"use client";

import React from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  width: 100%;
  height: 2rem;
  max-height: 2rem;
`;

const Image = styled.img`
  width: 6rem;
  height: fit-content;
  object-fit: contain;
  margin: 1rem auto;

  @media (min-width: 480px) {
    width: 9rem;
  }

  @media (min-width: 768px) {
    width: 12rem;
  }
`;

function Navbar() {
  return (
    <NavContainer>
      <Image src="/logo.png" alt="leadster-icon" />
    </NavContainer>
  );
}

export default Navbar;
