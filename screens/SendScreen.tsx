import randomColor from "randomcolor";
import React, { useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  RefreshControl,
  ScrollView,
} from "react-native";
import { PieChart } from "react-native-chart-kit";
import { View } from "../components/Themed";
import { holdings } from "../db";
const wait = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};
const screenWidth = Dimensions.get("window").width;

let filterHolding: Array<{
  name: string;
  value: number;
  color: string;
  legendFontColor: string;
  legendFontSize: number;
}> = Array();
export default function SendScreen() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);
  const getFormatedHoldings = () => {
    for (var i = 0; i < holdings.length; i++) {
      filterHolding.push({
        name: holdings[i].name,
        value: holdings[i].value_usd,
        color: randomColor(),
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
      });
    }
  };
  useEffect(() => {
    getFormatedHoldings();
    onRefresh();
  }, [holdings]);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >

        <PieChart
          data={filterHolding}
          width={screenWidth}
          height={250}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${0.1})`,
            style: {
              borderRadius: 16,
            },
          }}
          accessor="value"
          backgroundColor="transparent"
          paddingLeft="15"
        />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
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
