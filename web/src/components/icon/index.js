import React from 'react'
import HamburgerIcon from './hamburger'
import ChevronDownIcon from './chevron-down'

function Icon (props) {
  switch (props.symbol) {
    case 'hamburger':
      return <HamburgerIcon />
    case 'chevronDown':
      return <ChevronDownIcon />
    default:
      return <span>Unknown icon: {props.symbol}</span>
  }
}

export default Icon
