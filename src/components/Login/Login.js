import React, { Component } from 'react';
import { StyleSheet, View, Image, Button, TouchableOpacity, Text, TextInput, Alert } from 'react-native';


class Login extends Component {

	constructor(props) {
		super(props);

		this.state = {
			inputEmail: '',
			inputPass: '',
		};

	};

	validarLogin = async () => {

		const {inputEmail, inputPass } = this.state;
		if ((inputEmail == '' && inputPass == "") || (inputEmail == '' || inputPass == "")) {
			Alert.alert('Insira usuário e/ou senha.');

		}
		else {
			try {
				// Comando para autenticar as variáveis no banco
				//this.props.navigation.navigate('Mapa')
			}
            catch(err){
                Alert.alert('Usuario ou senha invalidos.');  
            }	
		}
		}
	
		render() {
			return (

				<View style={styles.container}>

					<View style={styles.inner}>
						<Image style={styles.image} source={require('../images/logo.png')} />
					</View>

					<View style={styles.form}>
						<View style={styles.formcontainer}>
							<TextInput style={styles.input}
								onChangeText={inputEmail => this.setState({ inputEmail })}
								autoCapitalize='none'
								autoCorrect={false}
								keyboardType='email-address'
								placeholder='E-mail'
								placeholderColor='rgba(255,255,255,0.7)'
							/>
							<TextInput style={styles.input}
								placeholder='Senha'
								onChangeText={inputPass => this.setState({ inputPass })}
								placeholderColor='rgba(255,255,255,0.7)'
								secureTextEntry={true}re />
							<View style={{ margin: 20 }}>
								<Button title="Fazer Login" onPress={this.validarLogin} />
							</View>
						</View>
						<TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('Cadastro')} >
							<Text style={styles.textButtons}> Criar conta gratuita </Text>
						</TouchableOpacity>
					</View>
				</View>
			);
		}
	}

	const styles = StyleSheet.create({
		container: {
			backgroundColor: '#292929',
			flex: 1,
		},
		formcontainer: {
			padding: 20
		},

		form: {
			justifyContent: 'center',
			alignItems: 'center',
			flexGrow: 1
		},

		inner: {
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			flexGrow: 1,

		},

		image: {
			width: 300,
			height: 300,
		},
		input: {

			height: 60,
			width: 300,
			borderRadius: 20,
			margin: 10,
			backgroundColor: 'rgba(255,255,255,0.2)',
			padding: 10,
			color: 'white'

		},


		textButtons: {
			color: '#fff',
			textAlign: 'center',
			fontWeight: '700',
			fontSize: 15,
			marginTop: -5

		}
	});
	Login.navigationOptions = {
		header: null,
	};


	export default Login;