import React from "react";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";

const DropDown = (props: any) => {
  const { style, value, data } = props;

  return (
    <View style={[styles.inputDropDownContainer, style]}>
      <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        items={data}
        style={{
          iconContainer: {
            right: 5,
          },
          inputAndroidContainer: { height: 50 },
        }}
        // placeholder={"Bitcont"}
        Icon={() => {
          return (
            <Ionicons name="chevron-down-sharp" size={24} color="#F28820" />
          );
        }}
      />
    </View>
  );
};

export default DropDown;
const styles = StyleSheet.create({
  inputDropDownContainer: {
    borderWidth: 1,
    justifyContent: "center",
    borderColor: "#CACACA",
    borderRadius: 5,
    height: 50,
    paddingHorizontal: 8,
    marginTop: 10,
  },
});
