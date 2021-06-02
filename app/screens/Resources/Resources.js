import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {Avatar, Card} from 'react-native-elements';
import {connect} from 'react-redux';
import {COLORS} from '../../constants/constants';
import {getResourcesAction} from '../../redux/resources/actions';
import FdbFlatList from '../../shared/FdbFlatlist';
import {BoldText, NormalText} from '../../shared/Texts';

const Resources = ({
  resources: {data, loading, error, message},
  getResourcesAction,
  navigation,
}) => {
  React.useEffect(() => {
    if (!data?.length) {
      getResourcesAction();
    }
  }, []);
  return (
    <View style={{flex: 1}}>
      <FdbFlatList
        getData={getResourcesAction}
        contentContainerStyle={{paddingHorizontal: 15}}
        data={data}
        error={message}
        isError={error}
        isLoading={loading}
        renderItem={({item}) => (
          <Item
            onPress={() => {
              navigation.navigate('Resource', {item});
            }}
            {...item}
          />
        )}
      />
    </View>
  );
};

const mapState = ({resources}) => ({resources});
export default connect(mapState, {getResourcesAction})(Resources);

function Item({name, color, onPress}) {
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <BoldText style={{color: '#FFF', marginLeft: 20}}>{name}</BoldText>
          <View style={{width: 80, height: 35, backgroundColor: color}} />
        </View>
      </Card>
    </TouchableOpacity>
  );
}
