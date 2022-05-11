import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

import style from "../../../Constants/style";

const StuffCart = ({
  name,
  url,
  rate,
  rule,
  navigation,
}) => {
  return (
    <View style={{ margin: 8, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          borderRadius: style.border,
          height: height / 2 - 60,
          borderWidth: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: width / 2 - 16,
        }}
      >
        <Image
          style={{
            width: width / 2 - 18,
            height: height / 4,
            borderRadius: style.border,
            resizeMode:"cover"
          }}
          source={{
            uri: `${url}`,
          }}
        />

        <View
          style={{
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
            width: width / 2,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: style.fourth,
              }}
            >
              {name}
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: style.fourth,
              }}
            >
              {rule}
            </Text>
          </View>
          <View>
              <Text style={{}}>
                  {rate}
              </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StuffCart;

const styles = StyleSheet.create({});
