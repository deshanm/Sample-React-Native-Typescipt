import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from '@components/index';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Button
        onPress={() => navigation.navigate('TodoScreen')}
        title="Todo Screen"
      />
      <Button
        onPress={() => navigation.navigate('UserScreen')}
        title="User Screen"
      />
      <Button
        onPress={() => navigation.navigate('UserScreen')}
        title="User Screen"
      />
      <Button
        onPress={() => navigation.navigate('FlatListScreen')}
        title="Flat List Screen"
      />
      <Button
        onPress={() => navigation.navigate('ReactSelectorExample')}
        title="React Selector Example"
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
