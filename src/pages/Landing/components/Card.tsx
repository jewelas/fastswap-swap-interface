import React from 'react'
import styled from 'styled-components'
import respondTo from 'style/RespondTo'

interface IProps {
  title: string
  desc: string
}

const Wrapper = styled.div`
  max-width: 150px;
  margin-right: 40px;

  ${respondTo.sm`
    max-width: 93px;
    margin-right: 16px;
    flex-shrink: 0;
  `}

  ${respondTo.xss`
    max-width: 75px;
    display: flex;
    flex-direction: column;
    &:last-child {
      margin-right:0;
    }
    margin-right: 16px;
    flex-shrink: 0;
`}
`
const Title = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #131413;
  font-family: Oswald, sans-serif;
`
const Desc = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: #131413;
  margin: 9px 0;
  font-family: Raleway, sans-serif;
  flex-grow: 1;
`

const Line = styled.div`
  height: 4px;
  background: #9dd1b2;
`

const Card: React.FC<IProps> = ({ title, desc }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
      <Line />
    </Wrapper>
  )
}

export default Card
