import React from 'react'

export default class Dashboard extends React.Component {
    state = {
        balls: 0,
        strikes: 0
    }

    render() {
        return(
            <div>
                <form>
                    <h1>Hello</h1>
                    <button>Strike</button>
                    <button>Ball</button>
                    <button>Foul</button>
                    <button>Hit</button>
                </form>
            </div>
        )
    }
}