import React, { Component } from 'react';
import { View, Image, Button, TouchableOpacity, Text, TextInput, Alert } from 'react-native';


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
				this.props.navigation.navigate('Home')
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

	export default Login;