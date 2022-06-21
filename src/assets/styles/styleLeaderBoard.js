import { Platform, StyleSheet } from "react-native-web";

export const styles = StyleSheet.create({
  leaderBoardContainer: { width: '100vw', flexDirection: 'row', justifyContent: 'center', paddingVertical: 15, alignItems: 'center' },
  leaderRow: { width: '50%', textAlign: 'center' },
  leader: {
    fontSize: Platform.OS === 'web' ? 24 : 18,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textAlign: 'center',
    marginBottom: 20,
    color: '#e7c403'
  },
  board: {
    fontSize: Platform.OS === 'web' ? 22 : 18,
    color: '#f2e8e0'
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  tableHead: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})