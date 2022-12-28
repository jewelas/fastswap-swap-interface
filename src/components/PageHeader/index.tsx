import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { IconButton, Text, Flex, useModal } from '@fastswap-uikit'
import clock from 'img/clock.svg'
import history from 'img/history.svg'
import SettingsModal from './SettingsModal'
import RecentTransactionsModal from './RecentTransactionsModal'

interface PageHeaderProps {
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
}

const StyledPageHeader = styled.div`
  padding: 16px 16px 0 16px;
`

const Details = styled.div`
  flex: 1;
`

const Icon = styled.img`
  width: 32px;
  height: 32px;
`

const Header = styled.p`
  font-family: Oswald, sans-serif;
  font-size: 24px;
  color: #131413;
`

const PageHeader = ({ title, description, children }: PageHeaderProps) => {
  const [onPresentSettings] = useModal(<SettingsModal />)
  const [onPresentRecentTransactions] = useModal(<RecentTransactionsModal />)

  return (
    <StyledPageHeader>
      <Flex alignItems="center">
        <Details>
          <Header>{title}</Header>
          {description && (
            <Text color="textSubtle" fontSize="14px">
              {description}
            </Text>
          )}
        </Details>
        <IconButton variant="text" onClick={onPresentSettings} title="Settings">
          <Icon src={clock} alt="" />
        </IconButton>
        <IconButton variant="text" onClick={onPresentRecentTransactions} title="Recent transactions">
          <Icon src={history} alt="" />
        </IconButton>
      </Flex>
      {children && <Text mt="16px">{children}</Text>}
    </StyledPageHeader>
  )
}

export default PageHeader
