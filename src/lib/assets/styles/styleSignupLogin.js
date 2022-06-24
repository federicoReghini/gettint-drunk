import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  title: {
    margin: 20,
    color: '#44403C',
    fontSize: 22
  },
  inputContainer: {
    margin: 20,
    backgroundColor: 'rgba(108, 122, 137, 0.9)',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 10,
    padding: 50
  },
  btn: {
    borderRadius: 20,
  },
  textInput: {
    margin: 10,
    textAlign: 'start',
    borderColor: '#000'
  },
  text: {
    textAlign: "center",
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
  }
})