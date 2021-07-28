import React from "react";
import { StyleSheet, Text } from "react-native";
import { colors, Fonts } from "../common";
import { View } from "../components/Themed";

export default function SuccessScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {"Confratulation.\nAmount sent successfully"}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "400",
    fontFamily: Fonts.Helvetica,
    textAlign: "center",
    color: colors.PrimaryColor,
  },
});
