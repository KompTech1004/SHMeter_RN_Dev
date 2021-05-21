import styleGuide, { COLOR_BLACK, SMALL_IPHONE, WIDTH, COLOR_TURQUOISE } from '../../constants/style';
import { StyleSheet, Text } from 'react-native';

export const paddingContent = 15;
export const templateStyleContent = {
  backgroundColor: '#fff',
  borderWidth: 1,
  borderColor: 'rgba(0,0,0,.05)',
  borderRadius: 10,
  shadowColor: COLOR_BLACK,
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.15,
  shadowRadius: 16,
  elevation: 24
};

export const ICON_SIZE = SMALL_IPHONE ? 24 : 26;
export const ICON_COLOR = COLOR_TURQUOISE;
export const ICON_PROPS = {
  size: ICON_SIZE,
  color: ICON_COLOR
};

export const CheckBoxProps = {
  containerStyle: {
    borderWidth: 0,
    height: SMALL_IPHONE ? 38 : 47,
    width: '94%',
    paddingLeft: 10,
    paddingTop: SMALL_IPHONE ? 7 : 11,
    paddingBottom: SMALL_IPHONE ? 7 : 11,
    marginBottom: 1,
    marginTop: 0,
    backgroundColor: null,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  textStyle: {
    ...styleGuide.textCheckbox,
    paddingLeft: 4,
    lineHeight: 23
  }
};

export default StyleSheet.create({
  contentWrp: {
    flex: 1,
    width: '100%',
    padding: paddingContent,
    paddingBottom: paddingContent * 1.25,
    paddingTop: 0
  },
  content: {
    ...templateStyleContent,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingBottom: 150
  },
  buttomBox: {
    width: '100%',
    padding: 20,
    position: 'absolute',
    bottom: 0
  },
  contentPosition: {
    position: 'relative'
  },
  backgroundContent_1: {
    ...templateStyleContent,
    width: WIDTH - paddingContent * 2 - templateStyleContent.borderRadius * 2,
    height: '100%',
    position: 'absolute',
    left: templateStyleContent.borderRadius,
    bottom: -templateStyleContent.borderRadius * .9
  },
  titleWrp: {
    paddingTop: SMALL_IPHONE ? 20 : 24
  },
  checkBoxWrp: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
});
