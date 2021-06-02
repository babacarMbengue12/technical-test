import React from 'react';
import {Card, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../constants/constants';
import {TouchableOpacity, View} from 'react-native';
import {BoldText} from './Texts';
const Header = ({
  scene = {descriptor: {options: {}}},
  navigation,
  title,
  isDrawer,
  rightHeaderComponent,
  notificationIcon,
  titleComponent,
}) => {
  if (!navigation) {
    navigation = useNavigation();
  }
  const {options} = scene.descriptor;
  const headerTitle = title || options.title;
  if (options?.headerShown === false) return null;
  return (
    <Card
      containerStyle={{
        margin: 0,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: COLORS.app3,
        borderWidth: 0,
        ...options?.containerStyle,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {!isDrawer && (
            <LeftHeaderIcon
              color={options?.leftIconColor || COLORS.app1}
              navigation={navigation}
            />
          )}
          <View style={{marginLeft: 25}}>
            {!!headerTitle && (
              <BoldText
                style={{
                  color: '#FFF',
                  fontSize: 16,
                  fontWeight: 'bold',
                  opacity: 0.7,
                  lineHeight: 24,
                  fontFamily: 'Mulish-Bold',
                  ...options?.titleStyle,
                }}>
                {headerTitle}
              </BoldText>
            )}
            {!!titleComponent && titleComponent}
          </View>
        </View>
        {rightHeaderComponent}
        {!!!rightHeaderComponent && !notificationIcon && (
          <View style={{width: 28}} />
        )}
      </View>
    </Card>
  );
};

export default Header;

export function LeftHeaderIcon({navigation, color = COLORS.app1}) {
  return (
    <TouchableOpacity
      onPress={() => (navigation.canGoBack() ? navigation.goBack() : null)}>
      <Icon name="chevron-left" type="entypo" size={28} color={color} />
    </TouchableOpacity>
  );
}
