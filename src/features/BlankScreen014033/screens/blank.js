import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { CheckBox_4: true }

  render = () => (
    <View>
      <Text style={styles.Text_2}>
        Sample text content khgkgkj ghgfghfjh gfhjfjhf gfjfjg
      </Text>
      <Button
        title="Press me!"
        color="#19f5d1"
        style={styles.Button_3}
        onPress={() => alert("Pressed!")}
      />
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={this.state.CheckBox_4}
        onPress={nextChecked => this.setState({ CheckBox_4: nextChecked })}
      />
      <Icon name="star" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Text_2: {},
  Button_3: {},
  Image_4: {},
  View_1: {},
  Text_2: {},
  Button_3: {},
  Image_4: {},
  View_1: {},
  Text_2: {},
  Button_3: {},
  View_1: {},
  Text_2: { color: "#ad1414" },
  Button_3: { color: "#d92626" },
  View_1: {},
  Text_2: { color: "#ad1414" },
  Button_3: { color: "#d92626" },
  CheckBox_4: {},
  Icon_5: {}
})
