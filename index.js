/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App2';
//import AppProjet from './AppProject'
import {name as appName} from './app.json';
import App from './lib/Example2/App';

AppRegistry.registerComponent(appName, () => App);
