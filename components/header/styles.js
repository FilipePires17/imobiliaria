import styled from 'styled-components'
import { MAIN, SECONDARY, GRAY, WHITE, BLACK } from '../../styles/Colors'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px 0 !important;
  background: ${MAIN};
`

export const Logo = styled.a`
  font-weight: bold;
  font-size: 28px;
  color: ${WHITE};
  text-decoration: none;
  padding-left: 50px;
`

export const LogoDetail = styled.span`
  color: ${MAIN};
`

export const Menu = styled.nav``

export const MenuContent = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;
  list-style: none;
`

export const MenuItem = styled.li`
  margin-right: 20px;
  color: ${BLACK};
  cursor: pointer;
`
