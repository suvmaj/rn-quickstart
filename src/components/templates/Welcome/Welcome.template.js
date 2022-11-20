import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const Link = props => {
  return (
    <Text
      {...props}
      accessibilityRole="link"
      style={StyleSheet.compose(styles.link, props.style)}
    />
  );
};

const WelcomeTemplate = () => {
  return (
    <SafeAreaView style={styles.app}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>RNQuickstart</Text>
        </View>
        <Text style={styles.text}>
          This app is built with&nbsp;
          <Link href="https://github.com/react-native-community/cli">
            React Native CLI&nbsp;
          </Link>
          and&nbsp;
          <Link href="https://github.com/necolas/react-native-web">
            React Native for Web
          </Link>
        </Text>
        <Text style={styles.text}>
          To get started, edit&nbsp;
          <Link>src/App.js</Link>.
        </Text>
      </View>
      <Text style={styles.text}>Created by Suvankar Majumder</Text>
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  app: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282c34',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    padding: '16@ms',
  },
  title: {
    fontSize: '32@ms',
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    textAlign: 'center',
    paddingVertical: '16@ms',
    color: 'white',
  },
  link: {
    color: '#1B95E0',
  },
});

export default WelcomeTemplate;
