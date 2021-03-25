import React from "react"
import { View, StyleSheet } from "react-native"

const Card = ({ children, customStyles }) => {
  return <View style={{ ...styles.card, ...customStyles }}>{children}</View>
}

const styles = StyleSheet.create({
  card: {
    shadowColor: "#b2b2b2",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
    elevation: 8,
    backgroundColor: "white",
    padding: 20,
    borderWidth: 2,
    borderColor: "#f7f7f7",
  },
})

export default Card
