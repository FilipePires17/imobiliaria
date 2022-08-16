import React from 'react'

import Link from 'next/link'

import {
  FooterContainer,
  Logo,
  LogoDetail,
  SocialMedias,
  SocialMediaItem,
  FooterMenu,
  FooterMenuContent,
  FooterMenuItem,
  FooterMenuLink,
  Copyright
} from './styles'

function Footer () {
  return (
    <>
      <FooterContainer>
        <Logo className='logo'>
          <LogoDetail>RS</LogoDetail>ky
        </Logo>

        <SocialMedias className='social-medias'>
          <SocialMediaItem>
            <Link href='#'>Facebook</Link>
          </SocialMediaItem>
          <SocialMediaItem>
            <Link href='#'>Insta</Link>
          </SocialMediaItem>
          <SocialMediaItem>
            <Link href='#'>Twitter</Link>
          </SocialMediaItem>
          <SocialMediaItem>
            <Link href='#'>Envelop</Link>
          </SocialMediaItem>
        </SocialMedias>
        <FooterMenu className='footer-menu'>
          <FooterMenuContent>
            <FooterMenuItem>
              <FooterMenuLink href='#'>Home</FooterMenuLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <FooterMenuLink href='#'>Explorar</FooterMenuLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <FooterMenuLink href='#'>Sobre</FooterMenuLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <FooterMenuLink href='#'>Contato</FooterMenuLink>
            </FooterMenuItem>
          </FooterMenuContent>
        </FooterMenu>
        <Copyright className='copyright'>
          {new Date().getFullYear()} {'\u00A9'} Todos os direitos reservados -
          Elian Campos{' '}
        </Copyright>
      </FooterContainer>
    </>
  )
}

export default Footer
