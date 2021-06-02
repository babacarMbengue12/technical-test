import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {Avatar, Card} from 'react-native-elements';
import {connect} from 'react-redux';
import {COLORS} from '../../constants/constants';
import {getUsersAction} from '../../redux/users/actions';
import FdbFlatList from '../../shared/FdbFlatlist';
import {BoldText} from '../../shared/Texts';
const Users = ({
  users: {data, loading, error, message},
  getUsersAction,
  navigation,
}) => {
  React.useEffect(() => {
    if (!data?.length) {
      getUsersAction();
    }
  }, []);
  return (
    <View style={{flex: 1}}>
      <FdbFlatList
        getData={getUsersAction}
        contentContainerStyle={{paddingHorizontal: 15}}
        data={data}
        error={message}
        isError={error}
        isLoading={loading}
        renderItem={({item}) => (
          <Item
            onPress={() => {
              navigation.navigate('User', {item});
            }}
            {...item}
          />
        )}
      />
    </View>
  );
};

const mapState = ({users}) => ({users});
export default connect(mapState, {getUsersAction})(Users);

function Item({avatar, first_name, last_name, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
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
          <Avatar source={{uri: avatar}} rounded size="medium" />
          <View style={{flex: 1}}>
            <BoldText style={{color: '#FFF', marginLeft: 20}}>
              {first_name} {last_name}
            </BoldText>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
}
