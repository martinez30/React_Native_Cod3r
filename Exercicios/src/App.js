import React from 'react'
import { SafeAreaView , StyleSheet } from 'react-native'

// import Mega from './components/mega/Mega'
// import FlexboxV4 from './components/layout/FlexboxV4'
// import FlexboxV3 from './components/layout/FlexboxV3'
// import FlexboxV2 from './components/layout/FlexboxV2'
// import FlexboxV1 from './components/layout/FlexboxV1'
// import DigiteSeuNome from './components/DigiteSeuNome'
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
// import ListaProdutos from './components/produtos/ListaProdutos'
// import UsuarioLogado from './components/UsuarioLogado'
// import Familia from './components/relacao/Familia'
// import Membro from './components/relacao/Membro'
// import ParImpar from './components/ParImpar'
// import Diferenciar from './components/Diferenciar'
// import ContadorV2 from './components/contador/ContadorV2'
// import Pai from './components/indireta/Pai'
// import Pai from './components/direta/Pai'
// import Filho from './components/direta/Filho'
// import Contador from './components/Contador'
// import Botao from './components/Botao'
// import Titulo from './components/Titulo'
// import Primeiro from './components/Primeiro'
// import CompPadrao, { Comp1, Comp2 } from './components/Multi'
// import MinMax from './components/MinMax'
// import Aleatorio from './components/Aleatorio'

export default () => (
    <SafeAreaView style={style.App}>

        {/* <Mega qtdeNumeros={12}/> */}
        {/* <FlexboxV4 /> */}
        {/* <FlexboxV3 /> */}
        {/* <FlexboxV2 /> */}
        {/* <FlexboxV1 /> */}
        {/* <DigiteSeuNome /> */}
        {/* <ListaProdutosV2 /> */}
        {/* <ListaProdutos /> */}
        {/* <UsuarioLogado usuario={{nome: 'Gui', email: 'gui@gui.com'}}/> */}
        {/* <UsuarioLogado usuario={{nome: 'Gui'}}/> */}
        {/* <Familia>
            <Membro nome="Paulo" sobrenome="Martins"/>
            <Membro nome="Carlos" sobrenome="Arruda"/>
        </Familia>
        <Familia>
            <Membro nome="Ana" sobrenome="Angelica"/>
            <Membro nome="Cibele" sobrenome="Martins"/>
        </Familia> */}
        {/* <ParImpar num={5}/> */}
        {/* <Diferenciar /> */}
        {/* <ContadorV2 /> */}
        {/* <Pai/> */}
        {/* <Pai /> */}
        {/* <Filho /> */}
        {/* <Contador /> */}
        {/* <Botao /> */}
        {/* <Titulo principal="Cadastro" secundario="Tela de Cadastro de Produto" /> */}
        {/* <MinMax min={3} max={20} />  */}
        {/* <MinMax min={1} max={94} /> */}
        {/* <Aleatorio min={6} max={7}/> */}
        {/* <CompPadrao /> */}
        {/* <Comp1 /> */}
        {/* <Comp2 /> */}
        {/* <Primeiro /> */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
});