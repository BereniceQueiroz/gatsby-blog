--- 
date: 2020-08-11 05:54:23
title: Ipsum ipsun
description:  Loren loren ipsun  Loren loren ipsun Loren loren ipsun
category: REACT
background: MEDIUMSLATEBLUE
image: static/assets/img/desert.jpg
--- 

<!-- //Info do post ao clicar no card estruturado em md -->
 

# Lorem ipsum

Proin suscipit luctus orci placerat fringilla. Donec hendrerit laoreet risus eget adipiscing. Suspendisse in urna ligula, a volutpat mauris. Sed enim mi, [adipiscing](http://google.com) eu pulvinar vel, sodales vitae dui. :thumbsup: :smile: :sparkler:

```jsx
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
```

## Fusce a metus eu

Pellentesque `sed` sapien lorem, at lacinia urna. In hac habitasse platea dictumst. Vivamus vel justo in leo laoreet ullamcorper non vitae lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum ullamcorper rutrum.

> Proin ornare ligula eu tellus tempus elementum. Aenean bibendum iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Ut vel arcu ac tortor adipiscing hendrerit vel sed massa. Fusce sem libero, lacinia vulputate interdum non, porttitor non quam. Aliquam sed felis ligula. Duis non nulla magna.

![Desert](static/assets/img/desert.jpg)

Nullam eros mi, mollis in sollicitudin non, tincidunt sed enim. Sed et felis metus, rhoncus ornare nibh. Ut at magna leo. Suspendisse egestas est ac dolor imperdiet pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor, erat sit amet venenatis luctus, augue libero ultrices quam, ut congue nisi risus eu purus. Cras semper consectetur elementum.


### Cras semper consectetur elementum

Pellentesque sed sapien lorem, at lacinia urna. In hac habitasse platea dictumst. Vivamus vel justo in leo laoreet ullamcorper non vitae lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum ullamcorper rutrum.

Proin suscipit luctus orci placerat fringilla. Donec hendrerit laoreet risus eget adipiscing. Suspendisse in urna ligula, a volutpat mauris. Sed enim mi, bibendum eu pulvinar vel, sodales vitae dui. Pellentesque sed sapien lorem, at lacinia urna. In hac habitasse platea dictumst. Vivamus vel justo in leo laoreet ullamcorper non vitae lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum ullamcorper rutrum.


#### Proin suscipit luctus

Pellentesque sed sapien lorem, at lacinia urna. In hac habitasse platea dictumst. Vivamus vel justo in leo laoreet ullamcorper non vitae lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum ullamcorper rutrum.

![lake](static/assets/img/lake.jpg)

- Lorem
- Ipsum
- Dolor
- Sit
- amet


#### Sed enim mi

Proin suscipit luctus orci placerat fringilla. Donec hendrerit laoreet risus eget adipiscing. Suspendisse in urna ligula, a volutpat mauris. Sed enim mi, bibendum eu pulvinar vel, sodales vitae dui. Pellentesque sed sapien lorem, at lacinia urna. In hac habitasse platea dictumst. Vivamus vel justo in leo laoreet ullamcorper non vitae lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum ullamcorper rutrum.
