import { View, Text, ImageBackground, Dimensions, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

const App = () => {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const API_KEY = '645a053239ddf82b6b148105d6b20861'

  const fetchWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    const response = await fetch(url)
    const data = await response.json();
    setWeather(data)

  }


  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  return (
    <View style={{
      alignItems: 'center'
    }}>
      <ImageBackground source={require('../WeatherApp/images/sa.jpg')} style={{ width: width, height: height }}></ImageBackground>

      <View style={{ position: 'absolute', marginTop: 30 }}>
        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', textTransform: 'uppercase' }}>Weather APP</Text>
      </View>
      <View style={{ position: 'absolute', flexDirection: 'row', marginTop: 90, }}>
        <View style={{
          width: width / 2,
          borderRadius: 60,
          borderWidth: 2,
          borderColor: 'white',
        }}>
          <TextInput style={{ paddingHorizontal: 10, color: 'white' }} placeholder='City Name' onChangeText={(text) => setCity(text)} value={city}></TextInput>
        </View>

        <View style={{
          borderWidth: 2,
          borderRadius: 60,
          borderColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
          marginLeft: 10

        }}>
          <TouchableOpacity onPress={fetchWeather}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 14,
              color: 'white'
            }}>Search</Text>
          </TouchableOpacity>
        </View>

      </View>
      <View style={{ position: 'absolute', bottom: height / 1.4 }}>
        {
          weather && weather['name'] &&
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold', textTransform: 'uppercase', lineHeight: 20 }}>{weather.name}</Text>
            <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold', textTransform: 'uppercase', lineHeight: 20 }}>{weather.weather[0].description}</Text>
            <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold', textTransform: 'uppercase', lineHeight: 20 }}>{weather.main.temp} C</Text>
          </View>
        }
      </View>
    </View>
  )
}

export default App