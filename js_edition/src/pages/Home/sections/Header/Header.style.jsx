import styled from 'styled-components'
import {fontWeights, text, spacing, colors} from "../../../../config/styleGuide";

export const NavBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 64px;
  align-items: center;
  border-bottom: 1px solid ${colors.lightGray};
`

export const Logo = styled.img`
  width: 40px;
  height: 40px;
`

export const Title = styled.span`
  font-size: ${text.h[3]};
  font-weight: ${fontWeights.bold};
  color: ${colors.primaryText};
`

export const ButtonsWrapper = styled.div`
  display: flex;
`

export const IcalDownload = styled.button`
  display: flex;
`