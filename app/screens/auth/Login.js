import React from 'react';
import {KeyboardAvoidingView, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS} from '../../constants/constants';
import AppButton from '../../shared/AppButton';
import Input from '../../shared/Input';
import {BoldText, NormalText} from '../../shared/Texts';
import {useFormData, userFormValidation} from './Form';
import {Platform} from 'react-native';
import {connect} from 'react-redux';
import {clear_login_Action, loginAction} from '../../redux/auth/actions';
import MessageModal from '../../shared/MessageModal';
import {useIsFocused} from '@react-navigation/core';
const Login = ({loginAction, auth, navigation, clear_login_Action}) => {
  const isFocused = useIsFocused();
  const [data, onChange] = useFormData({
    email: '',
    password: '',
  });

  const [errors, validate] = userFormValidation({}, Yup => ({
    password: Yup.string().required().label('Mot de passe'),
    email: Yup.string().email().required().label('Identifiant'),
  }));
  const onSubmit = React.useCallback(async () => {
    validate(data)
      .then(async () => {
        const userData = {
          email: data.email,
          password: data.password,
        };
        loginAction(userData);
      })
      .catch(ex => {});
  });
  React.useEffect(() => {
    if (isFocused) {
      if (auth.data) {
        navigation.replace('Dashboard');
      }
    } else {
      if (auth.error) {
        clear_login_Action();
      }
    }
  }, [isFocused, auth]);
  return (
    <KeyboardAvoidingView
      keyboardShouldPersistTaps="handled"
      style={{
        backgroundColor: COLORS.app2,
        flex: 1,
        paddingHorizontal: 15,
        justifyContent: 'center',
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      showsVerticalScrollIndicator={false}
      bounces={false}>
      <MessageModal error={true} visible={auth.error} message={auth.message} />
      <NormalText
        style={{
          fontSize: 22,
          fontWeight: '600',
          letterSpacing: 1,
          textAlign: 'center',
          marginTop: 20,
          fontFamily: 'Mulish-Bold',
        }}>
        Connectez-vous
      </NormalText>
      <View style={{marginTop: 50}}>
        <Input
          error={errors.email}
          label="Identifiant"
          keyboardType="email-address"
          autoCompleteType="email"
          autoCapitalize="none"
          leftIcon={{name: 'email', color: '#A8A8A8', size: 18}}
          value={data.email}
          onChange={value => {
            onChange('email', value);
          }}
        />
        <View style={{marginTop: 10}}>
          <Input
            error={errors.password}
            label="Mot de passe"
            secureTextEntry={true}
            leftIcon={{name: 'lock', color: '#A8A8A8', size: 18}}
            enableShowPassword
            value={data.password}
            onChange={value => {
              onChange('password', value);
            }}
          />
        </View>
        <View style={{marginTop: 51}}>
          <AppButton
            width={'100%'}
            onPress={onSubmit}
            titleColor="#FFF"
            loading={auth.loading}
            disabled={auth.loading}
            title="Se connecter"
            backgroundColor={COLORS.app1}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: 103,
          }}>
          <NormalText
            style={{
              color: '#585858',
              fontFamily: 'Mulish-Light',
              fontSize: 12,
            }}>
            Pas encore de compte ?{' '}
          </NormalText>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <BoldText
              style={{
                color: '#585858',
                fontFamily: 'Mulish-Bold',
                fontSize: 12,
              }}>
              S’inscrire
            </BoldText>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const mapState = ({login}) => ({auth: login});
export default connect(mapState, {loginAction, clear_login_Action})(Login);
