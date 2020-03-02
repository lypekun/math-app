import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import styled from "styled-components";
import { Link } from "react-router-dom";
export const BottomNavigationActionn = styled(BottomNavigationAction)`
  width: 100%;
  max-width: none;
`;

export const Linka = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
