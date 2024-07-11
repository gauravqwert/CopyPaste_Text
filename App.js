import * as React from "react";
import { StyleSheet, Text, View,Button } from 'react-native';
import * as Clipboard from "expo-clipboard";

export default function App() {
  const [copiedText,setCopiedText] = React.useState();

  const copyToClipboard = () => {
    Clipboard.setString(text);
  }

  const text ="hello Developers";

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
  }
  return (
    <View style={styles.container}>
      <View style={{margin:20}}>
        <Text selectable>
          {text}
        </Text>
        <Button title="Copy Button" onPress={copyToClipboard}/>
      </View>
      <Button title="View Copied Text" onPress={fetchCopiedText}/>
      <Text style={styles.copiedText}>
        {copiedText}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  copiedText : {
    marginTop : 10,
    color:"red",
  }
});
