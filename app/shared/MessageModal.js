import React from 'react';

import {Modal, View} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';

import {COLORS, DIMENSIONS} from '../constants/constants';
import {OppButton} from './AppButton';
import {BoldText} from './Texts';

const {width} = DIMENSIONS;

const MessageModal = ({visible, message, error = false}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  React.useEffect(() => {
    setIsVisible(visible);
  }, [visible]);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={!!isVisible}
      onRequestClose={() => {
        setIsVisible(false);
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,.2)',
        }}>
        <View
          style={[
            {
              backgroundColor: '#FFF',
              width: width * 0.8,
              height: 140,
              justifyContent: 'center',
              borderRadius: 10,
              alignItems: 'center',
            },
          ]}>
          <Icon
            name={error ? 'error' : 'checkcircle'}
            type={error ? 'material' : 'antdesign'}
            size={24}
            color={error ? COLORS.red : COLORS.green}
          />
          <BoldText
            style={{
              fontSize: 12,
              color: 'rgba(0,0,0,.7)',
              marginVertical: 20,
            }}>
            {message}
          </BoldText>

          <OppButton
            backgroundColor={COLORS.app1}
            titleColor="#FFF"
            small
            title="Fermer"
            onPress={() => setIsVisible(false)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default MessageModal;
