import React, {useState} from "react";
import {
    View,
    TextInput,
    Button,
    Text,
    StyleSheet,
    Alert
} from 'react-native';
import {login} from "../services/api";

export default function LoginScreen({navigation}){
    const [email, setEmail] = useState('')
    const [passowrd, setPassword] = useState('')
}

const handleLogin = async () => {
    const result = await login(email, password)
    if(result.success){
        navigation.navigate('Vagas', {user: result.user})
    }else {
        Alert.alert('Erro', result.message)
    }

    return(
        <View style={styles.container}>
            <Text style={styles.tittle}></Text>
            <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail}/>
            <TextInput style={styles.input} placeholder="Senha" onChangeText={setPassword}/>
            <Button tittle="Entrar" onPress={handleLogin}></Button>
            <Text style={styles.link} onPress={() => navigation.navigate('Cadastro')}>Criar conta</Text>
        </View>
    )

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            paddind: 20,
            borderRadius: 5
        },
        input: {
            borderWidth: 1,
            marginBotttom: 10,
            padding: 10,
            borderRadius: 5
        },
        tittle: {
            fontSize: 24,
            marginBotttom: 20,
            textAling: 'center'
        },
        link: {
            marginTop: 20,
            color: 'blue',
            textAling: 'center'
        }
    })
}