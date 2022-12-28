import React from 'react'
import styled from 'styled-components'
import twitLight from 'img/twitLight.svg'
import twit from '../../img/twit.svg'

const Link = styled.a`
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  margin-right: 16px;
`
interface IProps {
  light?: boolean
}

const TwitLink: React.FC<IProps> = ({ light }) => (
  <Link href="https://twitter.com/fastswapdex" rel="noopener noreferrer" target="_blank">
    <img src={light ? twitLight : twit} alt="Twitter" />
  </Link>
)

export default TwitLink
