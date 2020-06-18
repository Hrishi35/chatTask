import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import InChatScreen from './screens/InChatScreen';
import ChatScreen from './screens/ChatScreen';

const navigator = createStackNavigator({
  
  Chat : ChatScreen,
  InChat : InChatScreen
  
  }, 
  {

  headerMode : "none"
  
  }
);

export default createAppContainer(navigator);