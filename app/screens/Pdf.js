import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';

import PdfViwer from 'react-native-pdf';
const Pdf = () => {
  const source = {
    uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
    cache: true,
  };
  return (
    <View style={styles.container}>
      <PdfViwer source={source} style={styles.pdf} />
    </View>
  );
};

export default Pdf;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
