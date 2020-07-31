import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import styles from './estilo'


class Pontos extends Component {

    render() {
        return (

            <View style={styles.container}>
                <View >
                    <Text >Meus Pontos</Text>
                    <View >
                        <Text >Fique seguro.</Text>
                        <Text>Economize.</Text>
                        <Text>Os pontos podem ser trocados por descontos nas lojas parceiras ou por ingressos de eventos</Text>
                    </View>
                    <View >
                        <Text >Restaurantes</Text>
                        <Text>2</Text>
                    </View>
                    <View >
                        <Text >Academias 2</Text>
                        <Text>2</Text>
                    </View>
                    <View >
                        <Text >Outros</Text>
                        <Text>2</Text>
                    </View>
                    <View >
                        <Text >Total</Text>
                        <Text>1200</Text>
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