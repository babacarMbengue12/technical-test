import React from "react";

import { Modal, View, ActivityIndicator } from "react-native";

import { COLORS, DIMENSIONS } from "../constants/constants";
import { BoldText } from "./Texts";

const { width } = DIMENSIONS;

const Loader = ({ visible, title }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {}}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,.2)",
        }}
      >
        <View
          style={[
            {
              backgroundColor: "#FFF",
              width: width * 0.8,
              height: 140,
              justifyContent: "center",
              borderRadius: 10,
              alignItems: "center",
            },
          ]}
        >
          <ActivityIndicator color={COLORS.app1} size="large" />
          <BoldText
            style={{
              fontSize: 12,
              color: "rgba(0,0,0,.7)",
              marginVertical: 20,
            }}
          >
            {title}
          </BoldText>
        </View>
      </View>
    </Modal>
  );
};

export default Loader;
