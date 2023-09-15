import React from 'react'
import { Pressable, Text } from 'react-native'
import tw from 'twrnc'

export default function CustomButton({onPress, size = 'default', title = '', type = 'default'}) {
  return (
   
    <Pressable style={tw`
        ${type === 'primary' ? 'bg-blue-500 text-white' : 'bg-white border border-blue-500 text-blue-500'}
        ${size === 'large' ? 'px-8 py-4 rounded-md' : 'px-4 py-2 rounded-sm'}
    `} onPress={onPress}>
      <Text style={tw`
        ${type === 'primary' ? 'text-white' : 'text-blue-500'}
        ${size === 'large' ? 'text-[16px]' : 'text-[13px]'}
        font-medium
      `}>{title}</Text>
    </Pressable>
  )
}
