import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'
import ActionaCards from './components/ActionCards'
import StatsCard from './components/StatsCard'
const App = () => {
  return (
    <SafeAreaView style={{backgroundColor:'#C8102E'}}>
      <ScrollView>


      <ActionaCards/>
     <FancyCards />
    <StatsCard />
 </ScrollView>
    </SafeAreaView>
  )
}
export default App