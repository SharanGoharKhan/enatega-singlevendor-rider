import PropTypes from 'prop-types'
import React from 'react'
import { View } from 'react-native'
import useStyle from './styles'

function WrapperView({ children }) {
  const styles = useStyle()

  return <View style={[styles.flex, styles.wrapperView]}>{children}</View>
}

WrapperView.propTypes = {
  children: PropTypes.node
}

export default React.memo(WrapperView)
