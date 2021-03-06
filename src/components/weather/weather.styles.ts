import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  Weather__slider: {
    paddingHorizontal: 12,
    flex:1
  },
  Weather__containerTile: {
    marginHorizontal: 12,
    width: 222,
    flex: 1,
    justifyContent: 'space-between',
  },
  Weather__button_left: {marginRight: 12, marginLeft: 24},
  Weather__button_leftFirstButton: {marginRight: 12},
  Weather__button_right: {marginLeft: 12},
  Weather__inputBlock: {
    flexDirection: 'row',
    backgroundColor: 'rgba(128, 131, 164, 0.06)',
    marginHorizontal: 24,
    justifyContent: 'flex-start',
    marginVertical: 24,
    borderColor: 'rgba(128, 131, 164, 0.2)',
    borderWidth: 2,
    borderRadius: 8,
  },
});
