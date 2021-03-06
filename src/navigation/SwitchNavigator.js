import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthNavigator from './AuthNavigator';
import { AppNavigation } from './AppNavigation';

const SwitchNavigator = createSwitchNavigator(
  {
    Home: {
      screen: AppNavigation,
    },
    Auth: {
      screen: AuthNavigator,
    },
  },
  {
    initialRouteName: 'Auth',
  },
);

export default createAppContainer(SwitchNavigator);
