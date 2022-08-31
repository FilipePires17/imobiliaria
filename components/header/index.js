import React from 'react'
import Link from 'next/link'
import {
  HeaderContainer,
  Logo,
  LogoDetail,
  Menu,
  MenuContent,
  MenuItem
} from './styles'

function Header () {
  return (
    <HeaderContainer className='container'>
      <Logo href='/'>Real State</Logo>
      <Menu>
        <MenuContent>
          <Link href='/'>
            <MenuItem>Home</MenuItem>
          </Link>
          <Link href='/realstate'>
            <MenuItem>Houses</MenuItem>
          </Link>
          <Link href='/#about'>
            <MenuItem>About us</MenuItem>
          </Link>
          <Link href='/sns'>
            <MenuItem>Contact us</MenuItem>
          </Link>
        </MenuContent>
      </Menu>
    </HeaderContainer>
  )
}

export default Header
