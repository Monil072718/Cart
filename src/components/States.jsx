import { Component } from 'react'
class States extends Component {

    std = () =>{
        this.setState({
            Name: 'MS'
        });
    }
    constructor() {
        super();
        this.state = {
            Name: 'Monil',
            Age: 22
        };
    }
    render() {
        return (
            <div>
                <h1>{this.state.Name}</h1>
                <h1>{this.state.Age}</h1>
                <button onClick={this.std}>Update</button>

            </div>
        )
    }
}

export default States