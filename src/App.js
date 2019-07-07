import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component{
    // Render : componentWillMount() -> render() -> componentDidMount()
    // Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
    state = {
        greeting: 'Hello!',
        movies:[]
    };

    componentWillMount() {

    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                movies: [
                    {
                        title: 'SPIDER-MAN'
                        , poster: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/5uYQ/image/pUx6uZy-Bf2tgJOYKryDAqi6-oM'
                    }
                    , {
                        title: 'Matrix'
                        , poster: 'https://t1.daumcdn.net/movie/e49c2e4eb419a9813228b5ab6bc5b039362236ea'
                    }
                    , {
                        title: 'Star Wars'
                        , poster: 'https://t1.daumcdn.net/movie/482efb8c0a1a4b1871f7770657e018dd72d16dfa'
                    }
                    , {
                        title: 'Star Trek'
                        , poster: 'http://hsy.adfeel.biz/wp-content/uploads/2017/09/3717408275_20170915091125_7057280843.jpg'
                    },
                    {
                        title: 'Toy Story'
                        , poster: 'http://img.movist.com/?img=/x00/05/11/57_p1.jpg'
                    }
                ]
            })
        }, 5000);
    }

    _renderMovies = ()=> {
        const movies = this.state.movies.map((movie, index) => {
            return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })
        return movies;
    }

    render(){
        return (
            <div className="App">
                {this.state.movies ? this._renderMovies() : this.greeting}
            </div>
        );
    }
}

export default App;
