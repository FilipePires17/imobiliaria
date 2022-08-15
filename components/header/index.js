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
      <Logo href='/'>Imobiliaria</Logo>
      <Menu>
        <MenuContent>
          <Link href='/'>
            <MenuItem>Home</MenuItem>
          </Link>
          <Link href='/imoveis'>
            <MenuItem>Imóveis</MenuItem>
          </Link>
          <Link href='/#sobre'>
            <MenuItem>Sobre</MenuItem>
          </Link>
          <Link href='/contato'>
            <MenuItem>Contato</MenuItem>
          </Link>
        </MenuContent>
      </Menu>
    </HeaderContainer>
  )
}

export default Header
