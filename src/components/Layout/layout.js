import React from "react";
import PropTypes from "prop-types";
import Sidebar from "../Sidebar";
import GlobalStyles from '../../styles/global'
import * as S from "./layout.styles";

export default function Layout({ children }) {
  return (
    <>
    <S.LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
    <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

