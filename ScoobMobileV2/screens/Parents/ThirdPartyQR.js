import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import SvgQRCode from 'react-native-qrcode-svg';

function QR() {
  return <SvgQRCode value="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />;
}

const ThirdPartyQR = () => {
  return (
    <View style={styles.container}>
      <QR />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default ThirdPartyQR