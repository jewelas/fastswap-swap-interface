import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Button, ButtonProps, useWalletModal } from '@fastswap-uikit'
import { injected, walletconnect } from 'connectors'
import useI18n from 'hooks/useI18n'
import styled from 'styled-components'

const UnlockButton: React.FC<ButtonProps> = (props) => {
  const TranslateString = useI18n()
  const { account, activate, deactivate } = useWeb3React()

  const handleLogin = (connectorId: string) => {
    if (connectorId === 'walletconnect') {
      return activate(walletconnect)
    }
    return activate(injected)
  }

  const { onPresentConnectModal } = useWalletModal(handleLogin, deactivate, account as string)

  const MyText = styled.span`
    font-family: Oswald, sans-serif;
    font-size: 16px;
  `

  return (
    <Button onClick={onPresentConnectModal} {...props} style={{ width: '100%', height: '82px' }}>
      <MyText>{TranslateString(292, 'CONNECT TO A WALLET')}</MyText>
    </Button>
  )
}

export default UnlockButton
