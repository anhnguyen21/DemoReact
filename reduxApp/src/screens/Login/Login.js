import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import RowInput from './RowInput';
import { useDispatch, useSelector } from 'react-redux';
import LoginActions from '../../redux/LoginRedux/actions';
import NavigationUtils from '../../navigation/Utils';

const Login = (props) => {
  const [pass, setPass] = React.useState('');
  const [user, setUser] = React.useState('');
  const [checkName, setCheckName] = React.useState(false);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.login.loadingLogin);
  const onPassWord = (text) => {
    setCheckName(false);
    setPass(text);
  };

  const onUser = (text) => {
    setUser(text);
  };

  const onChange = () => {
    console.log(loading);
    if (pass.length < 6) {
      setCheckName(true);
    }
    let data = {
      email: user,
      password: pass,
    };

    dispatch(LoginActions.userLogin(data));
  };

  const LoginToSignUP = () => {
    NavigationUtils.startSignUpContent();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.btnClose}>x</Text>
        <Text style={styles.textLogin}>Login</Text>
        <Text style={styles.btnClose} />
      </View>
      <RowInput text={'Tên người dùng *'} check={true} onUser={onUser} />
      <RowInput text={'Mật khẩu*'} check={false} value={pass} onPassWord={onPassWord} />
      {checkName && <Text style={styles.textForm}>Mật khẩu chỉ có 5 kí tự</Text>}
      {loading && <ActivityIndicator size="large" color="#01DFD7" />}
      <View style={styles.rowbtn}>
        <TouchableOpacity style={styles.btndangnhap} onPress={() => onChange()}>
          <Text style={styles.textForm}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btndangky} onPress={() => LoginToSignUP()}>
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

export default Login;
