import React from 'react'
import styled from 'styled-components'
import leaves from 'img/leaves.svg'
import { Link } from 'react-router-dom'
import respondTo from 'style/RespondTo'

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 340px;

  ${respondTo.sm`
    margin-bottom: 77px;
    padding: 0 32px;
  `}
`
const Image = styled.img`
  margin-left: 152px;

  ${respondTo.sm`
    margin:0;
    margin-top: 130px;
    width: 290px;
    height: 229px;
  `}
`

const TextOut = styled.div`
  position: absolute;
  right: 160px;
  bottom: -130px;

  ${respondTo.sm`
    position: relative;
    right: 0;
    bottom: 0;
    top: -40px;
  `}
`

const Header = styled.p`
  font-weight: 600;
  font-size: 48px;
  line-height: 54px;
  color: #131413;
  font-family: Oswald, sans-serif;

  ${respondTo.sm`
    font-size: 36px;
    line-height: 44px;
    margin-bottom: 40px;
  `}
`

const Sub = styled.p`
  margin-top: 25px;
  font-weight: 300;
  font-size: 34px;
  line-height: 40px;
  letter-spacing: 0.5px;
  color: #131413;
  font-family: Oswald, sans-serif;

  ${respondTo.sm`
    font-size: 32px;
    margin-top: 0;
  `}
`
const Launch = styled(Link)`
  padding: 16px 82px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
  background: #2ba55d;
  color: #fcfcfc;
  border-radius: 26px;
  font-family: Oswald, sans-serif;
  text-align: center;

  ${respondTo.sm`
    position: absolute;
    top: -310px;
    padding: 16px 32px;
    width: 100%;   
  `}
`

const Text: React.FC = () => (
  <Wrapper>
    <Image src={leaves} alt="leaves" width={530} height={418} />
    <TextOut>
      <Header>Best Rates with Automatic Liquidity Aggregator</Header>
      <Header>Excellent Rewards for Liquidity Providers</Header>
      <Sub>Split your trades & get the best price with one trade.</Sub>
      <div style={{ marginTop: '53px' }}>
        <Launch to="/farms">Launch app</Launch>
      </div>
    </TextOut>
  </Wrapper>
)

export default Text
