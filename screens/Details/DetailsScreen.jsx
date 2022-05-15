import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React ,{useState ,useEffect} from 'react'
import { Ionicons } from "@expo/vector-icons";

import {auth} from '../../db/config'


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

import style from "../../Constants/style";
import {
  editUser,
  getUsers,
  subscribeUser,
} from "../../db/Auth/usersData/users";
import {
  editProduct,
  getProducts,
  subscribe,
} from "../../db/Auth/usersData/Products";


const DetailsScreen = ({ route,navigation}) => {
    const{name,price,desc,url,discound,offer}=route.params;

     const [pro, setpro] = useState([

  ]);
  const [product, setproduct] = useState([
  ]);

  const [users, setUsers] = useState([]);
     const [user, setUser] = useState([]);
      const [flag1, setflag1] = useState(false);
      const [flag2, setflag2] = useState(false);
      const [flag3, setflag3] = useState(false);
      const [flag4, setflag4] = useState(false);
      const [flag5, setflag5] = useState(false);
      const [flag, setflag] = useState(false);
      const [rate,setrate] = useState(0);

     

      const [card, setcard] = useState(false);


    const[favo,setfavo]= useState(false);

    const getUserss = async () => {
    const arr = await getUsers();
    setUsers(arr);
  };
   
     useEffect(() => {
    getUserss();
  }, []);

  useEffect(() => {
    const unsubscribe = subscribeUser(({ change, snapshot }) => {
     
      if (change.type === "added") {
        getUserss();
      }
      if (change.type === "modified") {
        getUserss();
      }
      if (change.type === "removed") {
        getUserss();
      }
      // }
    });

    return () => {
      unsubscribe();
    };
  }, []);

   const getItems = async () => {
    const arr = await getProducts();
    setpro(arr);
  };
  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    const unsubscribe = subscribe(({ change, snapshot }) => {
     
      if (change.type === "added") {
        getItems();
      }
      if (change.type === "modified") {
        getItems();
      }
      if (change.type === "removed") {
        getItems();
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);



  useEffect(() => {
     if (!users?.length) return;
    const user = users.find((e) => e.email == auth.currentUser.email);
    
    setUser(user);



    user.favourite.map((namefav) =>
      namefav == name ? setfavo(true) : null
    );
  }, [users]);


  useEffect(() => {
    if (!pro?.length) return;

    const product = pro.find((e) => e.productName == name);
       setproduct(product);

 let sum = 0;
 product.rate.map((r) => {

     sum += r.rate
     
 });

sum==0?(setrate(0)):
 setrate((sum / product.rate.length));



  }, [pro,rate,product]);


 useEffect(() => {
   if (!users?.length) return;
   if (!user.oldOrders?.length) return;


   const oldOrders = user.oldOrders;
   const product = oldOrders.find((p) => p == name);

   product ? setflag(true) : null;
 }, [users]);
  

 
  return (
    <View
      style={{
        flexDirection: "column",
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <View>
        <Image
          style={{
            width: width,
            height: height / 2,
            borderBottomRightRadius: width,
            borderBottomLeftRadius: width,
          }}
          source={{
            uri: `${url}`,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            fontSize: 18,
            position: "absolute",
            top: 0,
            left: 0,
            marginHorizontal: 15,
            alignItems: "center",
            justifyContent: "center",
            width: width / 12,
            height: width / 12,
            backgroundColor: style.third,
            borderRadius: width / 2,
          }}
        >
          <Ionicons name="chevron-back" size={40} color={"black"} style={{}} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 20,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            {name}
          </Text>
        </View>
        <View style={{}}>
          <TouchableOpacity
            onPress={() => {
              const user = users.find((e) => e.email == auth.currentUser.email);

              favo
                ? editUser({
                    ...user,
                    favourite: user.favourite.filter((n) => n !== name),
                  }).then(() => setfavo(false))
                : editUser({
                    ...user,
                    favourite: [...user.favourite, name],
                  }).then(() => setfavo(true));
            }}
          >
            <Ionicons
              name={favo ? "heart" : "heart-outline"}
              size={40}
              color={"red"}
              style={{}}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          margin: 20,
          flexDirection: "row",
        }}
      >
        {rate == 5 ? (
          <View style={{ flexDirection: "row" }}>
            <Ionicons name={"star"} size={40} color={"yellow"} />
            <Ionicons name={"star"} size={40} color={"yellow"} />
            <Ionicons name={"star"} size={40} color={"yellow"} />
            <Ionicons name={"star"} size={40} color={"yellow"} />
            <Ionicons name={"star"} size={40} color={"yellow"} />
          </View>
        ) : 4 <= rate&&rate < 5 ? (
          <View style={{ flexDirection: "row" }}>
            <Ionicons name={"star"} size={40} color={"yellow"} />
            <Ionicons name={"star"} size={40} color={"yellow"} />
            <Ionicons name={"star"} size={40} color={"yellow"} />
            <Ionicons name={"star"} size={40} color={"yellow"} />
            <Ionicons name={"star"} size={40} color={"gray"} />
          </View>
        ) : 3 <= rate &&rate< 4 ? (
          <View style={{ flexDirection: "row" }}>
            <Ionicons name={"star"} size={40} color={"yellow"} />
            <Ionicons name={"star"} size={40} color={"yellow"} />
            <Ionicons name={"star"} size={40} color={"yellow"} />
            <Ionicons name={"star"} size={40} color={"gray"} />
            <Ionicons name={"star"} size={40} color={"gray"} />
          </View>
        ) : 2 <= rate&&rate < 3 ? (
          <View style={{ flexDirection: "row" }}>
            <Ionicons name={"star"} size={40} color={"yellow"} />
            <Ionicons name={"star"} size={40} color={"yellow"} />
            <Ionicons name={"star"} size={40} color={"gray"} />
            <Ionicons name={"star"} size={40} color={"gray"} />
            <Ionicons name={"star"} size={40} color={"gray"} />
          </View>
        ) : 1 <= rate &&rate< 2 ? (
          <View style={{ flexDirection: "row" }}>
            <Ionicons name={"star"} size={40} color={"yellow"} />
            <Ionicons name={"star"} size={40} color={"gray"} />
            <Ionicons name={"star"} size={40} color={"gray"} />
            <Ionicons name={"star"} size={40} color={"gray"} />
            <Ionicons name={"star"} size={40} color={"gray"} />
          </View>
        ) : rate == 0 ? (
          <View style={{ flexDirection: "row" }}>
            <Ionicons name={"star"} size={40} color={"gray"} />
            <Ionicons name={"star"} size={40} color={"gray"} />
            <Ionicons name={"star"} size={40} color={"gray"} />
            <Ionicons name={"star"} size={40} color={"gray"} />
            <Ionicons name={"star"} size={40} color={"gray"} />
          </View>
        ) : null}

        <View>
          {offer ? (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text
                  style={{
                    color: "#838787",
                    fontSize: 18,
                    fontWeight: "bold",
                    textDecorationLine: "line-through",
                    marginRight: 5,
                  }}
                >
                  {price + "$"}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "red",
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  {price - discound + "$"}
                </Text>
              </View>
            </View>
          ) : (
            <View>
              <Text
                style={{
                  color: "red",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {price + "$"}
              </Text>
            </View>
          )}
        </View>
      </View>
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Product Detailes
        </Text>
        <Text style={{ fontSize: 16, color: "gray" }}>{desc}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            width: flag ? width / 2 - 20 : width - 20,
            justifyContent: "center",
            marginHorizontal: 10,
            borderRadius: 40,
            justifyContent: "center",
            backgroundColor: style.primary,
            height: height / 10,
          }}
          onPress={() => {
            if (user.cart.length == 0) {
              editUser({
                ...user,
                cart: [...user.cart, name],
              }).then(() => {
                navigation.navigate("Cart");
              });
            } else {
              const cart = user.cart.find((namecart) => namecart == name);
              cart
                ? alert("you have already added this product to your cart")
                : editUser({
                    ...user,
                    cart: [...user.cart, name],
                  }).then(() => {
                    navigation.navigate("Cart");
                  });
            }
          }}
        >
          <Text
            style={{
              color: style.third,
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            add to cart
          </Text>
        </TouchableOpacity>
        {flag ? (
          <TouchableOpacity
            style={{
              width: width / 2 - 20,
              justifyContent: "center",
              marginHorizontal: 10,
              borderRadius: 40,
              justifyContent: "center",
              backgroundColor: style.primary,
              height: height / 10,
            }}
            onPress={() => {
              //navigation.navigate("Review", { name: name });
              setcard(!card);
            }}
          >
            <Text
              style={{
                color: style.third,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Review
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
      {card ? (
        <View
          style={{
            width: width / 2,
            height: height / 4,
            position: "absolute",
            top: height - 200,
            borderRadius: 20,
            left: width / 2,
            backgroundColor: "black",
            marginBottom: 10,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                textAlign: "center",
                color: "red",
                margin: 5,
              }}
            >
              Review
            </Text>

            <View
              style={{
                flexDirection: "row",
                padding: 10,
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Ionicons
                onPress={() => {
                  setflag2(false);
                  setflag3(false);
                  setflag4(false);
                  setflag5(false);
                  setflag1(!flag1);
                }}
                name={"star"}
                size={40}
                color={flag1 ? "yellow" : "gray"}
              />
              <Ionicons
                onPress={() => {
                  setflag4(false);
                  setflag5(false);
                  setflag3(false);
                  setflag1(true);
                  setflag2(!flag2);
                }}
                name={"star"}
                size={40}
                color={flag2 ? "yellow" : "gray"}
              />
              <Ionicons
                onPress={() => {
                  setflag4(false);
                  setflag5(false);
                  setflag1(true);
                  setflag2(true);
                  setflag3(!flag3);
                }}
                name={"star"}
                size={40}
                color={flag3 ? "yellow" : "gray"}
              />
              <Ionicons
                onPress={() => {
                  setflag5(false);

                  setflag1(true);
                  setflag2(true);
                  setflag3(true);
                  setflag4(!flag4);
                }}
                name={"star"}
                size={40}
                color={flag4 ? "yellow" : "gray"}
              />
              <Ionicons
                onPress={() => {
                  setflag1(true);
                  setflag2(true);
                  setflag3(true);
                  setflag4(true);
                  setflag5(!flag5);
                }}
                name={"star"}
                size={40}
                color={flag5 ? "yellow" : "gray"}
              />
            </View>
            <View
              style={{
                width: width / 5,
                height: height / 20,
                borderRadius: 10,
                backgroundColor: "white",
                marginBottom: 5,
                margin: 10,
                position: "absolute",
                left: width / 3 - 40,

                top: height - 470,
              }}
            >
              <Text
                style={{
                  color: "red",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: 15,
                }}
                onPress={() => {
                  const review = user.review.find(
                    (namerev) => namerev.name == name
                  );
                  review
                    ? alert("you have already reviewed this product")
                    : editUser({
                        ...user,
                        review: [
                          ...user.review,
                          {
                            name: name,
                            rate: flag5
                              ? 5
                              : flag4
                              ? 4
                              : flag3
                              ? 3
                              : flag2
                              ? 2
                              : flag1
                              ? 1
                              : 0,
                          },
                        ],
                      })
                        .then(() => {
                          console.log("pro", product);

                          editProduct({
                            ...product,
                            rate: [
                              ...product.rate,
                              {
                                user: user.userName,
                                name: name,
                                rate: flag5
                                  ? 5
                                  : flag4
                                  ? 4
                                  : flag3
                                  ? 3
                                  : flag2
                                  ? 2
                                  : flag1
                                  ? 1
                                  : 0,
                              },
                            ],
                          });
                        })
                        .then(() => {
                          setcard(!card);
                        });
                }}
              >
                Send
              </Text>
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
}

export default DetailsScreen

const styles = StyleSheet.create({})

