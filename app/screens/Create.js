import React from 'react';
import {KeyboardAvoidingView, View} from 'react-native';
import {COLORS} from '../constants/constants';
import AppButton from '../shared/AppButton';
import Input from '../shared/Input';
import {useFormData, userFormValidation} from './auth/Form';
import {Platform} from 'react-native';
import {connect} from 'react-redux';
import {createAction} from '../redux/auth/actions';
import MessageModal from '../shared/MessageModal';
const Create = ({createAction, auth}) => {
  const [data, onChange] = useFormData({
    name: '',
    job: '',
  });

  const [errors, validate] = userFormValidation({}, Yup => ({
    name: Yup.string().required().label('Name'),
    job: Yup.string().required().label('Job'),
  }));
  const onSubmit = React.useCallback(async () => {
    validate(data)
      .then(async () => {
        createAction(data);
      })
      .catch(ex => {});
  });
  React.useEffect(() => {
    if (auth.data) {
      onChange({
        job: '',
        name: '',
      });
    }
  }, [auth]);
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
      <MessageModal
        error={!auth.success}
        visible={auth.error || auth.success}
        message={auth.message}
      />
      <Input
        error={errors.job}
        label="Job"
        value={data.job}
        onChange={value => {
          onChange('job', value);
        }}
      />

      <View style={{marginTop: 10}}>
        <Input
          error={errors.name}
          label="Name"
          value={data.name}
          onChange={value => {
            onChange('name', value);
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
          title="Submit"
          backgroundColor={COLORS.app1}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const mapState = ({create}) => ({auth: create});
export default connect(mapState, {createAction})(Create);
