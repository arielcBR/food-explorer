import styled from 'styled-components'

export const TitleText = styled.h1`
  color: ${({ theme, color }) => theme.colors[`${color ?? 'light-300'}`]};
  font-size: ${({ theme, size }) =>
    theme.textSizes[`text-regular-${size ?? '3'}`]};
  font-family: ${({ theme }) => theme.fonts.poppins};
  line-height: 130%;
  font-weight: ${({ weight }) => weight ?? 800};
`

export const RegularText = styled.p`
  color: ${({ theme, color }) => theme.colors[`${color ?? 'light-300'}`]};
  font-size: ${({ theme, size }) =>
    theme.textSizes[`text-regular-${size ?? '3'}`]};
  font-family: ${({ theme }) => theme.fonts.poppins};
  line-height: 130%;
  font-weight: ${({ weight }) => weight ?? 400};
`
