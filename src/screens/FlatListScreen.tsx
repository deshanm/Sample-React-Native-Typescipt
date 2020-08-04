import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const list = Array.from(Array(100).keys());

// ------------ Option 0

const FlatListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list.map((item, index) => {
          return {
            id: item,
            title: 'title:' + index,
          };
        })}
        renderItem={({item}) => {
          return (
            <View
              style={{
                ...styles.item,
              }}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

// ------------ Option 1
// const FlatListScreen = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={list.map((item, index) => {
//           return {
//             id: item,
//             title: 'title:' + index,
//           };
//         })}
//         renderItem={({item}) => {
//           return (
//             <View
//               style={{
//                 ...styles.item,
//                 height: item.id * 4,
//               }}>
//               <Text style={styles.title}>{item.title}</Text>
//             </View>
//           );
//         }}
//         keyExtractor={(item) => item.id}
//       />
//     </SafeAreaView>
//   );
// };

// ------------ Option 2
// const FlatListScreen = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         {list.map((item, index) => {
//           return (
//             <View
//               style={{
//                 ...styles.item,
//               }}>
//               <Text style={styles.title}>{item}</Text>
//             </View>
//           );
//         })}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// ------------ Option 3
// const FlatListScreen = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         {list.map((item, index) => {
//           return (
//             <View
//               style={{
//                 ...styles.item,
//                 height: index * 4,
//               }}>
//               <Text style={styles.title}>{item}</Text>
//             </View>
//           );
//         })}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default FlatListScreen;
