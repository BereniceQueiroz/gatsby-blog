import React from 'react';
import Icons from './Icons';
import links from './content'

import * as S from './socialLinks.styles';

const SocialLinks = () => (
  <S.SocialLinksWrapper>
    <S.SocialLinksList>
      {links.map((link, i) => {
        const Icon = Icons[link.label]
        return (
          <S.SocialLinksItem key={i}>
            <S.SocialLinksLink
              href={link.url}
              title={link.label} //Acessibilidade
              target="_blank" 
              rel="noopener noreferrer" //SEO
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.SocialLinksLink>
          </S.SocialLinksItem>
        )
      })}
    </S.SocialLinksList>
  </S.SocialLinksWrapper>
)

export default SocialLinks