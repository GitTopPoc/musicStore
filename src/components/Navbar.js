import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function () {
  return (
    <StyledNav className="navbar navbar-light navbar-expand-sm bg-danger px-sm-5">
      <Link to="/">
        <i className="fas fa-compact-disc navbar-brand"> </i>
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            Musical Instrument
          </Link>
        </li>

        <li className="nav-item ml-5">
          <Link to="/records" className="nav-link">
            Vinyl
          </Link>
        </li>

        <li className="nav-item ml-5">
          <Link to="/accessories" className="nav-link">
            Accessories
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto">
        <Button>
          <span>
            <i className="fas fa-shopping-cart mr-1" />
          </span>
          Cart
        </Button>
      </Link>
    </StyledNav>
  );
}

const Button = styled.button`
  font-size: 1.3rem;
  text-transform: capitalize;
  background: transparent;
  border: 2px solid white;
  border-radius: 0.5rem;
  cursor: pointer;
  color: white;
  margin: 0.2rem 0.5rem;
  padding: 0.2rem 0.4rem;
  transition: all 0.2s;

  &:hover {
    background-color: rgb(178, 251, 56);
    color: rgb(118, 106, 200);
  }

  &:focus {
    outline: none;
  }
`;

const StyledNav = styled.nav`
  background-color: rgb(118, 106, 200) !important;

  .fa-compact-disc {
    font-size: 1.8rem;
    color: rgb(178, 251, 56);
    transition: .3s;
  }
  .nav-link {
    color: white !important;
    font-size: 1.3rem;
    text-transform: capitalize;
    transition: all 0.2s;

    &:hover {
      color: rgb(178, 251, 56) !important;
    }
  }
`;
