import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RootState} from '../redux/rootReducer';
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from '../redux/rootActions';
import Button from '@components/Button';

export default function UserScreen() {
  const users = useSelector((state: RootState) => state.user.users);
  const isLoading = useSelector((state: RootState) => state.user.isLoading);
  const usersError = useSelector((state: RootState) => state.user.usersError);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <View style={style.container}>
      <Text>User Screen</Text>
      {users.map((user) => (
        <Text>
          {user.name} {user.email}
        </Text>
      ))}
      <Text>{usersError}</Text>
      <Button
        loading={isLoading}
        title="fetch again"
        onPress={() => dispatch(getUsers())}
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
