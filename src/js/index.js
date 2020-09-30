import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{

    constructor(){
        super();
        this.user = {
            firstName : "食",
            lastName : "パンタ",
            avatarUrl: "https://s3.arkjp.net/misskey/thumbnail-afb5559e-e58d-4141-80a0-0a33eb1f6ecc.jpg"
        };
        
    }

    formatName(user){
        return user.firstName + user.lastName;
    }

    render(){
        return (
            <div>
                <h1>Welcome {this.formatName(this.user)}</h1>
                <img src={this.user.avatarUrl}/>
                <Welcome name="Panta"/>
                <Welcome name="Gouya"/>
                <Welcome name="セイバー"/>

            </div>
        );
    }
}

class Welcome extends React.Component{
    
    render(){
        return (
            <h1>Hello {this.props.name}</h1>
        );
    }
}

function tick(){
    const element = (
        <div>
            <h1>Hello world</h1>
            <h2>It is { new Date().toLocaleTimeString() }</h2>
        </div>
        
    );

    ReactDOM.render(element, document.getElementById("root"));

}

setInterval(tick, 1000);

const app = document.getElementById('app');
ReactDOM.render(<App/>, app);