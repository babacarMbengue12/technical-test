import React from 'react';
import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {Image} from 'react-native';
import {View} from 'react-native';
import {Card} from 'react-native-elements';
import {COLORS} from '../../constants/constants';
import {BoldText} from '../../shared/Texts';
const {width, height} = Dimensions.get('window');
const Resource = ({
  route: {
    params: {
      item: {name, color, year, pantone_value},
    },
  },
  navigation,
}) => {
  React.useEffect(() => {
    navigation.setOptions({title: `${name}`});
  }, []);
  return (
    <View>
      <View style={{width, height: height * 0.3, backgroundColor: color}} />
      <View style={{padding: 15}}>
        <Item title={`Name ${name}`} />
        <Item title={`Year ${name}`} />
        <Item title={`Pantone value ${pantone_value}`} />
        <Item title={`Color ${color}`} />
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

export default Resource;
