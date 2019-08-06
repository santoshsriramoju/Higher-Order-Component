import React from 'react'
import withCounter from './withCounter';

class ClickCounter extends React.Component {


   render() {
        const { count, increment } = this.props;
        return (
            <div style={{ textAlign: "center", margin: '50px' }}>
                <button onClick={increment}> Clicked {count} times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter);