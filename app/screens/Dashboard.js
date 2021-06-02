import React from 'react';
import {TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native';
import {View} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import {COLORS} from '../constants/constants';
import Header from '../shared/header';
import {BoldText} from '../shared/Texts';

const Dashboard = ({navigation}) => {
  const items = [
    {
      title: 'Users',
      icon: {name: 'group', type: 'font-awesome'},
      route: 'Users',
    },
    {
      title: 'Resources',
      icon: {name: 'database', type: 'antdesign'},
      route: 'Resources',
    },
    {
      title: 'PDF',
      icon: {name: 'file-pdf-o', type: 'font-awesome'},
      route: 'Pdf',
    },
    {
      title: 'Redux',
      icon: {name: 'redux', type: 'fontisto'},
      route: 'Redux',
    },
    {
      title: 'Create',
      icon: {name: 'pluscircleo', type: 'antdesign'},
      route: 'Create',
    },
  ];
  return (
    <View style={{flex: 1}}>
      <Header title="Dashboard" isDrawer />
      <FlatList
        contentContainerStyle={{paddingHorizontal: 15, paddingVertical: 10}}
        data={items}
        keyExtractor={item => item.title}
        renderItem={({item}) => {
          return (
            <Item
              {...item}
              onPress={() => {
                navigation.navigate(item.route);
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default Dashboard;

function Item({title, icon, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card
        containerStyle={{
          padding: 20,
          margin: 0,
          marginVertical: 10,
          backgroundColor: COLORS.app1,
          borderRadius: 15,
        }}>
        <Icon {...icon} size={40} color="#FFF" />
        <BoldText style={{color: '#FFF', textAlign: 'center', marginTop: 20}}>
          {title}
        </BoldText>
      </Card>
    </TouchableOpacity>
  );
}
