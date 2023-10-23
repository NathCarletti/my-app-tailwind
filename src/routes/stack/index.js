import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import Details from '../../screens/Details';

const Stack = createNativeStackNavigator();

export default function StackRouter(){
    return(
        <Stack.Navigator>
            <Stack.Screen options={{
                headerTitle: "Tela inicial"
            }} name='Home' component={Home} />
            <Stack.Screen options={{
                headerTitle: "Detalhes"
            }} name="Details" component={Details}/>
        </Stack.Navigator>
    )
}