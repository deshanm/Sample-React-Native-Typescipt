import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'components';
import {getUsers} from 'redux/rootActions';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/rootReducer';

export default function TodoScreen() {
  const dispatch = useDispatch();

  const isLoading = useSelector((state: RootState) => state.user.isLoading);
  const users = useSelector((state: RootState) => state.user.users);

  React.useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text>{!isLoading ? 'Todo Screen' : 'loading'}</Text>

      {users.map((user) => (
        <Text style={styles.card}>
          {user.name} {user.email}
          {user.company?.name}
        </Text>
      ))}
      <Button title="Fetch" onPress={() => dispatch(getUsers())} />
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
