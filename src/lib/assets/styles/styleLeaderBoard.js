import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  leaderBoardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: 'rgba(108, 122, 137, 0.9)',
    borderRadius: 10,
    marginVertical: 10,
  },
  leaderRow: {
    width: '50%',
    textAlign: 'center'
  },
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
  },
  nickname: {
    fontSize: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    color: '#000'
  },
  score: {
    color: '#fff'
  },
  imgShip: {
    position: 'relative',
    top: 20,
    left: 10,
    width: 50,
    height: 50
  }
})