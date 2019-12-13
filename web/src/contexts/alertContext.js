import React, {useState} from 'react'

const AlertContext = React.createContext()

const AlertProvider = (props) => {
  const [showAlert, setShowAlert] = useState(true)

  const closeAlert = () => {
    setShowAlert(false)
  }

  const contextValue = {
    showAlert: showAlert,
    closeAlert: closeAlert
  }

  return <AlertContext.Provider value={contextValue} {...props} />
}

export {AlertContext, AlertProvider}
