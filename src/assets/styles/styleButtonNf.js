import { Platform, StyleSheet } from "react-native-web";

export const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#ffbf43',
    padding: 15,
    borderRadius: 50,
    margin: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  btnText: {
    fontSize: Platform.OS === 'web' ? 18 : 14,
    color: '#fff',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
  }
})