

const withCounter = (wrappedComponent) =>{
import React, { Component } from 'react'

export default class sample extends Component {
    render() {
        return (
            <div>
             <wrappedComponent name="bhui"/>   
            </div>
        )
    }
}

return withCounter;

}