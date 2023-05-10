import { Component } from 'react'

class Header extends Component {
  render() {
    const { title } = this.props;

    return (
        <header>
            <div className='container flexbox'>
                <h1>{title}</h1>
                <div className='imgs'>
                  <img alt='home' src='https://img.icons8.com/?size=512&id=73&format=png'></img>
                  <img alt='controller' src='https://img.icons8.com/?size=512&id=7314&format=png'></img>
                  <img alt='pac-man' src='https://img.icons8.com/?size=512&id=oSuP3ZL4wO3j&format=png'></img>
                  <img alt='settings' src='https://img.icons8.com/?size=512&id=4l0lYNKvUGhj&format=png'></img>
                </div>
            </div>
        </header>
    )
  }
}

export default Header;