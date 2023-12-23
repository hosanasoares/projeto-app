import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { loginHome } from './pages/login/loginHome'
// import { loginAluno } from './pages/login/loginAluno'

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen
              name = "loginHome"
              component={loginHome}
            />
            {/* <Tab.Screen
              name = "loginAluno"
              component={loginAluno}
            /> */}
        </Tab.Navigator>
    )
}