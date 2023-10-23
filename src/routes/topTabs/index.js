import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Home from '../../screens/Home';
import Details from '../../screens/Details';

const TopTabs = createMaterialTopTabNavigator();

export default function TopTabsRouter(){
    return(
        <TopTabs.Navigator>
            <TopTabs.Screen options={{
                headerTitle: "Tela inicial"
            }} name='Home' component={Home} />
            <TopTabs.Screen options={{
                headerTitle: "Detalhes"
            }} name="Details" component={Details}/>
        </TopTabs.Navigator>
    )
}