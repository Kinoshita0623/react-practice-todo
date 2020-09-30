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
            </div>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<App/>, app);