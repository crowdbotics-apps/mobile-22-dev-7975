import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen59239Navigator from '../features/BlankScreen59239/navigator';
import BlankScreen49230Navigator from '../features/BlankScreen49230/navigator';
import BlankScreen39191Navigator from '../features/BlankScreen39191/navigator';
import BlankScreen29188Navigator from '../features/BlankScreen29188/navigator';
import BlankScreen19187Navigator from '../features/BlankScreen19187/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen59239: { screen: BlankScreen59239Navigator },
BlankScreen49230: { screen: BlankScreen49230Navigator },
BlankScreen39191: { screen: BlankScreen39191Navigator },
BlankScreen29188: { screen: BlankScreen29188Navigator },
BlankScreen19187: { screen: BlankScreen19187Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
