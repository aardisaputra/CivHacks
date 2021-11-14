/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Button,
} from 'react-native';

import {
  Colors,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ListContent from './components/ListItem';
import Card from "./components/Card";
import Header from './components/header';

const headerHeight = 40 * 2;

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const entries = [
    {title: "title", location: "location", time: "time"},
    {title: "title", location: "location", time: "time"},
    {title: "title", location: "location", time: "time"},
    {title: "title", location: "location", time: "time"},
    {title: "title", location: "location", time: "time"},
    {title: "title", location: "location", time: "time"},
    {title: "title", location: "location", time: "time"},
  ];

  state = {
    messages: []
  };
 
  getMessages = () => {
    gmailApi.getMessages(true, 5).then(res => {
      this.setState({ messages: gmailApi.normalizeData(res) });
    });
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View style={[styles.header]}>
        <Header {...{headerHeight}} />
      </View>

      <View style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>

        <FlatList style={styles.listStyle}

          data={entries}
          renderItem={({item}) => (
            <Card title={item.title} 
                location={item.location} 
                time={item.time}/>
          )}
          />

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },

  header: {
    position: 'absolute',
    backgroundColor: '#1c1c1c',
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 1,
  },
  subHeader: {
    height: headerHeight / 2,
    width: '100%',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  listStyle: {
    marginTop: 50,
  },
});

export default App;
