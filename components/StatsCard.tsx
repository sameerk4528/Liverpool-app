import { StyleSheet, Text, View , ScrollView, Linking} from 'react-native'
import React from 'react'

export default function StatsCard() {
  const stats =[
    {
       season: '2024-25',
    trophies: 'EFL Cup', 
    totalWins: 37, 
    goalsScored: 123,
    topScorer: 'Mohamed Salah (34)',
    topAssister: 'Mohamed Salah (23)', 
    },
    {
        season: '2023-24',
    trophies: 'EFL Cup',
    totalWins: 38,
    goalsScored: 142,
    topScorer: 'Mohamed Salah (25)',
    topAssister: 'Mohamed Salah (14)',
    },
    {
        season: '2022-23',
    trophies: 'Community Shield',
    totalWins: 28,
    goalsScored: 103,
    topScorer: 'Mohamed Salah (30)',
    topAssister: 'Mohamed Salah (16)',
    },
    {
        season: '2021-22',
    trophies: 'FA Cup, EFL Cup',
    totalWins: 46,
    goalsScored: 147,
    topScorer: 'Mohamed Salah (31)',
    topAssister: 'Mohamed Salah (16)',
    },
    {
        season: '2020-21',
    trophies: 'None',
    totalWins: 28,
    goalsScored: 97,
    topScorer: 'Mohamed Salah (31)',
    topAssister: 'Roberto Firmino (9)',
    },
    {
        season: '2019-20',
    trophies: 'Premier League, Club World Cup, Super Cup',
    totalWins: 41,
    goalsScored: 121,
    topScorer: 'Mohamed Salah (23)',
    topAssister: 'Trent Alexander-Arnold (15)',
    },
    {
        season: '2018-19',
    trophies: 'Champions League',
    totalWins: 38,
    goalsScored: 115,
    topScorer: 'Mohamed Salah (27)',
    topAssister: 'Trent Alexander-Arnold (16)',
    },
    {
        season: '2017-18',
    trophies: 'None',
    totalWins: 26,
    goalsScored: 135,
    topScorer: 'Mohamed Salah (44)',
    topAssister: 'James Milner (11)',
    },
    {
        season: '2016-17',
    trophies: 'None',
    totalWins: 22,
    goalsScored: 78,
    topScorer: 'Philippe Coutinho (14)',
    topAssister: 'Georginio Wijnaldum (11)',
    },
    {
        season: '2015-16',
    trophies: 'None',
    totalWins: 24,
    goalsScored: 98,
    topScorer: 'Daniel Sturridge (13)',
    topAssister: 'James Milner (14)',
    },
    
  ]
  function openWebsite(websiteLink: string) {
     Linking.openURL(websiteLink);
   }
  
    return (

    <View style={{ flex: 1 }}>
      
      <Text style={styles.headingText}>StatsCard</Text>
        <ScrollView horizontal={true} 
  showsHorizontalScrollIndicator={false}
  style={styles.container}>

        {stats.map(({season, trophies, totalWins, goalsScored, topScorer, topAssister}) =>(
            <View key={season} style={styles.SeasonCard}>
                <Text style={styles.Season}>Season: {season}</Text>
                <Text style={styles.trophies}>Trophies Won: {trophies}</Text>
                <Text style={styles.wins}>Total Wins: {totalWins}</Text>
                <Text style={styles.goals}>Toatal Goals Scored: {goalsScored}</Text>
                <Text style={styles.topScorer}>Top Goal Scorer: {topScorer}</Text>
                <Text style={styles.topAssister}>Top Assist provider: {topAssister}</Text>
            </View>
        ))}
        </ScrollView>
    
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        marginBottom: 10,
        color: 'white',
    },
   container: {
        paddingHorizontal: 8, // Inner padding for the scrollable area
    },
    SeasonCard: {
        width: 300,          // REQUIRED: Fixed width to force overflow
        marginHorizontal: 8,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 16,
        elevation: 3,
    },
    Season: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#C8102E', 
        marginBottom: 8,
    },
    trophies: {
        fontSize: 14,
        fontWeight: '600',
        color: '#b4a71eff', 
        marginBottom: 4
    },
    wins: { marginBottom: 4 },
    goals: { marginBottom: 4 },
    topScorer: { marginBottom: 4 },
    topAssister: { marginBottom: 4 },
})