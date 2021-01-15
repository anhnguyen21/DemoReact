import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavigationUtils from '../../navigation/Utils';

const onLogOut = () =>{
  NavigationUtils.startLoginContent();
};

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Wellcome</Text>
      <TouchableOpacity onPress={onLogOut}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
