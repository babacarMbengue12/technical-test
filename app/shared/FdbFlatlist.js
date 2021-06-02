import React from 'react';
import {RefreshControl} from 'react-native';
import {FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';

function Error({getData, error}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
      }}>
      <Text>erreur lors du chargement des données : {error}</Text>
      <TouchableOpacity onPress={getData} style={{marginTop: 40}}>
        <Text>réessayer</Text>
      </TouchableOpacity>
    </View>
  );
}

function Empty() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
      }}>
      <Text>pas de données</Text>
    </View>
  );
}

export default function FdbFlatList({
  getData,
  isLoading,
  isError,
  data,
  error,
  contentContainerStyle,
  ...rest
}) {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        ListEmptyComponent={
          isLoading ? null : isError ? (
            <Error getData={getData} error={error} />
          ) : (
            <Empty />
          )
        }
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={getData}
            colors={['#000', '#F00']}
          />
        }
        keyExtractor={(_, index) => String(index)}
        {...rest}
        contentContainerStyle={contentContainerStyle}
        ListFooterComponent={<View style={{height: 50}} />}
      />
    </View>
  );
}
