import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, FlatList, SectionList } from "react-native";
import { Card } from "../../components/Card";

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

    const navigation = useNavigation();
    return(
        <View className="flex-1 items-center justify-center">
            <Text className = 'text-red-500'>Bem-vindo a HOME</Text>
            <Button title="Ir para detalhes" onPress={()=>{
                navigation.navigate('Details')
            }}/>
            {/* <Card title={'Como trabalhar com listas'} image={'https://github.com/Caio18-cosenza.png'} />  */}

            <FlatList data={DATA} renderItem={({index,item})=>(
                <Card title={item.title} image={item.bannerURL} />
            )} keyExtractor={(item)=>item.title} /> 

            {/* <SectionList sections={DATASec} renderItem={({index, item})=>(
                <Card title={item} image={item} />
            )} keyExtractor={(item,index)=>index} /> */}
        </View>
    )
}