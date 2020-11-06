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

  state = {
    CheckBox_4: true,
    CheckBox_6: true,
    TextInput_7: "54646",
    Switch_8: true
  }

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
        containerStyle={styles.CheckBox_4}
        checked={this.state.CheckBox_4}
        onPress={nextChecked => this.setState({ CheckBox_4: nextChecked })}
      />
      <Icon name="star" />
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_6}
        onPress={nextChecked => this.setState({ CheckBox_6: nextChecked })}
      />
      <TextInput
        placeholder="Number Input Placeholder"
        editable={false}
        keyboardType="numeric"
        value={this.state.TextInput_7}
        onChangeText={nextValue => this.setState({ TextInput_7: nextValue })}
      />
      <Switch
        value={this.state.Switch_8}
        onValueChange={nextChecked => this.setState({ Switch_8: nextChecked })}
      />
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
  Icon_5: {},
  View_1: {},
  Text_2: { color: "#ad1414" },
  Button_3: { color: "#d92626" },
  CheckBox_4: {
    width: "100%",
    alignSelf: "center",
    lineHeight: 100,
    letterSpacing: 8
  },

  Icon_5: {},
  CheckBox_6: {},
  TextInput_7: {},
  View_1: {},
  Text_2: { color: "#ad1414" },
  Button_3: { color: "#d92626" },
  CheckBox_4: {
    width: "100%",
    alignSelf: "center",
    lineHeight: 888,
    letterSpacing: 8
  },

  Icon_5: {},
  CheckBox_6: {},
  TextInput_7: {},
  Switch_8: {},
  View_1: {},
  Text_2: { color: "#ad1414" },
  Button_3: { color: "#d92626" },
  CheckBox_4: {
    width: "100%",
    alignSelf: "center",
    lineHeight: 888,
    letterSpacing: 8
  },
  Icon_5: {},
  CheckBox_6: {},
  TextInput_7: {},
  Switch_8: {}
})
