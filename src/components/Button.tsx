import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';

import React from 'react';
import theme from '../theme';
import {TouchableHighlight} from 'react-native-gesture-handler';

interface props {
  title: string;
  disabled?: boolean;
  small?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress: () => any;
}

export const Button = ({
  onPress,
  title,
  style,
  small,
  textStyle,
  loading,
  disabled,
}: props) => {
  const disabledButton = loading || disabled;
  let containerStyle = Object.assign({}, styles.container);
  let buttonTextStyle = Object.assign({}, styles.text);
  if (disabledButton) {
    containerStyle.backgroundColor = '#C4C4C4';
  }

  if (small) {
    containerStyle.padding = 6;
    buttonTextStyle.fontSize = 12;
  }

  return (
    <TouchableHighlight
      disabled={loading}
      activeOpacity={disabledButton ? 1 : 0.7}
      style={[containerStyle, style]}
      onPress={() => (disabledButton ? null : onPress())}>
      {loading ? (
        <ActivityIndicator color={'white'} size={12} />
      ) : (
        <Text style={[buttonTextStyle, textStyle]}>{title}</Text>
      )}
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primaryColor,
    borderColor: theme.primaryColor,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    margin: 1,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    paddingHorizontal: 4,
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
  },
  iconStyle: {
    alignItems: 'center',
  },
});

export default Button;
