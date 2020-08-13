import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'gatsby';
import * as S from './pagination.styled';

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
  <S.PaginationWrapper>
    {!isFirst && // se diferente de first redireciona para a page anterior
      <Link to={prevPage}>Página anterior</Link>
    }
    <p>{currentPage} de {numPages}</p>
    {!isLast && // se diferente de last redireciona para a page próxima
      <Link to={nextPage}>Próxima página</Link>
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