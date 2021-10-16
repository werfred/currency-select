import {useState} from 'react'

import * as Styles from './styles'

import {ReactComponent as Arrow} from '../../images/arrow-down.svg'
import {ReactComponent as Close} from '../../images/close.svg'


const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Styles.DropDown {...props} isOpen={isOpen}>
        <Styles.DropDownButton isOpen={isOpen} {...props} onClick={toggleDropdown}>
          {props.title}
          <Arrow />
        </Styles.DropDownButton>
        <Styles.DropDownContainer isOpen={isOpen}>
          <Styles.SearchInputContainer>
            {props.searchBar}
            <Close onClick={() => props.setSearchCallback('')} />
          </Styles.SearchInputContainer>
          <Styles.DropDownContent {...props}>
            {props.children}
          </Styles.DropDownContent>
        </Styles.DropDownContainer>
      </Styles.DropDown>
    </>
  )
}

export default Dropdown
