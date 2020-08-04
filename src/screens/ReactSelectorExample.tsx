import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'components';
import {getUsers, updateRandom} from 'redux/rootActions';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/rootReducer';

export default function ReactSelectorExample() {
  const dispatch = useDispatch();

  const isLoading = useSelector((state: RootState) => state.user.isLoading);
  const users = useSelector((state: RootState) => state.user.users);
  const randomNumber = useSelector(
    (state: RootState) => state.user.randomNumber,
  );

  React.useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  console.log('rendered.............', randomNumber);
  return (
    <View style={styles.container}>
      <Text>{!isLoading ? 'React Selector Example' : 'loading'}</Text>

      {users.map((user) => (
        <Text key={user.name} style={styles.card}>
          {user.name} {user.email}
          {user.company?.name}
        </Text>
      ))}
      <Button title="Fetch" onPress={() => dispatch(getUsers())} />
      <Button
        title="Update State in User"
        onPress={() => dispatch(updateRandom(Math.random()))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    padding: 10,
  },
});
