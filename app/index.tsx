import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { colors } from '../constants/colors'
import { Link } from 'expo-router'

export default function Index(){
  return(

    
    
    <View style={styles.container}>
      <Image style={styles.logo}
        source={require('../assets/images/logo.png')}
      />

      <Text style={styles.title}>
      HealthyDiet<Text style={{ color: colors.white }}>.AI</Text>
      </Text>

      <Text style={styles.text}>
        Sua dieta feita atráves da inteligência artificial do Google
      </Text>

      <Link href="/step" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Gerar dieta</Text>
        </Pressable>
      </Link>

      <Image style={styles.gemine}
        source={require('../assets/images/google-gemini-256.png')}
      />

  

      <Text style={styles.creditos}>
        Desenvolvido por: faelnrj
      </Text>

    </View>

    
  )
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.background,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    
  },

  logo: {
    position:'absolute',
    maxHeight: 250,
    maxWidth: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    top: 100,
  },
  title:{
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.lightPurple,
    top: 180,
  },
  text:{
    fontSize: 16, 
    color: colors.white,
    width: 240,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 8,
    fontWeight: 'bold',
    top: 180,
    
  },
  button:{
    backgroundColor: colors.blue,
    width: 300,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 34,
    top: 180,
  },
  buttonText:{
    color: colors.white,
    fontSize: 25,
    fontWeight: 'bold'
  },
  gemine: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 180,
  },

  creditos: {
    fontSize: 16, 
    color: colors.white,
    width: 140,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 8,
    fontWeight: 'bold',
    top: 100,
  }


})