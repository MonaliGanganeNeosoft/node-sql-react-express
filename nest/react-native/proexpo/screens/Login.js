import { View, Text,StyleSheet,Image ,TextInput,Button ,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'

export default function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const postLogin=()=>{
        console.log(email+"--"+password)
        setEmail('')
        setPassword('')
    }
  return (
    <View style={styles.container}>
        <Image source={require("../assets/logo.png")}  style={{width:200,height:150}} resizeMode="contain"/>
        <View style={styles.inputView}>
            <TextInput placeholder='Email..' placeholderTextColor="#003f5c" style={styles.TextInput} onChangeText={(email)=> setEmail(email)} value={email}/>
        </View>
        <View style={styles.inputView}>
            <TextInput placeholder='Password..' placeholderTextColor="#003f5c" style={styles.TextInput} secureTextEntry={true} onChangeText={(password)=> setPassword(password)} value={password}/>
        </View>
        <TouchableOpacity>
            <Text style={ styles.forgot_button}> Forget Password ?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={postLogin}>
            <Text style={ styles.loginText}> Login</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
         flex:1,
         backgroundColor:'#fff',
         alignItems:"center",
         justifyContent:"center"
    },
    image:{
     marginBottom:40,

    },
    inputView:{
         backgroundColor:"#FFC0CB",
         borderRadius:30, 
         width:"70%",
         height:45,
         alignItems:"center",
         marginBottom:20
    },
    TextInput:{
       height:50,
       flex:1,
       padding:10,
       marginLeft:20
    },
    forgot_button:{
        height:30,
        marginBottom:30
    },
    loginBtn:{
        width:"80%",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        backgroundColor:"#FF1493"
    }
})