import React from 'react'
import styled from 'styled-components'
import respondTo from 'style/RespondTo'

const LayoutOut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  margin: 0 auto;
  z-index: 1;

  ${respondTo.sm`
    margin: 0;
`}
`

const LayoutContent = styled.div`
  flex: 1 0 auto;
  width: 100%;
  min-width: 320px;
  max-width: 1440px;
`

const LayoutDefault: React.FC = ({ children }) => {
  return (
    <LayoutOut>
      <LayoutContent>{children}</LayoutContent>
    </LayoutOut>
  )
}

export default LayoutDefault
