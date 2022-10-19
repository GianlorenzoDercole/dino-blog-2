import React, {Component} from 'react'


export default class Clac extends Component {
    // app state for the controlled form
    state = {
        num1: 0,
        num2: 0,
        sum: 0,
        operator: '+'
    }
    // event handler methods
    calculate = e => {
        e.preventDefault()
        // this.setState({sum: this.state.num1 + this.state.num2})




        this.setState(prevState => {

            let result = 0
        // switch case based on the operator
        switch (this.state.operator) {
            case '+':
                result = prevState.num1 + prevState.num2
                break
            case '-':
                result = prevState.num1 - prevState.num2
                break
            case '*':
                result = prevState.num1 * prevState.num2
                break
            case '/':
                result = prevState.num1 / prevState.num2
                break
            default:
                console.log('no')
                break

        }

            return { sum: result}
        })
    }

    setNum = e => {
        this.setState({[e.target.name]: Number(e.target.value)})
    }

    handleOperatorChange = e => {
        this.setState({operator: e.target.value})
    }
  render() {
    return (
        <div >
        <h1>Add with React!</h1>

        <form onSubmit={this.calculate}>
            <input type="number"
                name="num1"
                value={this.state.num1}
                onChange={this.setNum}
            />
            <select
                name='operator'
                onChange={this.handleOperatorChange}
            >
                <option value='+'>+</option>
                <option value='-'>-</option>
                <option value='*'>*</option>
                <option value='/'>/</option>
            </select>
            <input type="number"
                name="num2"
                value={this.state.num2}
                onChange={this.setNum}
            />
            <button>=</button>
            <h3>{this.state.sum}</h3>
        </form>
    </div>
    )
  }
}
