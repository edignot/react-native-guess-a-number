import React from "react"
import { View, Text, StyleSheet } from "react-native"

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    backgroundColor: "#b2b2b2",
  },
  headerTitle: {
    color: "#fefefe",
    fontSize: 24,
  },
})

export default Header
