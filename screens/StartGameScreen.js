import React from "react"
import { View, Text, StyleSheet, TextInput, Button } from "react-native"

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!!!</Text>
      <View styles>
        <Text></Text>
        <TextInput style={styles.inputContainer} />
        <View style={styles.buttonContainer}>
          <Button
            title="Reset"
            onPress={() => {
              alert("Reset")
            }}
          />
          <Button
            title="Confirm"
            onPress={() => {
              alert("Confirm")
            }}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
  },
  inputContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: "#b5b5b5",
    borderWidth: 2,
    borderRadius: 100,
    shadowColor: "#b2b2b2",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.26,
  },
  buttonContainer: {
    flexDirection: "row",
  },
})

export default StartGameScreen
