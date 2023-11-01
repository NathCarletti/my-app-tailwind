import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, FlatList, SectionList } from "react-native";
import { Card } from "../../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DATA=[
    {
        title: "Como trabalhar com React Native",
        bannerURL: 'https://github.com/Caio18-cosenza.png'
    },
    {
        title: 'Como trabalhar com Lista',
        bannerURL: 'https://github.com/Caio18-cosenza.png'
    },
    {
        title: 'Como trabalhar com Section',
        bannerURL: 'https://github.com/Caio18-cosenza.png'
    }
]
const DATASec=[
    {
        data: ["Como trabalhar com React Native"],
        bannerURL: 'https://github.com/Caio18-cosenza.png'
    },
    {
        data: ['Como trabalhar com Lista'],
        bannerURL: 'https://github.com/Caio18-cosenza.png'
    },
    {
        data: ['Como trabalhar com Section'],
        bannerURL: 'https://github.com/Caio18-cosenza.png'
    }
]

export default function Home(){
    const [data, setData] = useState([]);

    const navigation = useNavigation();

    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json().then((json => setData(json))))
    //     .catch(err=> console.warn(err)); //pega o res.json e entao o coloca dentro de data
    // },[]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            setData(res.data);
            saveData(res.data);
        }).catch(err=>console.warn(err));
    },[]);

    async function saveData(json){
        const string = JSON.stringify(json);
        await AsyncStorage.setItem('@myapp:users',string);
        alert('Usuários salvos na memória');
    }

    return(
        <View className="flex-1 items-center justify-center">
            <Text className = 'text-red-500'>Bem-vindo a HOME</Text>
            <Button title="Ir para detalhes" onPress={()=>{
                navigation.navigate('Details')
            }}/>

            <FlatList data={data} renderItem={({index,item})=>(
                <Card title={`Nome: ${item.name}`} image={'https://github.com/Caio18-cosenza.png'} />
            )} keyExtractor={(item)=>item.title} />


            {/* <Card title={'Como trabalhar com listas'} image={'https://github.com/Caio18-cosenza.png'} />  */}
            {/* 
            <FlatList data={DATA} renderItem={({index,item})=>(
                <Card title={item.title} image={item.bannerURL} />
            )} keyExtractor={(item)=>item.title} />  */}

            {/* <SectionList sections={DATASec} renderItem={({index, item})=>(
                <Card title={item} image={item} />
            )} keyExtractor={(item,index)=>index} /> */}
        </View>
    )
}