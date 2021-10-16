import styled from 'styled-components'


export const CurrencyInputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CurrencyName = styled.span`
  background-color: #EEEEEE;
  width: 100px;
  padding: 4px 8px;
  margin-right: 22px;
`

export const Input = styled.input`
  border: 0;
  border-bottom: 1px solid #e0e0e0;
  padding: 4px 8px;
  max-width: 122px;
  outline: none;
`

export const Close = styled.span`
  margin-left: 24px;
  cursor: pointer;
  transition: transform 0.2s;
  :hover {
    transform: translateY(2px);
  }
`
