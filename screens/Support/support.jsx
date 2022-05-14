import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";

import { Ionicons } from "@expo/vector-icons";

import {
  getMessage,
  addMessage,
  editMessage,
  deleteMessage,
  subscribeMessage,
} from "../../db/Auth/usersData/Support";
import {auth} from "../../db/config";
import {getUsers, subscribeUser,editUser} from "../../db/Auth/usersData/users"
import Message from "./component/Message";


const Support = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [flag,setflag] = useState(true);

  const [message, setMessage] = useState([]);
  const [messageName, setMessageName] = useState("");

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
        console.log("New message: ", change.doc.data());
        getUserss();
      }
      if (change.type === "modified") {
        console.log("Modified city: ", change.doc.data());
        getUserss();
      }
      if (change.type === "removed") {
        console.log("Removed message: ", change.doc.data());
        getUserss();
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
     console.log("user >>>",user.Message);
   
     let msg=[];
           user.Message.map((m) =>
     msg.push(m)
       
     );
     setMessage(msg);
   }, [ users]);


  const d = new Date();
  const date = d.toISOString().split("T")[0];
  const time = d.toTimeString().split(" ")[0];
  console.log(date + "-" + time);

   useEffect(() => {
     if (!message?.length) return;
     console.log("length",message.length)

     message.length == 1
       ? editUser({
           ...user,
           Message: [
             ...user.Message,
             {
               msg: "we answared soon",
               senderId: 1,
               senderUN: "Admain",
               date: date + "-" + time,
               email: "Admain",
             },
           ],
         })
       : null;
   }, [user]);

  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "column",
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          height: 50,
          backgroundColor: "#2c3338",
        }}
      >
        <Text
          style={{
            color: "white",
            marginBottom: 10,
            padding: 10,
            fontSize: 20,
          }}
        >
          Support
        </Text>
      </View>
      <ScrollView
        style={{ backgroundColor: "white", flexDirection: "column-reverse" }}
      >
        {message.map((c) =>
          c.type === "send" ? (
            <View
              key={c.id}
              style={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                padding: 2,
              }}
            >
              <TouchableOpacity key={c.id} onPress={() => alert(c.msg)}>
                <Message
                  msg={c.msg}
                  usermsg={c.senderUN}
                  loginuser={true}
                  time={c.date}
                  type={c.type}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <View
              key={c.id}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 2,
              }}
            >
              <TouchableOpacity key={c.id} onPress={() => alert(c.msg)}>
                <Message
                  msg={c.msg}
                  loginuser={false}
                  usermsg={c.senderUN}
                  time={c.date}
                  type={c.type}
                />
              </TouchableOpacity>
            </View>
          )
        )}
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 2,
        }}
      >
        <TextInput
          onChangeText={setMessageName}
          value={messageName}
          onKeyPress={async (e) => {
            const array = await getMessage();
            const obj = array.find(e => e.email === auth.currentUser.email)
            if (e.nativeEvent.key === "Enter") {
              e.preventDefault();
              editUser({
                ...user,
                Message: [
                  ...user.Message,
                  {
                    msg: messageName,
                    senderId: user.id,
                    senderUN: user.userName,
                    date: date + "-" + time,
                    email: user.email,
                    type: "send"
                  },
                ],
              }).then(()=>{
                editMessage({
                  ...obj,
                  Message: [
                    ...user.Message,
                    {
                      msg: messageName,
                      senderId: user.id,
                      senderUN: user.userName,
                      date: date + "-" + time,
                      email: user.email,
                      type: "recieve"
                    },
                  ],
                }).then(()=>console.log("Done !"))
              })
                // .then(
                //   editMessage({
                //     email: user.email,
                //     Message: [
                //       ...user.Message,
                //       ,
                //       {
                //         msg: messageName,
                //         senderId: user.id,
                //         senderUN: user.userName,
                //         date: date + "-" + time,
                //         email: user.email,
                //       },
                //     ],
                //   })
                // )

                .then(setMessageName(""));
            }
          }}
          placeholder="enter message"
          style={{
            flex: 2,
            borderColor: "white",
            borderWidth: 1,
            color: "white",
            padding: 20,
            backgroundColor: "#2c3338",
            borderRadius: 20,
            marginBottom: 20,
            height: 50,
          }}
        />
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 5,
            backgroundColor: "#2c3338",
            borderRadius: 50,
          }}
        >
          <Ionicons
            name="arrow-forward-outline"
            size={20}
            color="white"
            onPress={async() =>{
              const array = await getMessage();
              const obj = array.find(e => e.email === auth.currentUser.email)
              editUser({
                ...user,
                Message: [
                  ...user.Message,
                  {
                    msg: messageName,
                    senderId: user.id,
                    senderUN: user.userName,
                    date: date + "-" + time,
                    email: user.email,
                    type: "send"
                  },
                ],
              }).then(()=>{
                editMessage({
                  ...obj,
                  Message: [
                    ...obj.Message,
                    {
                      msg: messageName,
                      senderId: user.id,
                      senderUN: user.userName,
                      date: date + "-" + time,
                      email: user.email,
                      type: "recieve"
                    },
                  ],
                }).then(()=>console.log("Done !"))
              })
                // .then(
                //   editMessage({
                //     email: user.email,
                //     Message: [
                //       ...user.Message,
                //       ,
                //       {
                //         msg: messageName,
                //         senderId: user.id,
                //         senderUN: user.userName,
                //         date: date + "-" + time,
                //         email: user.email,
                //       },
                //     ],
                //   })
                // )

                .then(setMessageName(""))}
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Support;
