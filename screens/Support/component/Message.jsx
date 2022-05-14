import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Messages = ({ msg, loginuser, usermsg, time, type }) => {
  return (
    <View>
      {type === "send" ? (
        <View style={styles.containerx}>
          <Text style={{ fontSize: 12, textAlign: "center", color: "white" }}>
            {usermsg}
          </Text>

          <Text style={styles.msgx}>{msg}</Text>
          <Text
            style={{
              fontSize: 12,
              textAlign: "end",
              color: "white",
              paddingRight: 10,
            }}
          >
            {time}
          </Text>
        </View>
      ) : (
        <View style={styles.containery}>
          <Text style={{ fontSize: 12, textAlign: "center", color: "white" }}>
            {usermsg}
          </Text>

          <Text style={styles.msgy}>{msg}</Text>
          <Text
            style={{
              fontSize: 12,
              textAlign: "end",
              color: "white",
              paddingRight: 10,
            }}
          >
            {time}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  msgx: {
    fontSize: 18,
    marginLeft: 20,
    maxWidth: 200,
    paddingLeft: 5,
    paddingBottom: 5,
    textTransform: "capitalize",
    color: "white",
    fontWeight: "500",
  },
  msgy: {
    fontSize: 18,
    marginLeft: 20,
    paddingLeft: 5,
    paddingBottom: 15,
    maxWidth: 200,
    textTransform: "capitalize",
    color: "white",
    fontWeight: "500",
  },

  containerx: {
    backgroundColor: "red",
    borderRadius: 10,
    minWidth: 150,
    minHeight: 50,
    justifyContent: "center",
  },
  containery: {
    backgroundColor: "#2c3338",
    borderRadius: 10,
    minWidth: 150,
    minHeight: 50,
    justifyContent: "center",
  },
});
