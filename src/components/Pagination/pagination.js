import React from 'react';
import propTypes from 'prop-types';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import getThemeColor from '../../utils/getThemeColor';
import * as S from './pagination.styled';

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
  <S.PaginationWrapper>
    {!isFirst && // se diferente de first redireciona para a page anterior
      <AniLink 
        to={prevPage} 
        cover 
        direction="left" 
        bg={getThemeColor()} 
        duration={0.6}
      >
        Página anterior
      </AniLink>
    }
    <p>{currentPage} de {numPages}</p>
    {!isLast && // se diferente de last redireciona para a page próxima
      <AniLink 
        to={nextPage} 
        cover 
        direction="right" 
        bg={getThemeColor()}  
        duration={0.6}
      >
        Próxima página
      </AniLink>
    }
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string, //link considera string
  nextPage: propTypes.string,
}

export default Pagination