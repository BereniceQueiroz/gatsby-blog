import React, { useState, useEffect } from 'react';
import { Home } from '@styled-icons/boxicons-solid/Home';
import { Search } from '@styled-icons/boxicons-regular/Search';
import { Grid } from '@styled-icons/boxicons-solid/Grid';
import { Lightbulb as Light } from '@styled-icons/fa-regular/Lightbulb';
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt';
import { List } from "@styled-icons/bootstrap/List";

 
import * as S from './menubar.styled'

const MenuBar = () => {
  const [ theme, setTheme ] = useState(null);
  const [ display, setDisplay ] = useState(null);

  const isDarkMode = theme === "dark" //por padrao será dark ao clicar se estiver no darkMode mudará para ligth
  const isListMode = display === "list"

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)
    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  return(
    <S.MenuBarWrapper>

      <S.MenuBarGroup>

        <S.MenuBarLink to='/' title='Voltar para Home'>
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>

        <S.MenuBarLink to='/search/' title='Pesquisar'>
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>

      </S.MenuBarGroup>

      <S.MenuBarGroup>
        <S.MenuBarItem title='Mudar o tema'
          onClick={() => {
              window.__setPreferredTheme(isDarkMode ? "light" : "dark")
          }}
          className={theme}>
          <Light /> 
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Mudar visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? "grid" : "list")
          }}
        >
          {isListMode ? <Grid /> : <List />}
        </S.MenuBarItem>
        <S.MenuBarItem title='Ir para o topo'>
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>

    </S.MenuBarWrapper>
  )
}

export default MenuBar