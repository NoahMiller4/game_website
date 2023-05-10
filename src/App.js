import Header from './components/Header';
import Games from './components/Games';
import Banner from './components/Banner';
import Footer from './components/Footer';
import './style/base.css'

function App() {
  let title = 'Steam Games';
  let games = [
    {
      id: 1,
      "name": "Cyberpunk 2077",
      "image": "https://i.etsystatic.com/13367669/r/il/4e4b31/3270863248/il_570xN.3270863248_l1cg.jpg",
      "link": "https://store.steampowered.com/app/1091500/Cyberpunk_2077/"
    },
    {
      id: 2,
      "name": "Elden Ring",
      "image": "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/3UwtyLer3xjXOX2qlhunnvnJ.png",
      "link": "https://store.steampowered.com/app/1245620/ELDEN_RING/"
    },
    {
      id: 3,
      "name": "Star Wars: Jedi Survivor",
      "image": "https://pbs.twimg.com/media/Fk-l_AEWAAE5_Jy?format=jpg&name=4096x4096",
      "link": "https://store.steampowered.com/app/1774580/STAR_WARS_Jedi_Survivor/"
    },
    {
      id: 4,
      "name": "Hollow Knight",
      "image": "https://images.igdb.com/igdb/image/upload/t_original/co1rgi.webp",
      "link": "https://store.steampowered.com/app/367520/Hollow_Knight/"
    },
    {
      id: 5,
      "name": "Guardians of the Galaxy",
      "image": "https://upload.wikimedia.org/wikipedia/en/2/22/Guardians_of_the_Galaxy_game_cover_art.jpg",
      "link": "https://store.steampowered.com/app/1088850/Marvels_Guardians_of_the_Galaxy/"
    }
]

return (
    <> 
    <Header title={title}/>
    <main>
      <div className='container'>
        <Banner />
        <Games games={games}/>
      </div>
    </main>
    <Footer />
    </>
  );
}

export default App;