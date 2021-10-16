import styled from 'styled-components'


export const DropDown = styled.div`
  position: relative;
  display: inline-block;
  padding-right: 60px;
  transition: padding-bottom .2s;
  padding-bottom: ${props => props.isOpen ? '460px' : '20px'};
`

export const DropDownButton = styled.button`
  padding: 14px 16px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.5px;
  width: 240px;
  cursor: pointer;
  color: #fff;
  background-color: var(--color-black);
  border: 1px solid transparent;
  border-radius: 2px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all .2s;
  svg {
    max-width: 24px;
    transition: all .2s;
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  }
  :hover {
    background-color: #343434;
  }
`

export const DropDownContainer = styled.div`
  display: flex;
  transition: opacity 0.15s ease-in-out;
  opacity: ${props => props.isOpen ? 1 : 0};
  pointer-events: ${props => props.isOpen ? 'all' : 'none'};
`

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: 240px;
  border-bottom: 1px solid #000;
  svg {
    cursor: pointer;
    transition: transform 0.2s;
    :hover {
      transform: translateY(2px);
    }
  }
`

export const DropDownContent = styled.div`
  display: block;
  position: absolute;
  overflow: auto;
  z-index: 10;
  width: 300px;
  top: 102px;
  left: 0;
  background: #fff;
  max-height: 400px;
  padding-bottom: 10px;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #C4C4C4;
    border-left: 2px solid #fff;
    border-right: 2px solid #fff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-black);
    border-radius: 34px;
  }
}
`
