import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const HeaderNav = () => {
  const Header = styled.div`
    display: flex;
    align-items: center;
    padding: 0 2rem 0 2rem;
    border-bottom: solid 1px green;
    min-height: 2rem;
    z-index: 99;
    background: black;
  `;

  return (
    <Header>
      <Link to="/">Home</Link>
    </Header>
  );
};

export default HeaderNav;