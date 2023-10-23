import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../screens/Home';
import Details from '../../screens/Details';

const Drawer = createDrawerNavigator();

export default function DrawerRouter(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen options={{
                headerTitle: "Tela inicial"
            }} name='Home' component={Home} />
            <Drawer.Screen options={{
                headerTitle: "Detalhes"
            }} name="Details" component={Details}/>
        </Drawer.Navigator>
    )
}