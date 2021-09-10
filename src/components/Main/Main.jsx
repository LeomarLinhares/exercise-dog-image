import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import './styles.css';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      image: '',
    }
  };

  apiFetch = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const { message } = await response.json();
    this.setState({ image: message, loading: false });
  }

  componentDidMount() {
    this.apiFetch();
  }

  render() {
    const { loading } = this.state;
    return (
      <main id='main'>
        { loading 
          ? <ReactLoading type='bubbles' color='#fff' /> 
          : <img src={this.state.image} alt="Cachorrinho" /> }
      </main>
    )
  }
}
