import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function Home(){
    const navigation = useNavigation();
    return(
        <View className="flex-1 items-center justify-center">
            <Text className = 'text-red-500'>Bem-vindo a HOME</Text>
            <Button title="Ir para detalhes" onPress={()=>{
                navigation.navigate('Details')
            }}/>
        </View>
    )
}