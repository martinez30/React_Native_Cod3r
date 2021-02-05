import React , {Component} from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import Estilo from '../estilo'

import MegaNumero from './Numero'

export default class Mega extends Component {
    
    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    alterarQtdeNumero = (qtde) => {
        this.setState({ qtdeNumeros: +qtde })
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    // gerarNumeros = () => {
    //     const numeros = Array(this.state.qtdeNumeros)
    //         .fill()
    //         .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
    //         .sort((a,b) => a - b)
    //     this.setState({ numeros })
    // }

    gerarNumeros = () => {
        const {qtdeNumeros} = this.state
        const numeros = []
        for(let i = 0; i < qtdeNumeros; i++){
            numeros.push(this.gerarNumeroNaoContido(numeros))
        }

        numeros.sort((a,b) => a - b)

        this.setState({numeros})
    }

    exibirNumeros = () => {
        const nums = this.state.numeros;
        return nums.map(num => {
            return <MegaNumero num={num} />
        })
    }

    render() {
        return(
            <>
            <Text style={Estilo.fontG}>
                Gerador de Mega Sena 
            </Text>
            <TextInput 
                keyboardType={'numeric'}
                style={{borderBottomWidth: 1}}
                placeholder="Quantidade de Números"
                value={`${this.state.qtdeNumeros}`}
                onChangeText={this.alterarQtdeNumero}
                />
                <Button title="Gerar"
                    onPress={this.gerarNumeros}
                />
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }


}