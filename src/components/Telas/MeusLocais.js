import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import styles from './estilo'


class MeusLocais extends Component {

    render() {
        return (

            <View style={styles.container}>
                <View >
                    <Text >Meus Locais</Text>
                    <View >
                        <Text >Esses são os locais frequentes</Text>
                    </View>
                    <View >
                        <Text >Fit Smart</Text>
                        <Text>15:30</Text>
                    </View>
                    <View >
                        <Text >Cabeleira Leila</Text>
                        <Text>19:00</Text>
                    </View>
                    <View >
                        <Text >Padaria Pão Dourado</Text>
                        <Text>Terça às 06:30</Text>
                    </View>
                    <View >
                        <Text >Padaria Pão Dourado</Text>
                        <Text>Terça às 06:30</Text>
                    </View>
                    <View style={{ margin: 20 }}>
                        <Button title="Agendar Visita" />
                    </View>
                </View>
            </View>
        );
    }
}

export default MeusLocais;