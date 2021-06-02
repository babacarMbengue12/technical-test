import React from 'react';
import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {Image} from 'react-native';
import {View} from 'react-native';
import {Card} from 'react-native-elements';
import {COLORS} from '../../constants/constants';
import {BoldText} from '../../shared/Texts';
const {width, height} = Dimensions.get('window');
const User = ({
  route: {
    params: {
      item: {avatar, first_name, last_name, email},
    },
  },
  navigation,
}) => {
  React.useEffect(() => {
    navigation.setOptions({title: `${first_name} ${last_name}`});
  }, []);
  return (
    <View>
      <View style={{width, height: height * 0.3}}>
        <Image
          blurRadius={20}
          resizeMode="cover"
          source={{uri: avatar}}
          style={{
            ...StyleSheet.absoluteFillObject,
          }}
        />
        <Image
          style={{width, height: height * 0.3}}
          resizeMode="contain"
          source={{uri: avatar}}
        />
      </View>
      <View style={{padding: 15}}>
        <Item title={first_name} />
        <Item title={last_name} />
        <Item title={email} />
      </View>
    </View>
  );
};

function Item({title}) {
  return (
    <Card
      containerStyle={{
        padding: 20,
        paddingVertical: 10,
        margin: 0,
        marginVertical: 10,
        backgroundColor: COLORS.app1,
        borderRadius: 15,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <BoldText style={{color: '#FFF', marginLeft: 20}}>{title}</BoldText>
      </View>
    </Card>
  );
}

export default User;
