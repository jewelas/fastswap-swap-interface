import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import TwitLink from 'components/TwitLink'
import TelLink from 'components/TelLink'
import Logo from 'components/LogoLand'
import respondTo from 'style/RespondTo'
import burger from 'img/burger.svg'
import close from 'img/x.svg'
import mLogo from 'img/mLogo.svg'

const Hdr = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 64px;

  ${respondTo.sm`
    padding: 16px 32px 0 32px;
  `}
`

const SocialGroup = styled.div`
  display: flex;
  align-items: center;
  ${respondTo.sm`
    display: none;
  `}
`
const Launch = styled(Link)`
  padding: 16px 48px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
  background: #2ba55d;
  color: #fcfcfc;
  border-radius: 26px;
  margin-left: 23px;
  font-family: Oswald, sans-serif;
`

const Burger = styled.button`
  border: none;
  background: url(${burger}) no-repeat center;
  width: 32px;
  height: 32px;
  display: none;

  ${respondTo.sm`
    display: block;
  `}
`

const NavOut = styled.div`
  background: #2ba55d;
  z-index: 4;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`

const NavMobile = styled.nav`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
  background: url(${mLogo}) no-repeat right;
  background-size: contain;
`
const BtnClose = styled.button`
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  width: 18px;
  height: 18px;
  position: absolute;
  top: 28px;
  right: 38px;
  background: url(${close}) no-repeat center;
`

const Text = styled(Link)`
  font-family: Oswald, sans-serif;
  color: #fcfcfc;
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
`

const SocialMobile = styled.div`
  display: flex;
  align-items: center;
  margin-top: 84px;
`

const Header: React.FC = () => {
  const [isOpenMobile, setOpenMobile] = useState(false)

  const handleOpen = useCallback(() => {
    setOpenMobile(true)
  }, [])

  const handleClose = useCallback(() => {
    setOpenMobile(false)
  }, [])

  return (
    <>
      <Hdr>
        <Logo height={88} width={245} />
        <SocialGroup>
          <TwitLink />
          <TelLink />
          <Launch to="/farms">Launch app</Launch>
        </SocialGroup>
        <Burger onClick={handleOpen} type="button" />
      </Hdr>
      {isOpenMobile && (
        <NavOut>
          <NavMobile>
            <BtnClose onClick={handleClose} />
            <Text to="/farms">Launch app</Text>
            <SocialMobile>
              <TwitLink light />
              <TelLink light />
            </SocialMobile>
          </NavMobile>
        </NavOut>
      )}
    </>
  )
}

export default Header
