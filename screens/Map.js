import * as React from 'react';
import { View, StyleSheet, Image, Text, Linking} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';

const pinCoordinates = [
  {
    id: 1,
    coordinates_x: 28.6877358,
    coordinates_y: -106.0393637
  },
  {
    id: 2,
    coordinates_x: 28.704638,
    coordinates_y: -106.1486155
  },
  {
    id: 3,
    coordinates_x: 28.606843,
    coordinates_y: -106.036282
  },
  {
    id: 4,
    coordinates_x: 28.606843,
    coordinates_y: -106.1486155
  }
];

class Map extends React.Component {
  state = {
    coordinates: [
      {
        id: 1,
        coordinates_x: 28.6877358,
        coordinates_y: -106.0393637
      },
      {
        id: 2,
        coordinates_x: 28.704638,
        coordinates_y: -106.1486155
      },
      {
        id: 3,
        coordinates_x: 28.606843,
        coordinates_y: -106.036282
      },
      {
        id: 4,
        coordinates_x: 28.606843,
        coordinates_y: -106.1486155
      }
    ]
  }

  render() {
    return(
    <View style={styles.body}>
      <MapView
        style={styles.map}
        initialCamera={{
          center: { latitude: 28.6877358, longitude: -106.0393637 },
          pitch: 0,
          zoom: 12,
          heading: 0,
          altitude: 1000,
        }}
        provider={PROVIDER_GOOGLE}>
        {this.state.coordinates.map((marker) =>{
          return <Marker
            key={marker.id}
            coordinate={{latitude:marker.coordinates_x, longitude:marker.coordinates_y}}>
              <Image
                source={require('../images/marker.png')}
                style={styles.image}/>
            </Marker>
        })}
      </MapView>
      <Text>
        If you want to feedback us, <Text style={styles.textLink} onPress={()=>{Linking.openURL('https://facebook.com')}}>click here</Text> 
      </Text>
    </View>
    )
  }
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '95%'
  },
  image: {
    width:30,
    height:35,
    resizeMode:'contain'
  },
  textLink:{
   color:'blue',
   textDecorationLine:'underline',
   
  }

});

export default Map;