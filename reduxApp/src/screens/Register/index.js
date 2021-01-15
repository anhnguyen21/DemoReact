import React from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LoginActions from '../../redux/LoginRedux/actions';

const Register = () => {
  const dispatch = useDispatch();
  //Gọi giá trị thông qua file js tại được combineReducers
  const loading = useSelector((state) => state.loginReducer.loginLoading);
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [birthDay, setBirthDay] = React.useState('');
  const onChangeFName = (text) => {
    setFirstName(text);
  };

  const onChangeLName = (text) => {
    setLastName(text);
  };

  const onChangeEmail = (text) => {
    setEmail(text);
  };

  const onChangePass = (text) => {
    setPassword(text);
  };

  const onChangePhone = (text) => {
    setPhone(text);
  };

  const onChangeBD = (text) => {
    setBirthDay(text);
  };

  const onChange = () => {
    let data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phone: phone,
      birthDay: birthDay,
    };
    // axios
    //   .post('https://proxibox-pharma-api-staging.enouvo.com/api/v1/auth/register', {
    //     firstName: firstName,
    //     lastName: lastName,
    //     email: email,
    //     password: password,
    //     phone: phone,
    //     birthDay: birthDay,
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    dispatch(LoginActions.userSignUp(data));
    console.log(data);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.btnClose}>x</Text>
        <Text style={styles.textLogin}>ĐĂNG KÝ</Text>
        <Text style={styles.btnClose} />
      </View>
      <View style={styles.row}>
        <Text style={styles.textForm}>Họ*</Text>
        <TextInput style={styles.input} onChangeText={onChangeFName} />
      </View>
      <View style={styles.row}>
        <Text style={styles.textForm}>Tên*</Text>
        <TextInput style={styles.input} onChangeText={onChangeLName} />
      </View>
      <View style={styles.row}>
        <Text style={styles.textForm}>Email*</Text>
        <TextInput style={styles.input} onChangeText={onChangeEmail} />
      </View>
      <View style={styles.row}>
        <Text style={styles.textForm}>PassWord</Text>
        <TextInput style={styles.input} onChangeText={onChangePass} />
      </View>
      <View style={styles.row}>
        <Text style={styles.textForm}>Điện Thoại*</Text>
        <TextInput style={styles.input} onChangeText={onChangePhone} />
      </View>
      <View style={styles.row}>
        <Text style={styles.textForm}>Ngày sinh nhật*</Text>
        <TextInput style={styles.input} onChangeText={onChangeBD} />
      </View>
      <View style={styles.rowbtn}>
        <TouchableOpacity style={styles.btndangnhap} onPress={() => onChange()}>
          <Text style={styles.textForm}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btndangky}>
          <Text style={styles.textForm}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowRule}>
        <Text style={styles.textRule}>
          Bằng việc xác nhận tài khoản, bạn đồng ý các tài khoản của chúng tôi
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  header: {
    flexDirection: 'row',
  },
  input: {
    width: 350,
    height: 40,
    borderColor: '#848484',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 5,
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
    paddingBottom: 15,
    borderRadius: 10,
  },
  btndangky: {
    borderColor: '#01DFD7',
    backgroundColor: '#01DFD7',
    borderWidth: 2,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
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
    fontSize: 16,
    opacity: 0.5,
    textAlign: 'center',
  },
  textForm: {
    marginTop: 15,
    color: '#000',
  },
});

export default Register;
