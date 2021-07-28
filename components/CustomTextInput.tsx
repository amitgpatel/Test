import React, { useState } from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { colors, Fonts } from "../common";

const CustomTextInput = (props: any) => {
  const {
    cStyles,
    hint = "",
    height = 50,
    width = "100%",
    pLeft = 12,
    ispasswordtextbox = false,
    mTop = 5,
    borderRadius = 5,
    borderColor = colors.light_gray,
    borderWidth = 1,
    size = 14,
    color = colors.light_gray,
    maxlength = 100,
    fontFamily = Fonts.Helvetica,
    placeholderTextColor = colors.light_gray,
    placeholder = "",
    multiline = false,
    isClickEvent = false,
    onPress,
    title = "Change",
    isBorder = true,
    value,
    changeText,
    keyboardType,
  } = props;
  const defaultStyles = {
    height: height,
    width: width,
    paddingLeft: pLeft,
    marginTop: mTop,
    borderRadius: borderRadius,
    borderColor: borderColor,
    borderWidth: isBorder ? borderWidth : 0,
    fontSize: size,
    fontFamily: fontFamily,
    fontWeight: "400",
    color: color,
  };

  const defaultClickViewStyle = {
    height: height,
    width: width,
    paddingLeft: pLeft,
    marginTop: mTop,
    borderRadius: borderRadius,
    borderColor: borderColor,
    borderWidth: borderWidth,
    fontSize: size,
    fontFamily: fontFamily,
    fontWeight: "400",
    color: color,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  };

  return (
    <View>
      {isClickEvent ? (
        <View style={[defaultClickViewStyle, cStyles]}>
          <TextInput
            style={{ textAlignVertical: "center", flex: 1 }}
            multiline={multiline}
            maxLength={maxlength}
            secureTextEntry={ispasswordtextbox}
            placeholder={placeholder}
            value={value}
            placeholderTextColor={placeholderTextColor}
            onChangeText={changeText}
            keyboardType={keyboardType}
          >
            {props.children}
          </TextInput>

          <TouchableOpacity
            style={{ alignItems: "center", paddingHorizontal: 15 }}
            onPress={onPress}
          >
            <Text
              style={{
                color: colors.PrimaryColor,
                fontSize: 14,
                fontFamily: Fonts.Helvetica,
                fontWeight: "700",
              }}
            >
              {title}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TextInput
          style={[defaultStyles, cStyles]}
          multiline={multiline}
          maxLength={maxlength}
          secureTextEntry={ispasswordtextbox}
          placeholder={placeholder}
          value={value}
          placeholderTextColor={placeholderTextColor}
          onChangeText={changeText}
          keyboardType={keyboardType}
        >
          {props.children}
        </TextInput>
      )}
    </View>
  );
};

export default CustomTextInput;
