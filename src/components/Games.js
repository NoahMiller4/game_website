import PropTypes from 'prop-types';

Games.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    link: PropTypes.string,
    id: PropTypes.number
}


function Games(props) {

    return (
    <div className="grid lg-5">
        {props.games.map(game => (
            <figure key={game.id}>
                <img className='cover' alt={game.name} src={game.image} />
                <ul>
                    <li>
                        <a target="blank" 
                            href={game.link}>
                            {game.name}
                        </a>
                    </li>
                </ul>
            </figure>
        ))}
        </div>
    )
}

export default Games