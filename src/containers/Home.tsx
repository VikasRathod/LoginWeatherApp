import React from 'react';
import Weather from './Weather';

export default class Home extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <h1>Hello Blizz</h1>
                <Weather />
            </div>
        )
    }
}
