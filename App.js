import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import Botao from './src/components/Botao'; 
import Display from './src/components/Display';



const incialState ={
    displayValue : '0', //Valor Inicial da calculadora
    clearDisplay : false, // Se o display precisa ser limpo
    operation: null, // Operador do calculo
    values : [0,0], // Posição dos numeros
    current : 0, // Indice do value
}

export default class App extends Component {
    state = { ...incialState } //... clonar o objeto incialState

    addDigito = n => {
        const clearDisplay = this.state.displayValue ==='0' || this.state.clearDisplay // Vai sempre limpar a tela quando o primeiro numero for 0 
        
        if(n === '.' && !clearDisplay){
            return
        } // Impede que tenha mais de 1 . no numero
        
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({displayValue, clearDisplay:false})

        if(n !== '.'){
            const newValor = parseFloat(displayValue)
            const values =[...this.state.values]
            values[this.state.current] = newValor
            this.setState({values})
        }
    }

    clearMemory = () => {
        this.setState({...incialState})
    }
    setOperation = operation =>{
        if(this.state.current === 0){
            this.setState({operation, current: 1, clearDisplay: true})
        }else{
            const equals = operation === '='
            const values = [...this.state.values]
            try {
                values[0] = 
                eval(`${values[0]} ${this.state.operation} ${values[1]}`)
            } catch (e) {
                values[0] = this.state.values[0]
            }

            values[1] = 0
            this.setState({
                displayValue: `${values[0]}`,
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: true,
                values,

            })
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Display value={this.state.displayValue}/>
                    <View style={styles.buttons}>
                        <Botao label='AC' triple onClick={this.clearMemory}/>
                        <Botao label='/' operation  onClick={this.setOperation}/>
                        <Botao label='7' onClick={this.addDigito}/>
                        <Botao label='8' onClick={this.addDigito}/>
                        <Botao label='9' onClick={this.addDigito}/>
                        <Botao label='*' operation onClick={this.setOperation}/>
                        <Botao label='4' onClick={this.addDigito}/>
                        <Botao label='5' onClick={this.addDigito}/>
                        <Botao label='6' onClick={this.addDigito}/>
                        <Botao label='-'operation onClick={this.setOperation}/>
                        <Botao label='1' onClick={this.addDigito}/>
                        <Botao label='2' onClick={this.addDigito}/>
                        <Botao label='3' onClick={this.addDigito}/>
                        <Botao label='+'operation onClick={this.setOperation}/>
                        <Botao label='0' double onClick={this.addDigito}/>
                        <Botao label='.' onClick={this.addDigito}/>
                        <Botao label='='operation onClick={this.setOperation}/>
                    </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap:'wrap'
  }
});
