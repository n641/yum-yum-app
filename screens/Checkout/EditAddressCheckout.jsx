import { StyleSheet, Text, View , Button , TextInput , Dimensions } from 'react-native'
import React, {useEffect , useState} from 'react'
import { editUser, getUsers, subscribeUser } from '../../db/Auth/usersData/users';
import { auth } from '../../db/config';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const EditAddressCheckout = ({navigation , route}) => {
    const{address}=route.params;
    console.log(address);
    const [name, setname] = useState('');
  const [Users, setUsers] = useState([]);
  const [addNewAdress, setaddNewAdress] = useState([])

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


const handleedit=(name)=>{
    if (!Users?.length)
    return;
    let temp=[];
    const user = Users.find(e => e.email == auth.currentUser.email);
    const edit=user.address.map((add)=>{
        add!==address?
        temp.push(add):null
    })
    temp.push(name);
    editUser({
        ...user,
        address: [...temp],
      });
}
  

  return (
      <View style={{flex:1 , width:width , height:height , alignItems:'center'}}>
          <Text  style={{ fontSize: 20, fontWeight: 'bold', color: "red" , margin:10 }}>Edit your address </Text>
    <View style={{flex:1 , width:width , height:height , alignItems:'center' }}>
        
      <View style={styles.input}>
        <TextInput
          onChangeText={setname}
          value={name}
        />
      </View>
      <View style={{ width: 200, margin: 10 }}>
        <Button title='Confirm Edit' color={'red'} onPress={() => {
        handleedit(name)
        }} />
      </View>
    </View>
    </View>
  )
}

export default EditAddressCheckout;

const styles = StyleSheet.create({
    input: {
        height: '20%',
        borderRadius: 10,
        width: 400,
        justifyContent: 'flex-start',
        paddingVertical: 10,
        flexDirection: 'row',
        paddingLeft: 10,
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        margin: 10,
        height:height/10
      },
})