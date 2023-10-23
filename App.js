//import { StatusBar } from 'expo-status-bar';
import { useState, ueEffect, useEffect } from 'react';
import { Button, Platform,View, Text, StatusBar, TouchableOpacity,  Alert, Dimensions, StyleSheet } from 'react-native';

import {styles} from './src/theme';
import { Container, Title, SubTitle } from './src/theme/style';

import {styled} from 'nativewind';
import TextIformation from './src/components/TextInformation';

const ViewStyled = styled(View);
const ButtonStyled = styled(TouchableOpacity);
const TextStyled = styled(Text);

export default function App() {
  // console.log(Platform);
  // alert('Alerta');
  // Alert.alert('Alerta personalizado', 'Minha nova notificação',[
  //   {
  //     text: 'Valeu',
  //     onPress: ()=> Alert.alert('Alerta2', 'Valeu')
  //   }, 
  //   { text: 'Tamo junto'}
  // ])

  const [count,setCount] = useState(0);
  useEffect(()=>{
    alert("mudança da variavel")
  },[count]) //faça algo qdo o count for alterado
  return (
    <ViewStyled className="flex-1 items-center justify-center bg-black">
        <StatusBar barStyle={'light-content'} backgroundColor={'red'}/> 

        {/* <TextStyled className="text-orange-500">Como utilizar</TextStyled> */}
        {/* <TextStyled className= "text-white font-bold text-[20px]">StyleSheet</TextStyled> */}

        <TextIformation title='Como utilizar'/>
        
        <TextIformation title='StyleSheet'/>
        
        <TextStyled className="text-orange-500"> {count} </TextStyled>
        <ButtonStyled className='bg-white rounded-md' 
        onPress={() =>{ setCount(count+1);}}>
          <TextStyled className='text-black text-md text-sm'>Incremento</TextStyled>
        </ButtonStyled>
        <ButtonStyled className='bg-white rounded-md' 
        onPress={() =>{ setCount(count-1);}}>
          <TextStyled className='text-black text-md text-sm'>Decremento</TextStyled>
        </ButtonStyled>
    </ViewStyled>
  );
}


