import React, {Component} from 'react'
import {ImageBackground, Text, StyleSheet, View, TextInput, TouchableOpacity, Platform, Alert} from 'react-native'

import backgroundImage from '../../assets/imgs/login.jpg'
import commonStyles from '../commonStyles'

import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

import AuthInput from '../components/AuthInput'
import { server, showError, showSuccess } from '../common'

const initialState = {
        email: '',
        password: '',
        name: '',
        confirmPassword: '',
        stageNew: false
}

export default class Auth extends Component {

    state = {
        ...initialState
    }

    signInOrSignup = () => {
        if(this.state.stageNew){
            this.signup()
        }
        else {
            this.signin()
        }
    }

    signup = async () => {
        try{
            await axios.post(`${server}/signup`, {
                email: this.state.email,
                password: this.state.password,
                name: this.state.name,
                confirmPassword: this.state.confirmPassword,
            })

            showSuccess('Usuario cadastro')
            this.setState({...initialState})
        }
        catch(e){
            showError(e)
        }
    }

    signin = async () => {
        try{
            const res = await axios.post(`${server}/signin`, {
                email: this.state.email,
                password: this.state.password
            })

            AsyncStorage.setItem('userData', JSON.stringify(res.data))
            axios.defaults.headers.common['Authorization'] = `bearer ${res.data.token}`
            this.props.navigation.navigate('Home', res.data)
        }
        catch(e){
            showError(e)
        }
    }

    render(){
        const validations = []
        validations.push(this.state.email && this.state.email.includes('@'))
        validations.push(this.state.password && this.state.password.length >= 6)
        
        if(this.state.stageNew){
            validations.push(this.state.name && this.state.email.trim().length >= 3)
            validations.push(this.state.password === this.state.confirmPassword)
        }

        const validForm = validations.reduce((t,a) => t && a)

        return (
            <ImageBackground style={styles.background} source={backgroundImage}>
                <Text style={styles.title}>Tasks</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.subtitle}>
                        {
                            this.state.stageNew ? 'Crie a sua conta' : 'Informe os seus dados'
                        }
                    </Text>
                    {this.state.stageNew &&
                        <AuthInput icon='user' placeholder='Nome'
                            value={this.state.name}
                            style={styles.input}
                            onChangeText={name => this.setState({ name })} />
                    }
                    <AuthInput icon='at' placeholder='E-mail'
                        value={this.state.email}
                        style={styles.input}
                        onChangeText={email => this.setState({ email })} />
                    <AuthInput icon='lock' placeholder='Senha'
                        value={this.state.password}
                        style={styles.input} secureTextEntry={true}
                        onChangeText={password => this.setState({ password })} />
                    {this.state.stageNew &&
                        <AuthInput icon='asterisk'
                            placeholder='Confirmação de Senha'
                            value={this.state.confirmPassword}
                            style={styles.input} secureTextEntry={true}
                            onChangeText={confirmPassword => this.setState({ confirmPassword })} />
                    }
                    <TouchableOpacity onPress={this.signInOrSignup} disabled={!validForm}>
                        <View style={[styles.button, validForm ? {} : {backgroundColor: '#AAA'}]}>
                            <Text style={styles.buttonText}>
                                {
                                    this.state.stageNew ? 'Registrar' : 'Entrar'
                                }
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{padding:10}} onPress={() => this.setState({stageNew: !this.state.stageNew})}>
                    <Text style={styles.buttonText}>
                        {
                            this.state.stageNew ? 'Já possui conta?' : 'Ainda não possui conta?'
                        }
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 70,
        marginBottom: 10
    },
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    formContainer: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: 20,
        width: '90%'
    },
    input: {
        marginTop: 10,
        backgroundColor: '#FFF',
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 7
    },
    buttonText: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10
    }
})