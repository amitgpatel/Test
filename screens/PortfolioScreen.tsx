import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { colors } from "../common";
import CustomTextInput from "../components/CustomTextInput";
import { PrimaryButton } from "../components/PrimaryButton";
import SearchableDropDownCC from "../components/SearchableDropDownCC";
import { View } from "../components/Themed";
import { holdings, users } from "../db";
import { PortfolioParamList } from "../types";

export default function PortfolioScreen({
  navigation,
}: StackScreenProps<PortfolioParamList, "PortfolioScreen">) {
  let filterHolding: Array<{ name: string; id: number }> = Array();
  let filterUser: Array<{ name: string; id: number }> = Array();
  let amount: number;

  const getFormatedHoldings = () => {
    for (var i = 0; i < holdings.length; i++) {
      filterHolding.push({
        id: holdings[i].id,
        name: holdings[i].name,
      });
    }
  };

  const getFormatedUser = () => {
    for (var i = 0; i < users.length; i++) {
      filterUser.push({
        id: users[i].id,
        name: users[i].name,
      });
    }
  };

  useEffect(() => {
    console.log("useEffect");

    getFormatedHoldings();
    getFormatedUser();
  }, []);

  return (
    <View style={styles.container}>
      <SearchableDropDownCC
        items={filterHolding}
        placeHolderValue="Select Currency"
      ></SearchableDropDownCC>
      <CustomTextInput
        cStyles={{ marginTop: 10 }}
        value={amount}
        changeText={(value) => (amount = value)}
        placeholder={"Enter Amount"}
        keyboardType={"number-pad"}
      ></CustomTextInput>
      <SearchableDropDownCC
        items={filterUser}
        placeHolderValue="Select User"
      ></SearchableDropDownCC>
      <PrimaryButton
        onPress={() => {
          if (amount == 0) {
            alert("Please Enter Amount");
          } else {
            navigation.navigate("SuccessScreen");
            amount = 0;
          }
        }}
        title={"Submit"}
      ></PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    justifyContent: "center",
    overflow: "hidden",
  },
  inputDropDownContainer: {
    borderWidth: 1,
    justifyContent: "center",
    borderColor: "#CACACA",
    borderRadius: 5,
    height: 50,
    paddingHorizontal: 8,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
