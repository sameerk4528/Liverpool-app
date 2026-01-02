import { Image, Linking, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
     function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink);
      }
  return (
    <View style={{flex:1}}>
      
      <Text style={styles.headingText}>Liverpool Players</Text>

    <ScrollView
    horizontal
    scrollEnabled
    showsHorizontalScrollIndicator={false}>
    
    
    <View style={[styles.card, styles.cardElevated]}>
<Image
source={
    require('./SALAH.png')
} 
style={styles.cardImage}
/>
<View style={styles.cardBody}>
    <Text style={styles.playerName}>
        Mohammad Salah
    </Text>
    <Text style={styles.playerPosition}>Right Winger</Text>
    <Text style={styles.playerDescription} numberOfLines={8}>Mohamed Salah Hamed Mahrous Ghaly  (born 15 June 1992) is an Egyptian professional footballer who plays as a right winger or right midfielder
         for Premier League club Liverpool and captains the Egypt national team. He is widely regarded as one of the best players of his generation and one of the greatest wingers of all time.
          He is the all-time top foreign goalscorer in the Premier League and the all-time top African goalscorer in the UEFA Champions League.</Text>
        <Text 
                          style={styles.readmore} 
                          onPress={() => openWebsite('https://en.wikipedia.org/wiki/Mohamed_Salah')}>...Read More
        </Text>
    <Text style={styles.cardFooter}></Text>

</View>
    </View>



<View style={[styles.card, styles.cardElevated]}>
<Image
source={
    require('./VVD.png')
} 
style={styles.cardImage}
/>
<View style={styles.cardBody}>
    <Text style={styles.playerName}>
        Virgil van Dijk
    </Text>
    <Text style={styles.playerPosition}>Centre Back</Text>
    <Text style={styles.playerDescription} numberOfLines={8}>Virgil van Dijk ( born 8 July 1991) is a Dutch professional footballer who plays as a centre-back for and captains both Premier League club Liverpool and the Netherlands national team. Widely regarded as one of the best defenders of his generation, he is known for his strength, leadership, speed and aerial ability.</Text>
                  <Text 
                          style={styles.readmore} 
                          onPress={() => openWebsite('https://en.wikipedia.org/wiki/Virgil_van_Dijk')}>...Read More
        </Text>
    <Text style={styles.cardFooter}></Text>

</View>
    </View>

    <View style={[styles.card, styles.cardElevated]}>
<Image
source={
    require('./DOM.png')
} 
style={styles.cardImage}
/>
<View style={styles.cardBody}>
    <Text style={styles.playerName}>
        Dominik Szoboszlai
    </Text>
    <Text style={styles.playerPosition}>Central Midfielder</Text>
    <Text style={styles.playerDescription} numberOfLines={8}>Dominik Szoboszlai ( born 25 October 2000) is a Hungarian professional footballer who plays for Premier League club Liverpool and captains the Hungary national team. A versatile player, Szoboszlai can be deployed as a central or attacking midfielder, wide midfielder or right-back.</Text>
              <Text 
                          style={styles.readmore} 
                          onPress={() => openWebsite('https://en.wikipedia.org/wiki/Dominik_Szoboszlai')}>...Read More
        </Text>
    <Text style={styles.cardFooter}></Text>

</View>
    </View>

    <View style={[styles.card, styles.cardElevated]}>
<Image
source={
    require('./Ekitike.png')
} 
style={styles.cardImage}
/>
<View style={styles.cardBody}>
    <Text style={styles.playerName}>
        Hugo Ekitike
    </Text>
    <Text style={styles.playerPosition}>Striker</Text>
    <Text style={styles.playerDescription} numberOfLines={8}>Hugo Timothée Ekitike ( born 20 June 2002) is a French professional footballer who plays as a forward for Premier League club Liverpool and the France national team. Ekitike began his professional career at 18 with Stade de Reims, playing for their reserves team before being called up to the senior squad in 2020. Between 2021 and 2022, Ekitike had loan spells at Vejle Boldklub and Paris Saint-Germain, winning the Ligue 1 title and appearing in the UEFA Champions League. His loan became a full transfer in 2023, however he only made one league appearance as a permanent player.

</Text>
              <Text 
                          style={styles.readmore} 
                          onPress={() => openWebsite('https://en.wikipedia.org/wiki/Hugo_Ekitike')}>...Read More
        </Text>
    <Text style={styles.cardFooter}></Text>

</View>
    </View>

    <View style={[styles.card, styles.cardElevated]}>
<Image
source={
    require('./Gapko.png')
} 
style={styles.cardImage}
/>
<View style={styles.cardBody}>
    <Text style={styles.playerName}>
        Cody Gakpo
    </Text>
    <Text style={styles.playerPosition}>Left Winger</Text>
    <Text style={styles.playerDescription} numberOfLines={8}>Cody Mathès Gakpo ( born 7 May 1999) is a Dutch professional footballer who plays as a left winger or centre forward for Premier League club Liverpool and the Netherlands national team.
A PSV academy graduate, Gakpo made his first-team debut in February 2019. In the 2021–22 season, he won the Dutch Footballer of the Year award after scoring 21 goals in 47 games in all competitions. He signed for Liverpool in January 2023.</Text>
              <Text 
                          style={styles.readmore} 
                          onPress={() => openWebsite('https://en.wikipedia.org/wiki/Cody_Gakpo')}>...Read More
        </Text>
    <Text style={styles.cardFooter}></Text>

</View>
    </View>

    <View style={[styles.card, styles.cardElevated]}>
<Image
source={
    require('./alli.png')
} 
style={styles.cardImage}
/>
<View style={styles.cardBody}>
    <Text style={styles.playerName}>
        Alisson Becker
    </Text>
    <Text style={styles.playerPosition}>Goalkeeper</Text>
    <Text style={styles.playerDescription} numberOfLines={8}>Álisson Ramsés Becker (born 2 October 1992), better known as Alisson Becker or simply Alisson, is a Brazilian professional footballer who plays as a goalkeeper for Premier League club Liverpool and the Brazil national team. He is widely regarded as one of the best goalkeepers of his generation..</Text>
              <Text 
                          style={styles.readmore} 
                          onPress={() => openWebsite('https://en.wikipedia.org/wiki/Alisson_Becker')}>...Read More
        </Text>
    <Text style={styles.cardFooter}></Text>

</View>
    </View>

    <View style={[styles.card, styles.cardElevated]}>
<Image
source={
    require('./robbo.png')
} 
style={styles.cardImage}
/>
<View style={styles.cardBody}>
    <Text style={styles.playerName}>
        Andy Robertson
    </Text>
    <Text style={styles.playerPosition}>Left Back</Text>
    <Text style={styles.playerDescription} numberOfLines={8}>Andrew Henry Robertson MBE (born 11 March 1994) is a Scottish professional footballer who plays as a left-back for Premier League club Liverpool and captains the Scotland national team. He is also the vice-captain of Liverpool.
Robertson began his senior career in 2012 with one season at then amateur Queen's Park. In his season at Dundee United, he was runner up in the 2013–14 Scottish Cup. He was named PFA Scotland Young Player of the Year and in the PFA Scotland Team of the Year, before joining Premier League side Hull City in July 2014 for a fee of £2.85 million. Robertson was relegated, promoted and then relegated again in his three seasons at Hull City.</Text>
              <Text 
                          style={styles.readmore} 
                          onPress={() => openWebsite('https://en.wikipedia.org/wiki/Andy_Robertson')}>...Read More
        </Text>
    <Text style={styles.cardFooter}></Text>

</View>
    </View>

    
    <View style={[styles.card, styles.cardElevated]}>
<Image
source={
    require('./flo.png')
} 
style={styles.cardImage}
/>
<View style={styles.cardBody}>
    <Text style={styles.playerName}>
        Florian Wirtz
    </Text>
    <Text style={styles.playerPosition}>Attacking Midfielder</Text>
    <Text style={styles.playerDescription} numberOfLines={8}>Florian Richard Wirtz (born 3 May 2003) is a German professional footballer who plays as an attacking midfielder or left midfielder for Premier League club Liverpool and the Germany national team. He is widely regarded as one of the best attacking midfielders in the world.
Wirtz rose through the youth system at 1. FC Köln before moving to Bayer Leverkusen in 2020. He made his first team debut at the age of 17, becoming the youngest scorer in Bundesliga history</Text>
              <Text 
                          style={styles.readmore} 
                          onPress={() => openWebsite('https://en.wikipedia.org/wiki/Florian_Wirtz')}>...Read More
        </Text>
    <Text style={styles.cardFooter}></Text>

</View>
    </View>


   <View style={[styles.card, styles.cardElevated]}>
<Image
source={
    require('./frimfong.png')
} 
style={styles.cardImage}
/>
<View style={styles.cardBody}>
    <Text style={styles.playerName}>
Jeremie Frimpong
    </Text>
    <Text style={styles.playerPosition}>Right Wing Back</Text>
    <Text style={styles.playerDescription} numberOfLines={8}>Jeremie Agyekum Frimpong ( born 10 December 2000) is a Dutch professional footballer who plays as a right-back for Premier League club Liverpool and the Netherlands national team. He is known for his pace, dribbling ability, and work rate. Frimpong started out playing football at his local clubs, AFC Clayton and Clayton Villa.</Text>
              <Text 
                          style={styles.readmore} 
                          onPress={() => openWebsite('https://en.wikipedia.org/wiki/Jeremie_Frimpong')}>...Read More
        </Text>
    <Text style={styles.cardFooter}></Text>

</View>
    </View>

       <View style={[styles.card, styles.cardElevated]}>
<Image
source={
    require('./gravey.png')
} 
style={styles.cardImage}
/>
<View style={styles.cardBody}>
    <Text style={styles.playerName}>
Ryan Gravenberch
        </Text>
    <Text style={styles.playerPosition}>Defensive Midfielder</Text>
    <Text style={styles.playerDescription} numberOfLines={8}>Ryan Jiro Gravenberch (born 16 May 2002) is a Dutch professional footballer who plays as a defensive midfielder for Premier League club Liverpool and the Netherlands national team. Known for his quality on the ball, ability to play out of pressure, and his intercepting, tackling, and dribbling abilities, he is widely regarded as one of the best defensive midfielders in the world.</Text>
    <Text 
                          style={styles.readmore} 
                          onPress={() => openWebsite('https://en.wikipedia.org/wiki/Ryan_Gravenberch')}>...Read More
        </Text>
    <Text style={styles.cardFooter}></Text>

</View>
    </View>

<View style={[styles.card, styles.cardElevated]}>
<Image
source={
    require('./ibou.png')
} 
style={styles.cardImage}
/>
<View style={styles.cardBody}>
    <Text style={styles.playerName}>
Ibrahima Konaté
        </Text>
    <Text style={styles.playerPosition}>Centre Back</Text>
    <Text style={styles.playerDescription} numberOfLines={8}>Ibrahima Konaté ( born 25 May 1999) is a French professional footballer who plays as a centre-back for Premier League club Liverpool and the France national team.
Starting off with Sochaux, Konaté moved to RB Leipzig in 2017. After four years with the club, Liverpool signed him in 2021 for a fee of £36 million. He won the EFL Cup and FA Cup in his first season. He also won the Premier League title with Liverpool in the 2024–25 season. Konaté made his debut for the French national team in 2022 and was a member of the France team that reached the final of the 2022 FIFA World Cup.</Text>
    <Text 
                          style={styles.readmore} 
                          onPress={() => openWebsite('https://en.wikipedia.org/wiki/Ibrahima_Konat%C3%A9')}>...Read More
        </Text>
    <Text style={styles.cardFooter}></Text>

</View>
    </View>


       <View style={[styles.card, styles.cardElevated]}>
<Image
source={
    require('./macca.jpg')
} 
style={styles.cardImage}
/>
<View style={styles.cardBody}>
    <Text style={styles.playerName}>
        Alexis Mac Allister
    </Text>
    <Text style={styles.playerPosition}>Central Midfilder</Text>
    <Text style={styles.playerDescription} numberOfLines={8}>Alexis Mac Allister ( born 24 December 1998) is an Argentine professional footballer who plays as a midfielder for Premier League club Liverpool and the Argentina national team. Considered as one of the best midfielders in the world, he is known for his passing, shooting ability, and versatility.</Text>
        <Text 
                          style={styles.readmore} 
                          onPress={() => openWebsite('https://en.wikipedia.org/wiki/Alexis_Mac_Allister')}>...Read More
        </Text>
    <Text style={styles.cardFooter}></Text>

</View>
    </View>

           <View style={[styles.card, styles.cardElevated]}>
<Image
source={
    require('./Jones.jpg')
} 
style={styles.cardImage}
/>
<View style={styles.cardBody}>
    <Text style={styles.playerName}>
       Curtis Jones
    </Text>
    <Text style={styles.playerPosition}>Central Midfilder</Text>
    <Text style={styles.playerDescription} numberOfLines={8}>Curtis Julian Jones (born 30 January 2001) is an English professional footballer who plays as a midfielder for Premier League club Liverpool and the England national team.

Jones joined Liverpool's academy at the age of nine before signing his first professional contract with the club in February 2018. He made his first-team debut in 2019 and was a member of Liverpool's 2019–20 Premier League winning squad. During his 100th league appearance for the club, Jones scored his 10th career goal. He has also represented England at youth level. He earned his first cap for the senior England team in November 2024, scoring on his debut.</Text>
        <Text 
                          style={styles.readmore} 
                          onPress={() => openWebsite('https://en.wikipedia.org/wiki/Curtis_Jones_(footballer,_born_2001)')}>...Read More
        </Text>
    <Text style={styles.cardFooter}></Text>

</View>
    </View>

       <View style={[styles.card, styles.cardElevated]}>
<Image
source={
    require('./kerekz.png')
} 
style={styles.cardImage}
/>
<View style={styles.cardBody}>
    <Text style={styles.playerName}>
        Milos Kerkez
    </Text>
    <Text style={styles.playerPosition}>Left Back</Text>
    <Text style={styles.playerDescription} numberOfLines={8}>Milos Kerkez ( born 7 November 2003) is a professional footballer who plays as a left-back, left wing-back, or left midfielder for Premier League club Liverpool. Born in Serbia, he plays for the Hungary national team. Kerkez joined Austrian side Rapid Wien in 2014, and played there until 2019</Text>
        <Text 
                          style={styles.readmore} 
                          onPress={() => openWebsite('https://en.wikipedia.org/wiki/Milos_Kerkez')}>...Read More
        </Text>
    <Text style={styles.cardFooter}></Text>

</View>
    </View>

    <View style={[styles.card, styles.cardElevated]}>
<Image
source={
    require('./JOE.jpg')
} 
style={styles.cardImage}
/>
<View style={styles.cardBody}>
    <Text style={styles.playerName}>
        Joe Gomez
    </Text>
    <Text style={styles.playerPosition}>Centre Back</Text>
    <Text style={styles.playerDescription} numberOfLines={8}>Joseph Dave Gomez (born 23 May 1997) is an English professional footballer who plays as a defender for Premier League club Liverpool and the England national team.

Gomez began his career at Charlton Athletic, breaking into the first team at 17 and playing one full season before joining Liverpool in June 2015. After establishing himself as a first-team regular, Gomez struggled with injuries, but appeared in the 2019 UEFA Champions League final as Liverpool won the competition. He played in the final of the 2019 FIFA Club World Cup with Liverpool winning the competition for the first time in the club's history. He was part of the team that won the 2019–20 Premier League, Liverpool's first league title in 30 years. Gomez has represented England at every level and played every minute of every match when England won the 2014 UEFA European Under-17 Championship. He made his debut for the England senior team in November 2017.</Text>
        <Text 
                          style={styles.readmore} 
                          onPress={() => openWebsite('https://en.wikipedia.org/wiki/Joe_Gomez')}>...Read More
        </Text>
    <Text style={styles.cardFooter}></Text>

</View>
    </View>

       <View style={[styles.card, styles.cardElevated]}>
<Image
source={
    require('./isak.jpg')
} 
style={styles.cardImage}
/>
<View style={styles.cardBody}>
    <Text style={styles.playerName}>
Alexander Isak    </Text>
    <Text style={styles.playerPosition}>Striker</Text>
    <Text style={styles.playerDescription} numberOfLines={8}>Alexander Isak ( born 21 September 1999) is a Swedish professional footballer who plays as a striker for Premier League club Liverpool and the Sweden national team. He is widely regarded as one of the best strikers in the world.Born and raised in Solna, Sweden, Isak began his professional career with boyhood club AIK in 2016. He then went on to represent Borussia Dortmund and Willem II before signing with Real Sociedad in 2019. In 2022, Isak joined Newcastle United for a club-record fee. In 2025, he signed for Liverpool for £125 million, breaking both the club and British transfer fee records.</Text>
       <Text 
                          style={styles.readmore} 
                          onPress={() => openWebsite('https://en.wikipedia.org/wiki/Alexander_Isak')}>...Read More
        </Text>
    <Text style={styles.cardFooter}></Text>

</View>
    </View>

       <View style={[styles.card, styles.cardElevated]}>
<Image
source={
    require('./fede.png')
} 
style={styles.cardImage}
/>
<View style={styles.cardBody}>
    <Text style={styles.playerName}>
        Federico Chiesa
    </Text>
    <Text style={styles.playerPosition}>Winger</Text>
    <Text style={styles.playerDescription} numberOfLines={8}>Federico Chiesa ( born 25 October 1997) is an Italian professional footballer who plays as a forward and winger for Premier League club Liverpool and the Italy national team.

The son of former professional footballer Enrico Chiesa, he came through Fiorentina's youth academy, Chiesa made his first-team debut in 2016. He stayed at the club for four years, scoring 34 goals in 153 appearances in all competitions. Chiesa moved to Juventus in the 2020–21 season, winning the Coppa Italia and Supercoppa Italiana in his first season. He won another Coppa Italia in 2024, after which he was signed by English club Liverpool, where he won the Premier League title in his first season.</Text>
        <Text 
                          style={styles.readmore} 
                          onPress={() => openWebsite('https://en.wikipedia.org/wiki/Federico_Chiesa')}>...Read More
        </Text>
    <Text style={styles.cardFooter}></Text>

</View>
    </View>

       <View style={[styles.card, styles.cardElevated]}>
<Image
source={
    require('./endo.png')
} 
style={styles.cardImage}
/>
<View style={styles.cardBody}>
    <Text style={styles.playerName}>
       Wataru Endō
    </Text>
    <Text style={styles.playerPosition}>Defensive Midfilder</Text>
    <Text style={styles.playerDescription} numberOfLines={8}>Wataru Endō ( born 9 February 1993) is a Japanese professional footballer who plays as a Wataru Endō for Premier League club Liverpool and captains the Japan national team.
Endō began his career at J1 League club Shonan Bellmare before moving to Urawa Red Diamonds in 2016, where he won the league title and the 2017 AFC Champions League. In 2018, he joined Sint-Truiden of the Belgian Pro League, before being loaned to Bundesliga club VfB Stuttgart in 2019. He signed permanently with Stuttgart in April 2020, captaining them during his final season in Germany. Endō joined Liverpool in August 2023.</Text>
      <Text 
                          style={styles.readmore} 
                          onPress={() => openWebsite('https://en.wikipedia.org/wiki/Wataru_Endo')}>...Read More
        </Text>
    <Text style={styles.cardFooter}></Text>

</View>
    </View>

     <View style={[styles.card, styles.cardElevated]}>
<Image
source={
    require('./Bardley.png')
} 
style={styles.cardImage}
/>
<View style={styles.cardBody}>
    <Text style={styles.playerName}>
       Conor Bradley

    </Text>
    <Text style={styles.playerPosition}>Right Back</Text>
    <Text style={styles.playerDescription} numberOfLines={8}>Conor Bradley (born 9 July 2003) is a Northern Irish professional footballer who plays as a right-back for Premier League club Liverpool and captains the Northern Ireland national team. Conor Bradley was born on 9 July 2003 in Castlederg, County Tyrone,where he was raised. He played Gaelic football for his local club, Aghyaran St Davog's, with his ability noticeable from a young age. He attended the Christian Brothers Grammar School in Omagh, being fast tracked through the school to complete his GCSEs. His father, Joe Bradley, died at home in Killen, County Tyrone, in February 2024, following a period of ill health.</Text>
      <Text 
                          style={styles.readmore} 
                          onPress={() => openWebsite('https://en.wikipedia.org/wiki/Conor_Bradley')}>...Read More
        </Text>
    <Text style={styles.cardFooter}></Text>

</View>
    </View>

     <View style={[styles.card, styles.cardElevated]}>
<Image
source={
    require('./mamrdas.jpg')
} 
style={styles.cardImage}
/>
<View style={styles.cardBody}>
    <Text style={styles.playerName}>
Giorgi Mamardashvili    </Text>
    <Text style={styles.playerPosition}>Goalkeeper</Text>
    <Text style={styles.playerDescription} numberOfLines={8}>Giorgi Mamardashvili GhO ( born 29 September 2000) is a Georgian professional footballer who plays as a goalkeeper for Premier League club Liverpool and the Georgia national team.

Mamardashvili spent much of his youth years at Dinamo Tbilisi. After signing a professional contract with this club, he was loaned to other Erovnuli Liga teams for three seasons before his transfer to Valencia. He has quickly established himself as a first-choice shot-stopper, becoming the first ever Georgian goalkeeper in the Spanish top tier.</Text>
      <Text 
                          style={styles.readmore} 
                          onPress={() => openWebsite('https://en.wikipedia.org/wiki/Giorgi_Mamardashvili')}>...Read More
        </Text>
    <Text style={styles.cardFooter}></Text>

</View>
    </View>

    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
fontSize:24,
fontWeight:'bold',
paddingHorizontal:8,
color:'white',
    },
    card:{
        width:380,
        height:400,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:8
    },
readmore: {},

cardElevated: {
    backgroundColor: 'white',
    elevation: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: 'black',
    flexDirection: 'row', 
    height: 'auto',      
    minHeight: 245,  
    marginHorizontal: 8,    
},

cardImage: {
    height: 'auto',
    width: 160,          // Slightly narrower looks better in a row
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6, // Match the bottom left too
},

cardBody: {
    flex: 1,             // Important: Tells text to take the remaining width
    paddingHorizontal: 12,
    paddingVertical: 10,
},
    playerName:{
        color:'red',
        fontSize:24,
        fontWeight:'bold',
        marginBottom:0

    },
    playerPosition:{
        color:'red',
        fontSize:16,
        marginTop:0,
        marginBottom:4,
       
    },
    playerDescription:{
         color:'black',
        fontSize:12,
        marginTop:2,
        marginLeft:2
    },
    cardFooter:{
         color:'black',
        fontSize:8,
    }
})