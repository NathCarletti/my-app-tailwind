import { View, Text, FlatList } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Card } from "../../components/Card";

export default function Details(){
    const [data, setData] = useState([]);

    useEffect(()=>{
        readData();
    },[])

    async function readData(){
        const response = await AsyncStorage.getItem('@myapp:users');
        const json = JSON.parse(response);
        setData(json);
    }

    return(
        <View className="flex-1">
            <Text className = 'text-red-500'>Detalhes de um produto</Text>
            
            <FlatList data={data} renderItem={({index,item})=>(
                <Card title={`Nome: ${item.name}`} image={'https://github.com/Caio18-cosenza.png'} />
            )} keyExtractor={(item)=>item.title} />

        </View>
    )
}