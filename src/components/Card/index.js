import { Image, Text, View } from "react-native";


export const Card = ({image,title})=>{
    return(
        <View className = 'w-[90%] h-48 bg-white mt-2 self-center overflow-hidden'>
            <Image source={{uri:image}} className='w-full h-[80%] self-center' />
            <Text className='font-bold text-center mr-2'>{title}</Text>
           
        </View>
    )
}