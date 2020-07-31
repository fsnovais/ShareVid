import React, { Component } from 'react';
import { View, Button, Text,StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import styles from './estilo'


class Home extends Component {

	render() {
		return (

			<View style={styles.container}>
				<View >
					<Text style={styles.header}>Lotação de Espaços</Text>
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
				<View style={styles.visitInformation}>
					<View >
						<Text style={styles.title}>Proximo a você, esses são os locais com baixa lotação</Text>
					</View>
					<View style={styles.row}>
						<View style={styles.column}>
							<Text style={styles.p}>Academia Fit Smart </Text>
							<Text style={styles.p}>Lanchonete Lanche's Gulosos	</Text>
							<Text style={styles.p}>Lojas Americanas	</Text>
							<Text style={styles.p}>Restaurante Vila K</Text>
						</View>
						<View style={styles.column}>
							<Text>08:00 as 22:00</Text>
							<Text>06:30 as 18:30</Text>
							<Text>08:00 as 22:00</Text>
							<Text>11:00 as 23:30</Text>
						</View>
					</View>
					<View style={{ margin: 20 }}>
						<Button title="Agendar Visita" />
					</View>
					{/* <View >
						<Text >Você está em SIS QL 12 Lago Sul</Text>
					</View> */}
					</View>
			</View>
		);
	}
}

export default Home;