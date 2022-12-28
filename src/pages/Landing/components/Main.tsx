import React, { useEffect } from 'react'
import { IconButton, Flex, useModal } from '@fastswap-uikit'
import styled from 'styled-components'
import respondTo from 'style/RespondTo'
import { useGetStats } from 'hooks/useGetStats'
import useGlobalData from 'hooks/useGlobalData'
import Card from './Card'
import Swap from '../../Swap'

import NewsModal from './NewsModal'

const Wrapper = styled.div`
  padding: 0 172px;
  margin-bottom: 74px;
  margin-top: 130px;
  display: flex;
  jusify-content: space-between;

  ${respondTo.sm`
    padding: 0 32px;
    margin-bottom: 52px;
    margin-top: 98px;
  `}
`

const TextOut = styled.div`
  flex-grow: 1;
  margin-right: 23px;
`
const Header = styled.h1`
  font-weight: 500;
  font-size: 48px;
  line-height: 54px;
  color: #131413;
  font-family: Oswald, sans-serif;

  ${respondTo.sm`
    font-size: 36px;
    line-height: 44px;
    margin-bottom: 24px;
  `}
`
const Text = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: #131413;
  margin-top: 19px;
  font-family: Raleway, sans-serif;
`
const CardGroup = styled.div`
  display: flex;
  margin-top: 80px;
  ${respondTo.sm`
    margin-top: 50px;
  `}
`

const SwapOut = styled.div`
  width: 423px;
  background: transparent;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  flex-shrink: 0;

  ${respondTo.sm`
    display: none;
  `}
`

const Icon = styled.img`
  width: 32px;
  height: 32px;
`

const Main: React.FC = () => {
  const data = useGetStats()
  const trade = data ? data['24h_total_volume'] : 0
  const value = data ? data.total_value_locked : 0

  const globalData: any = useGlobalData()
  const liqudiity = globalData ? Number(globalData.totalLiquidityUSD).toFixed(3) : 0

  return (
    <Wrapper>
      <TextOut>
        <Header>FASTEST Swapping Experience</Header>
        <Text>
          FastSwap is a decentrailized protocol for automated liquidity provision on Ethereum, Tron Network, BSC etc. +
          Cross-Chain Swap through Parachain on Polkadot.
        </Text>
        <CardGroup>
          <Card title={`$${trade}`} desc="Trading Volume 23hrs" />
          <Card title={`$${liqudiity}`} desc="Total Liquidity locked" />
          <Card title={String(value)} desc="Total Value Locked" />
        </CardGroup>
      </TextOut>
      <SwapOut>
        <Swap isLanding />
      </SwapOut>
    </Wrapper>
  )
}

export default Main
