import React from "react"
import { View, Text, StyleSheet, TextInput, Button } from "react-native"

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <View styles>
        <Text></Text>
        <TextInput style={styles.inputContainer} />
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={() => {}} />
          <Button title="Confirm" onPress={() => {}} />
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
  },
  buttonContainer: {
    flexDirection: "row",
  },
})

export default StartGameScreen
