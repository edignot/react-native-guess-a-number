import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native"
import Card from "../components/Card"
import colors from "../constants/colors"
import Input from "../components/Input"

const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState("")

  const numberInputHandler = (input) => {
    setEnteredValue(input.replace(/[^0-9]/g), "")
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!!!</Text>
        <Card>
          <Input
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                color={colors.red}
                title="Reset"
                onPress={() => {
                  alert("Reset")
                }}
              />
            </View>
            <View style={styles.button}>
              <Button
                color={colors.green}
                title="Confirm"
                onPress={() => {
                  alert("Confirm")
                }}
              />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
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
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#f4f4f4",
    width: "40%",
    borderRadius: 50,
    marginTop: 20,
  },
})

export default StartGameScreen
