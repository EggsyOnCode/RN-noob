import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import ReviewDetails from "./ReviewDetails";
import About from "./About";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}
