import React, { Component } from 'react';
import { View, Button, Text,StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import styles from './estilo'


class Home extends Component {

	render() {
		return (

			<View style={styles.container}>
				<View >
					<Text >Lotação de Espaços</Text>
				</View>
				<View style={styles.mapa}>
					<MapView style={StyleSheet.absoluteFillObject}
						region={{
							latitude: -15.766469,
							longitude: -47.893807,
							latitudeDelta: 0.01,
							longitudeDelta: 0
						}}>
					</MapView>
				</View>
				<View >
					<Text >Proximo a você, esses são os locais com baixa lotação</Text>
				</View>
				<View >
					<Text >Academia Fit Smart	08:00 as 22:00</Text>
					<Text >Lanchonete Lanche's Gulosos	06:30 as 18:30</Text>
					<Text >Lojas Americanas	08:00 as 22:00</Text>
					<Text >Restaurante Vila K -	11:00 as 23:30</Text>
				</View>
				<View style={{ margin: 20 }}>
					<Button title="Agendar Visita" />
				</View>
				<View >
					<Text >Você está em SIS QL 12 Lago Sul</Text>
				</View>
			</View>
		);
	}
}

export default Home;