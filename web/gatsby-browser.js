/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// const React = require('react')

// export const AppContext = React.createContext()

// exports.wrapRootElement = ({element}) => {
//   return (
//     <Provider store={store}>
//       {element}
//     </Provider>
//   )
// }

import React from 'react'
import Layout from './src/containers/layout'

const wrapPageElement = ({element, props}) => {
  return <Layout {...props}>{element}</Layout>
}

export {wrapPageElement}
