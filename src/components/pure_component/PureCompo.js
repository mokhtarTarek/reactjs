//snipet rpce
import React, { PureComponent } from 'react'

class PureCompo extends PureComponent {
    render() {
        console.log('---------Pure comp render')

        return (
            <div>
                pure component {this.props.name}
            </div>
        )
    }
}

export default PureCompo
