import React from "react";
import { View, StyleSheet, Platform } from "react-native";

import TitleText from "./TitleText";
import Colors from "../constants/colors";

const Header = ({ title }) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid
        })
      }}
    >
      <TitleText style={styles.title}>{title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center"
  },
  headerIOS: {
    backgroundColor: Colors.white,
    borderBottomColor: Colors.black,
    borderBottomWidth: 1
  },
  headerAndroid: {
    backgroundColor: Colors.primary
  },
  title: {
    color: Platform.OS === "ios" ? Colors.primary : Colors.white
  }
});

export default Header;
