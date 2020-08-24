import React from "react";
import { useStaticQuery, graphql} from "gatsby";
import getThemeColor from '../../utils/getThemeColor';
import Avatar from "../Avatar"
import * as S from "./profile.styled"

export default function Profile() {
  const {
    site: {
      siteMetadata: { title, position, description }
    }
  } = useStaticQuery(graphql`
    query MysiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
          author
        }
      }
    }
  `) 
  return (
    <S.ProfileWrapper>
      <S.ProfileLink 
        to="/" 
        cover 
        direction="left" 
        bg={getThemeColor()} 
        duration={0.6}
      >
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}