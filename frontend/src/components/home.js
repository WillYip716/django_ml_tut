import React from 'react';
import axios from 'axios';
//import {Link} from 'react-router-dom';


class Home extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            loading: true,
            posts: [],
        };
    }

    componentDidMount() {

        axios.get('/api/posts')
        .then(res => {
            const posts = res.data;
            this.setState((state) => ({
                loading: false,
                posts: posts,
            }));  
        })

    }

    render(){
        let l = this.state.posts.length;
        let items = [];

        for (var i = 0; i <l;i++) {
            items.push(
                <div key={this.state.posts[i].id}>
                    <h3>{unescape(this.state.posts[i].title)}</h3>
                    <p>{unescape(this.state.posts[i].message)}</p>
                </div>
            )
        }



        return(
            <div>
                {this.state.loading        
                ? <h1>Hello i am loading</h1>
                :<div>
                    <h1 style={{textAlign:"center"}}>LATEST POSTS</h1>
                    <hr/>
                    {items}
                </div>
            }
            </div>
        )
    }  
}

export default Home;