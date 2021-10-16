import styled from 'styled-components'

import {MEDIA_QUERIES} from '../constants/mediaQueriesList'


export const WidgetContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 120px;
  padding: 100px 15px 60px;
  ${MEDIA_QUERIES.md} {
    flex-direction: column;
    align-items: center;
    padding: 40px 15px 20px;
    gap: 40px;
  }
`

export const SelectCurrency = styled.div`
  padding: 10px 6px;
  cursor: pointer;
  transition: background-color .2s;
  background-color: ${props => props.isSelected ? '#e0e0e0' : '#fff'};
  border-radius: 2px;
  max-width: 240px;
  :hover {
    background-color: #efefef;
  }
`

export const SelectedCurrenciesContainer = styled.div`
  flex-grow: 1;
  position: relative;
  max-width: 340px;
  height: 520px;
  border: 2px solid var(--color-black);
  border-radius: 4px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
  > * + *{
    margin-top: 34px;
  }
  ${MEDIA_QUERIES.xs} {
    width: 300px;
  }
`

export const EmptyMessage = styled.span`
  font-size: 24px;
  font-weight: 500;
  ${MEDIA_QUERIES.xs} {
    font-size: 20px;
  }
`

export const Input = styled.input`
  border: 0;
  border-bottom: 1px solid #e0e0e0;
  padding: 14px 8px;
  max-width: 240px;
  width: 100%;
  outline: none;
  ::placeholder {
    color: #e0e0e0;
    font-size: 14px;
  }
`

export const UpdatedTime = styled.span`
  font-size: 14px;
  font-weight: 400;
  padding: 10px;
  ${MEDIA_QUERIES.xs} {
    font-size: 12px;
  }
`
