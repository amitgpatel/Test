import React from "react";
import { Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors, Fonts } from "../common";

export function PrimaryButton(props) {
  const {
    buttonStyle,
    textStyle,
    buttonWidth = "100%",
    buttonHeight = 50,
    buttonBackgroundColor = colors.PrimaryColor,
    buttonJustifyContent = "center",
    buttonBorderRadius = 5,
    buttonMarginTop = 20,
    title,
    iSource,
    showIcon = iSource,

    onPress,
  } = props;

  return (
    <TouchableOpacity
      style={[
        {
          width: buttonWidth,
          height: buttonHeight,
          backgroundColor: buttonBackgroundColor,
          borderRadius: buttonBorderRadius,
          justifyContent: buttonJustifyContent,
          marginTop: buttonMarginTop,
          flexDirection: "row",
          alignItems: "center",
        },
        buttonStyle,
      ]}
      onPress={onPress}
    >
      {showIcon && (
        <Image
          style={{
            height: 15,
            width: 15,
            resizeMode: "contain",
            marginHorizontal: 8,
          }}
          source={iSource}
        />
      )}

      <Text
        style={[
          {
            color: colors.white,
            fontSize: 14,
            textAlign: "center",
            fontWeight: "700",
            fontFamily: Fonts.Helvetica,
          },
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
