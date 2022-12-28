import React from 'react'
import styled from 'styled-components'
import telegLight from 'img/telLight.svg'
import teleg from '../../img/tel.svg'

const Link = styled.a`
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
`

interface IProps {
  light?: boolean
}

const TelLink: React.FC<IProps> = ({ light }) => (
  <Link href="https://web.telegram.org/#/im?p=%40fastswapdex" rel="noopener noreferrer" target="_blank">
    <img src={light ? telegLight : teleg} alt="Telegram" />
  </Link>
)

export default TelLink
