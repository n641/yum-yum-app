import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from 'react';
import Stuff from "./component/Stuff";
import { Ionicons } from "@expo/vector-icons";


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const About = ({ navigation}) => {
  return (
    // <View>
      <ScrollView>
      <View
        style={{
          backgroundColor: "black",
          opacity: 2,
          width: width,
          height: height / 2,
        }}
      >
        <Image
          style={{
            width: width,
            height: height / 2,
            position: "relative",
            //opacity: 0.9,
            resizeMode: "cover",
            flexDirection: "row",
          }}
          source={require("../../assets/about2.jpg")}
        />
      </View>
      <View
        style={{
          position: "absolute",
          left: width / 3,
          top: height / 16,
          backgroundColor: "black",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 30,
            textAlign: "center",
            padding: 5,
          }}
        >
          Yum Yum Resturant
        </Text>
      </View>
      
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: width,
            marginVertical: 10,
            // height: height / 2,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "red",
              justifyContent: "space-between",
              alignItems: "center",
              height: height / 4,
              width: width - 100,
              borderRadius: 10,
            }}
          >
            <View>
              <Image
                style={{
                  width: width / 6,
                  height: height / 10,
                  position: "relative",
                  //opacity: 0.9,
                  resizeMode: "contain",
                  flexDirection: "row",
                }}
                source={require("../../assets/open.png")}
              />
            </View>
            <View>
              <View>
                <Text style={{ fontSize: width / 35, color: "white" }}>
                  Your order confirmend in real time
                </Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 5,
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "white",
                    width: width / 8,
                    alignItems: "center",
                    justifyContent: "center",
                    height: height / 16,
                    borderRadius: 10,
                    marginTop: 20,
                  }}
                  onPress={() => {
                    navigation.navigate("Category");
                  }}
                >
                  <Text
                    style={{
                      color: "red",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    See Menu
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ width: width / 6, height: height / 8 }}>
              <Ionicons
                name="return-down-back-outline"
                size={width/6}
                color={"white"}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View>
              <Text
                style={{
                  color: "red",
                  fontSize: width / 20,
                  fontWeight: "bold",
                  paddingVertical: 5,
                }}
              >
                About Us
              </Text>
            </View>
            <View style={{ width: width - 100 }}>
              <Text style={{ color: "gray", textAlign: "start", padding: 10 }}>
                Connie's Cookies Kansas City is a locally and family owned
                business that was founded in 2006. We're dedicated to creating
                wonderful sweet surprises that you'll absolutely love. When you
                visit our shop, you won't believe your eyes with the incredible
                range of options that are available with us. We specialize in
                cut-out sugar cookies with more than 180 different shapes!
                They're the softest melt-in-your-mouth cookies you'll ever
                experience, with an unforgettable taste. Our cookies are our
                passion. Without wonderful customers like you, our bakery would
                never survive. That's why we're sure to say "thank you" to
                everyone who gives us their business and support. We're
                extremely thankful for our loyal customers and their love never
                falls short. Visit Connie's Cookies Kansas City where you'll
                always be treated like family. Warm smiles and welcome greetings
                are our number one guarantee. Carryout and delivery options are
                available. Our cookies taste as good as they look!
              </Text>
            </View>
            <View
              style={{
                width: width / 3,
                height: height / 8,
                backgroundColor: "red",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <View style={{}}>
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: width / 30,
                  }}
                >
                  Opening hours
                </Text>
              </View>

              <View>
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: width / 45,
                    borderRadius: 10,
                  }}
                >
                  sunday - thursday
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: width / 40,
                    borderRadius: 10,
                  }}
                >
                  12AM - 12PM
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{}}>
            <Stuff />

        </View>
      </ScrollView>
    // </View>
  );
}

export default About

const styles = StyleSheet.create({})