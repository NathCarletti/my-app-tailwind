import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Details from '../../screens/Details';

const BottomTabs = createBottomTabNavigator();

export default function BottomTabsRouter(){
    return(
        <BottomTabs.Navigator>
            <BottomTabs.Screen options={{
                headerTitle: "Tela inicial"
            }} name='Home' component={Home} />
            <BottomTabs.Screen options={{
                headerTitle: "Detalhes"
            }} name="Details" component={Details}/>
        </BottomTabs.Navigator>
    )
}