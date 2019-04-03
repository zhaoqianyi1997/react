import React, { Component } from 'react';
import store from './store';

export default class Counter extends Component {
    constructor(){
        super();
        this.state = {
            num:store.getState().counter
        }
        store.subscribe(()=>{
            this.setState({
                num:store.getState().counter
            })
        });
    }
    handleAdd = ()=>{
        let action = {type:'ADD'};
        store.dispatch(action);
    }
    handleSub = ()=>{
        let action = {type:'SUB'};
        store.dispatch(action);
    }
    handleOdd = ()=>{
        let action = {type:'ADD'};
        if(store.getState()%2 !== 0){
            store.dispatch(action);
        }
    }
    handleAsync = ()=>{
        let action = {type:'ADD'};
        setTimeout(function () {
            store.dispatch(action);
        }, 1000)
    }
    render() {
        return (
            <div>
                <p>
                    Clicked: <span>{this.state.num}</span> times
                    <button onClick={this.handleAdd}>+</button>
                    <button onClick={this.handleSub}>-</button>
                    <button onClick={this.handleOdd}>Increment if odd</button>
                    <button onClick={this.handleAsync}>Increment async</button>
                </p>
            </div>
        )
    }
}
