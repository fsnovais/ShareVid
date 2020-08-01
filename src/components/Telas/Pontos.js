import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import styles from './estilo'


class Pontos extends Component {

    render() {
        return (

            <View style={styles.container}>
                <View >
                    <Text style={styles.title} >Meus Pontos</Text>
                    <View >
                        <Text style={styles.p} >Fique seguro.</Text>
                        <Text style={styles.p}>Economize.</Text>
                        <Text style={styles.p}>Os pontos podem ser trocados por descontos nas lojas parceiras ou por ingressos de eventos</Text>
                    </View>
                    <View >
                        <Text style={styles.p} >Restaurantes</Text>
                        <Text style={styles.p}>2</Text>
                    </View>
                    <View >
                        <Text style={styles.p} >Academias 2</Text>
                        <Text style={styles.p}>2</Text>
                    </View>
                    <View >
                        <Text style={styles.p} >Outros</Text>
                        <Text style={styles.p}>2</Text>
                    </View>
                    <View >
                        <Text style={styles.p} >Total</Text>
                        <Text style={styles.p}>1200</Text>
                    </View>
                    <View style={{ margin: 20 }}>
                        <Button title="Trocar pontos" />
                    </View>
                </View>
            </View>
        );
    }
}

export default Pontos;