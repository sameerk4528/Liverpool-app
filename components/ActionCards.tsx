import { Image, Linking, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

export default function ActionCards() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    
<ScrollView>

    <View style={styles.card}>
      <Text style={styles.headingText}>LIVERPOOL FOOTBALL CLUB</Text>
      
      <View style={styles.cardContent}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>You'll Never Walk Alone</Text>
        </View>

        <View style={styles.mainContentRow}>
          <Image 
            source={require('./Liverpool.png')}
            style={styles.cardImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.bodyText} >
              Liverpool Football Club is a professional football club based in Liverpool, England. 
              The club competes in the Premier League, the top tier of English football. 
              Founded in 1892, the club joined the Football League the following year and has played its home games at Anfield...
              <Text 
                style={styles.readMore} 
                onPress={() => openWebsite('https://en.wikipedia.org/wiki/Liverpool_F.C.')}> Read More
              </Text>
            </Text>
          </View>
        </View>

        <View style={styles.cardFooter}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => openWebsite('https://www.instagram.com/liverpoolfc')}>
            <Text style={styles.socialButtonText}>Follow LFC</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

</ScrollView>
    
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  card: {
    marginHorizontal: 16,
    marginVertical: 12,
  },
  cardContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    elevation: 3, // Shadow for Android
    shadowOffset: { width: 1, height: 1 }, // Shadow for iOS
    shadowColor: '#333',
    shadowOpacity: 0.2,
  },
  headerContainer: {
    marginBottom: 8,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  mainContentRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  cardImage: {
    height: 120,
    width: 100,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1, // This is crucial for text wrapping
    marginLeft: 12,
  },
  bodyText: {
    fontSize: 14,
    color: '#2C3E50',
    lineHeight: 20,
  },
  readMore: {
    color: '#E74C3C',
    fontWeight: 'bold',
  },
  cardFooter: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    backgroundColor: '#C8102E', // Liverpool Red
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  socialButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
})