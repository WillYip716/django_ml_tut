import React from 'react';
//import axios from 'axios';
import {Link} from 'react-router-dom';


class Home extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            loading: true,
            posts: [],
        };
    }

    componentDidMount() {

    }

    render(){

        return(
            <div>
                <h1>Home</h1> 
            </div>
        )
    }  
}

export default Home;