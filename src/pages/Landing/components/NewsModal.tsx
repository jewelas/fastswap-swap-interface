import React, { useEffect, useState } from 'react'
import { Button, IconButton } from '@fastswap-uikit'
import styled from 'styled-components'
import respondTo from 'style/RespondTo'
import leaves from 'img/service-thumb.png'
import closebt from 'img/x.svg'
import { AutoRow } from 'components/Row'

const Image = styled.img`

  ${respondTo.sm`
    margin-top: 10px;
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
  `}
`

const Wrapper = styled.div`
  width: fit-content;
  background: #fcfcfc;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 9;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.18);
  border-radius: 24px;
  flex-shrink: 0;

  padding: 50px;
  margin-bottom: 20px;
  margin-top: 30px;
  display: flex;
  jusify-content: space-between;

  ${respondTo.sm`
    padding: 0px;
    margin-bottom: 52px;
    margin-top: 0px;
  `}
`

const TextOut = styled.div`
  flex-grow: 1;
  margin-left: 23px;

  ${respondTo.sm`
    padding: 30px;
    margin: 0px;
  `}
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
    margin: auto;
    width: 100%;
  `}
`

const ListText = styled.h1`
  font-weight: 300;
  font-size: 28px;
  line-height: 50px;
  color: #131413;
  font-family: Oswald, sans-serif;

  ${respondTo.sm`
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 10px;
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
  display: block;
  margin: auto;

  ${respondTo.sm`
    margin: auto;
  `}
`

const SwapOut = styled.div`
  width: 423px;
  background: transparent;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.04);
  border-radius: 24px;
  flex-shrink: 0;

  ${respondTo.sm`
    display: none;
  `}
`

const CardGroupBtn = styled.div`
  text-align: right;
  margin: auto;
  ${respondTo.sm`
    margin: 0px;
  `}
`

const HeaderGroup = styled.div`
  display: flex;
  ${respondTo.sm`
    display: flex;
  `}
`

const TextMid = styled.p`
  font-size: 25px;
  font-family: Raleway, sans-serif;
  margin: auto;
  ${respondTo.sm`
    margin: auto;
  `}
`

const TextDescription = styled.p`
  font-size: 22px;
  margin-top: 20px;
`

const NewsModal = () => {

  const [newsModal, setNewsModal] = useState(true);

  return (
    <>
    {newsModal && (	
      <Wrapper>
        <SwapOut>
          <Image src={leaves} alt="leaves"/>
        </SwapOut>
        <TextOut>
          <IconButton
            variant="tertiary"
            onClick={() => {
              setNewsModal(false);
            }}
            style={{ borderRadius: '50%', background: '#ff4a4a', position: 'absolute', right: '20px', top: '20px', width: '35px', height: '35px' }}
            size="sm"
          >
            <img src={closebt} width="24px" alt="" />
          </IconButton>
          <HeaderGroup><Header>DUKE INU &nbsp; </Header><TextMid>Developed by FastSwap</TextMid></HeaderGroup>
          <TextDescription>
            The First Meme Token with underlying Products and Utility.
          </TextDescription>
          <AutoRow mt='40px'>
            <CardGroup>
              <ListText>- Yield Farming</ListText>
              <ListText>- Staking</ListText>
              <ListText>- Vaults</ListText>
              <ListText>- IDO Participation</ListText>
            </CardGroup>
            <CardGroupBtn>
              <Button margin="2px" onClick={() => window.open('https://www.dextools.io/app/pancakeswap/pair-explorer/0xe545eabdd3b07c68b0d0df130a24b2dc4a10be61','_blank')}>Dextools</Button><br/>
              <Button margin="2px" onClick={() => window.open('https://duketoken.com','_blank')}>Duke Website</Button><br/>
              <Button margin="2px" onClick={() => window.open('https://fastswap.finance//#/swap?inputCurrency=0x4d338614fc25afe6edf3994f331b4bad32fb3c6a&outputCurrency=0xaee234825dc4687fae606485c1ebd06336052bcc','_blank')}>Buy on FastSwap</Button><br/>
              <Button margin="2px" onClick={() => window.open('https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xaee234825dc4687fae606485c1ebd06336052bcc','_blank')}>Buy on Pancakeswap</Button>
              {/* <LinkExternal href="https://google.com">fdgsdfgsdf</LinkExternal> */}
            </CardGroupBtn>
          </AutoRow>
        </TextOut>
      </Wrapper>
    )}
    </>
  )
}

export default NewsModal
