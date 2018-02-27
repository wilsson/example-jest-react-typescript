import * as React from "react";

interface CounterState{
    count: number;
}

export class Counter extends React.Component<undefined, CounterState> {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increment = (): void => {
        console.log("increment");
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return(
            <div>
                <h1>counter</h1>
                <button onClick = { this.increment }>click me</button>
                <div>{ this.state.count }</div>
            </div>
        )
    }
}