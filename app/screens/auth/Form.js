import React from 'react';
import {NormalText} from '../../shared/Texts';
import * as yup from 'yup';
import {Alert, View} from 'react-native';

import Loader from '../../shared/Loader';

export function FormError({error}) {
  return (
    <View style={{marginVertical: 5}}>
      <NormalText style={{color: '#A00'}}>{error}</NormalText>
    </View>
  );
}

export const useFormData = formData => {
  const [data, setData] = React.useState(formData);
  const onDataChange = React.useCallback((fieldName, value) => {
    if (typeof fieldName === 'object') {
      setData({...data, ...fieldName});
      return;
    }
    if (fieldName === null) {
      setData(value);
      return;
    }
    let keys = Object.keys(data);
    if (keys.includes(fieldName)) {
      let newdata = {...data};
      newdata[fieldName] = value;
      setData(newdata);
    } else {
      throw new Error(fieldName + ' is not a valid key');
    }
  });
  return [data, onDataChange];
};

export const userFormValidation = (initalErrors, cbRules) => {
  const [errors, setErrors] = React.useState(initalErrors);
  const Schema = yup.object().shape(cbRules(yup));
  const validate = React.useCallback(data => {
    return new Promise((resolve, reject) => {
      Schema.validate(data, {abortEarly: false})
        .then(() => {
          setErrors({});
          resolve(data);
        })
        .catch(function (err) {
          let newErrors = {};
          for (let e of err.inner) {
            newErrors[e.path] = e.errors[0];
          }
          setErrors(newErrors);
          reject(newErrors);
        });
    });
  });
  return [errors, validate, setErrors];
};

export function useLoading(initialLoadingValue, initialMessage) {
  const [data, setData] = React.useState({
    loading: initialLoadingValue,
    message: initialMessage,
  });

  const onChange = React.useCallback((loadingValue, messageValue) => {
    setData({loading: loadingValue, message: messageValue || data.message});
  });

  const render = React.useCallback(() => {
    return <Loader visible={data.loading} title={data.message} />;
  });

  return [render, onChange, data.loading, data.message];
}

export function prompt(title) {
  return new Promise(resolve => {
    Alert.alert(
      '',
      title,
      [
        {text: 'OUI', onPress: () => resolve(true)},
        {text: 'NON', onPress: () => resolve(false), style: 'cancel'},
      ],
      {cancelable: false},
    );
  });
}
