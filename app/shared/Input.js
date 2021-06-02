import React from 'react';
import {View} from 'react-native';
import {Input as ReactInput} from 'react-native-elements';
import {FormError} from '../screens/auth/Form';
const Input = ({
  value,
  onChange,
  label,
  error,
  secureTextEntry,
  inputStyle,
  inputContainerStyle,
  editable = true,
  editableBackgoundColor = '#EEE',
  enableShowPassword,
  rightIcon,
  ...options
}) => {
  const [ste, setSte] = React.useState(secureTextEntry);
  const getRightIcon = React.useCallback(() => {
    if (rightIcon) return rightIcon;
    if (enableShowPassword) {
      if (ste) {
        return {
          name: 'eye',
          type: 'entypo',
          size: 20,
          color: '#9D9D9D',
          onPress: () => setSte(!ste),
        };
      }
      return {
        name: 'eye-with-line',
        type: 'entypo',
        size: 20,
        color: '#9D9D9D',
        onPress: () => setSte(!ste),
      };
    }
    return {};
  }, [ste]);
  return (
    <View style={{marginVertical: 5}}>
      <ReactInput
        inputStyle={{
          fontWeight: '300',
          fontSize: 14,
          fontFamily: 'Mulish-Light',
          color: '#5A5A5A',
          ...inputStyle,
        }}
        containerStyle={{
          paddingStart: 0,
          paddingEnd: 0,
          paddingBottom: 0,
          marginStart: 0,
          marginEnd: 0,
          height: inputContainerStyle?.minHeight || 57,
        }}
        inputContainerStyle={{
          paddingHorizontal: 20,
          backgroundColor: editable ? '#FFF' : editableBackgoundColor,
          borderRadius: 10,
          minHeight: 57,
          borderWidth: 1,
          borderColor: '#F1F1F1',
          ...inputContainerStyle,
        }}
        onChangeText={onChange}
        leftIconContainerStyle={{marginRight: 13}}
        placeholder={label}
        errorStyle={{color: '#A00'}}
        value={value}
        rightIcon={getRightIcon()}
        placeholderTextColor={'#666'}
        secureTextEntry={ste}
        editable={editable}
        {...options}
      />
      {!!error && <FormError {...{error}} />}
    </View>
  );
};

export default Input;
