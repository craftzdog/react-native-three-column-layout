import * as React from 'react'

import { StyleSheet, View } from 'react-native'
import ThreeColumnLayout from 'react-native-three-column-layout'

export default function App() {
  return (
    <ThreeColumnLayout
      renderLeftView={() => <View style={[styles.box, styles.leftColumn]} />}
      renderMiddleView={() => (
        <View style={[styles.box, styles.middleColumn]} />
      )}
      renderRightView={() => <View style={[styles.box, styles.rightColumn]} />}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    flex: 1,
  },
  leftColumn: { backgroundColor: 'red' },
  middleColumn: { backgroundColor: 'yellow' },
  rightColumn: { backgroundColor: 'blue' },
})
