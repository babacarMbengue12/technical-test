import React from 'react';
import {FlatList} from 'react-native';
import {View} from 'react-native';
import {Card} from 'react-native-elements/dist/card/Card';
import {connect} from 'react-redux';
import {COLORS} from '../constants/constants';
import {BoldText} from '../shared/Texts';

const Redux = ({login, users, resources}) => {
  const items = [
    {
      title: 'Token',
      count: login.data?.token || 'null',
    },
    {
      title: 'Users',
      count: users.data?.length || '0',
    },
    {
      title: 'Resources',
      count: resources.data?.length || '0',
    },
  ];
  return (
    <View style={{flex: 1}}>
      <FlatList
        contentContainerStyle={{paddingHorizontal: 15, paddingVertical: 10}}
        data={items}
        keyExtractor={item => item.title}
        renderItem={({item}) => {
          return <Item {...item} />;
        }}
      />
    </View>
  );
};

function Item({title, count}) {
  return (
    <Card
      containerStyle={{
        padding: 20,
        margin: 0,
        marginVertical: 10,
        backgroundColor: COLORS.app1,
        borderRadius: 15,
      }}>
      <BoldText style={{color: '#FFF', textAlign: 'center'}}>{title}</BoldText>
      <BoldText
        style={{
          color: '#FFF',
          textAlign: 'center',
          marginTop: 20,
          fontSize: 22,
        }}>
        {count}
      </BoldText>
    </Card>
  );
}

const mapState = ({login, users, resources}) => ({login, users, resources});
export default connect(mapState)(Redux);
