import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Container({children}) {
  return (
    <SafeAreaView>
        {children}
    </SafeAreaView>
  )
}
