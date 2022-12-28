import React from 'react'
import styled from 'styled-components'
import respondTo from 'style/RespondTo'
import logo from '../../img/logo.svg'

interface IProps {
  width: number
  height: number
}

const Image = styled.img`
  ${respondTo.sm`
    width: 156px;
    height: 56px;
  `}
`

const Logo: React.FC<IProps> = ({ height, width }) => <Image src={logo} alt="Fast logo" width={width} height={height} />

export default Logo
