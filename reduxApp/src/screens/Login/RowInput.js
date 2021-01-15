import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import visibility from '../../assets/Images/visibility.png';
import witness from '../../assets/Images/witness.png';

const RowInput = (props) => {
  const [isChange, setChange] = React.useState(true);
  return props.check ? (
    <View style={styles.row}>
      <Text style={styles.textForm}>{props.text}</Text>
      <TextInput style={styles.input} value={props.name} onChangeText={props.onUser} />
    </View>
  ) : (
    <View style={styles.row}>
      <Text style={styles.textForm}>{props.text}</Text>
      <TextInput style={styles.input} secureTextEntry={isChange} onChangeText={props.onPassWord} />
      <TouchableOpacity style={styles.btnIcon} onPress={() => setChange(!isChange)}>
        {isChange ? (
          <Image style={styles.imageIcon} source={witness} />
        ) : (
          <Image style={styles.imageIcon} source={visibility} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  header: {
    flexDirection: 'row',
  },
  btnClose: {
    color: '#000',
    marginLeft: 10,
    fontSize: 30,
    justifyContent: 'center',
  },
  textLogin: {
    flex: 1,
    fontSize: 30,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'column',
    height: 90,
    marginBottom: 20,
  },
  textForm: {
    marginTop: 20,
    color: '#000',
  },
  input: {
    width: 350,
    height: 50,
    borderColor: '#848484',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 5,
  },
  rowbtn: {
    margin: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0,
  },
  btndangnhap: {
    borderColor: '#01DFD7',
    borderWidth: 2,
    marginRight: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    borderRadius: 10,
  },
  btndangky: {
    borderColor: '#01DFD7',
    backgroundColor: '#01DFD7',
    borderWidth: 2,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    borderRadius: 10,
  },
  rowRule: {
    flexDirection: 'column',
    height: 90,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
  textRule: {
    color: '#000',
    fontSize: 18,
  },
  btnIcon: {
    color: '#000',
    fontSize: 30,
    marginTop: -35,
    flexDirection: 'row-reverse',
    marginRight: 270,
    // marginLeft: 200,
    zIndex: 100,
    width: 50,
  },
});

export default RowInput;
