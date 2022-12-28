import React from 'react'
import { Trade, TradeType } from '@fastswap-libs'
import { Card, CardBody, Text } from '@fastswap-uikit'
import { Field } from '../../state/swap/actions'
import { useUserSlippageTolerance } from '../../state/user/hooks'
import { computeSlippageAdjustedAmounts, computeTradePriceBreakdown } from '../../utils/prices'
import { AutoColumn } from '../Column'
import QuestionHelper from '../QuestionHelper'
import { RowBetween, RowFixed } from '../Row'
import FormattedPriceImpact from './FormattedPriceImpact'
import { SectionBreak } from './styleds'
import SwapRoute from './SwapRoute'

function TradeSummary({ trade, allowedSlippage }: { trade: Trade; allowedSlippage: number }) {
  const { priceImpactWithoutFee, realizedLPFee } = computeTradePriceBreakdown(trade)
  const isExactIn = trade.tradeType === TradeType.EXACT_INPUT
  const slippageAdjustedAmounts = computeSlippageAdjustedAmounts(trade, allowedSlippage)

  return (
    <Card>
      <CardBody>
        <RowBetween>
          <RowFixed>
            <Text fontSize="14px" color="#363936" style={{ fontFamily: 'Raleway' }}>
              Slippage Tolerance
            </Text>
            <QuestionHelper
              isGray
              text="This is a setting for the limit of price slippage you are willing to accept."
            />
          </RowFixed>
          <Text fontSize="14px" style={{ fontFamily: 'Oswald' }} color="#131413">
            {allowedSlippage / 100}
          </Text>
        </RowBetween>

        <RowBetween>
          <RowFixed>
            <Text fontSize="14px" color="#363936" style={{ fontFamily: 'Raleway' }}>
              {isExactIn ? 'Minimum received' : 'Maximum sold'}
            </Text>
            <QuestionHelper
              isGray
              text="Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."
            />
          </RowFixed>
          <RowFixed>
            <Text fontSize="14px" style={{ fontFamily: 'Oswald' }} color="#131413">
              {isExactIn
                ? `${slippageAdjustedAmounts[Field.OUTPUT]?.toSignificant(4)} ${trade.outputAmount.currency.symbol}` ??
                  '-'
                : `${slippageAdjustedAmounts[Field.INPUT]?.toSignificant(4)} ${trade.inputAmount.currency.symbol}` ??
                  '-'}
            </Text>
          </RowFixed>
        </RowBetween>

        <RowBetween>
          <RowFixed>
            <Text fontSize="14px" color="#363936" style={{ fontFamily: 'Raleway' }}>
              Liquidity Provider Fee
            </Text>
            <QuestionHelper
              isGray
              text="For each trade a 0.2% fee is paid. 0.17% goes to liquidity providers and 0.03% goes to the Fastswap treasury."
            />
          </RowFixed>
          <Text fontSize="14px" style={{ fontFamily: 'Oswald' }} color="#131413">
            {realizedLPFee ? `${realizedLPFee.toSignificant(4)} ${trade.inputAmount.currency.symbol}` : '-'}
          </Text>
        </RowBetween>
      </CardBody>
    </Card>
  )
}

export interface AdvancedSwapDetailsProps {
  trade?: Trade
}

export function AdvancedSwapDetails({ trade }: AdvancedSwapDetailsProps) {
  const [allowedSlippage] = useUserSlippageTolerance()

  const showRoute = Boolean(trade && trade.route.path.length > 2)

  return (
    <AutoColumn gap="md">
      {trade && (
        <>
          <TradeSummary trade={trade} allowedSlippage={allowedSlippage} />
          {showRoute && (
            <>
              <SectionBreak />
              <AutoColumn style={{ padding: '0 24px' }}>
                <RowFixed>
                  <Text fontSize="14px">Route</Text>
                  <QuestionHelper text="Routing through these tokens resulted in the best price for your trade." />
                </RowFixed>
                <SwapRoute trade={trade} />
              </AutoColumn>
            </>
          )}
        </>
      )}
    </AutoColumn>
  )
}
