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
          Real State
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
              <FooterMenuLink href='/'>Home</FooterMenuLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <FooterMenuLink href='/realstate'>Houses</FooterMenuLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <FooterMenuLink href='/#about'>About us</FooterMenuLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <FooterMenuLink href='/sns'>Contact us</FooterMenuLink>
            </FooterMenuItem>
          </FooterMenuContent>
        </FooterMenu>
        <Copyright className='copyright'>
          {new Date().getFullYear()} {'\u00A9'} All rights belong to -
          Filipe{' '}
        </Copyright>
      </FooterContainer>
    </>
  )
}

export default Footer
