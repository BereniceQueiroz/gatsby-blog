import React from "react";
import PropTypes from "prop-types";
import Sidebar from "../Sidebar";
import MenuBar from "../MenuBar";
import GlobalStyles from '../../styles/global'
import * as S from "./layout.styled";

export default function Layout({ children }) {
  return (
    <>
    <S.LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar />
    </S.LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

