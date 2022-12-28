import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from 'components/LogoLand'
import TwitLink from 'components/TwitLink'
import TelLink from 'components/TelLink'
import respondTo from 'style/RespondTo'

const Line = styled.hr`
  height: 2px;
  color: #131413;
  margin: 0 64px;
  ${respondTo.sm`
    margin: 0;
`}
`

const In = styled.div`
  padding: 0 64px;
  display: flex;
  justify-content: space-between;
  margin-top: 46px;

  ${respondTo.sm`
    padding: 0 32px;
  `}
`
const Launch = styled(Link)`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
  color: #131413;
  font-family: Oswald, sans-serif;
`
const Copy = styled.p`
  text-align: center;
  text-transform: uppercase;
  color: #363936;
  font-size: 10px;
  font-weight: 500;
  margin-top: 134px;
  font-family: Raleway, sans-serif;

  ${respondTo.sm`
    margin-top: 80px;
`}
`
const Group = styled.div`
  display: flex;
  flex-direction: column;
`
const SocialGroup = styled.div`
  align-items: flex-end;
  ${respondTo.sm`
    margin-top: 38px;
  `}
`

const Footer: React.FC = () => {
  return (
    <footer>
      <Line />
      <In>
        <Launch to="/farms">Launch app</Launch>
        <Group>
          <Logo width={335} height={120} />
          <SocialGroup style={{ alignSelf: 'flex-end' }}>
            <TwitLink />
            <TelLink />
          </SocialGroup>
        </Group>
      </In>
      <Copy>@2021 Fastswap. all right reserved</Copy>
    </footer>
  )
}

export default Footer
