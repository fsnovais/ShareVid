import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import styles from './estilo'


class Agenda extends Component {

    render() {
        return (

            <View style={styles.container}>
                <View >
                    <Text >Visitas Agendadas</Text>
                    <View >
                        <Text >Fit Smart</Text>
                        <Text>15:30</Text>
                        <Text>Lotação Média</Text>
                    </View>
                    <View >
                        <Text >Cabeleira Leila</Text>
                        <Text>19:00</Text>
                        <Text>Lotação Baixa</Text>
                    </View>
                    <View >
                        <Text >Padaria Pão Dourado</Text>
                        <Text>Terça às 06:30</Text>
                        <Text>Lotação Média</Text>
                    </View>
                    <View style={{ margin: 20 }}>
                        <Button title="Agendar nova visita" />
                    </View>
                </View>
            </View>
        );
    }
}

export default Agenda;