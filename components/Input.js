import React from "react"
import { TextInput, StyleSheet } from "react-native"

const Input = (props) => {
  return (
    <TextInput {...props} style={{ ...styles.input, ...props.customStyles }} />
  )
}

export default Input

const styles = StyleSheet.create({
  input: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: "#b5b5b5",
    borderWidth: 2,
    borderRadius: 100,
    shadowColor: "#b2b2b2",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.26,
    textAlign: "center",
  },
})
