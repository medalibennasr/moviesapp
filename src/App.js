import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import TiTre from "./Components/Hi/TiTre";
import { useState } from "react";
import MyCard from "./Components/MyCard/MyCard";

function App() {
  const [movies, setMovies] = useState([
    {
      id: "01",
      titre: "Sabrina",
      description:
        "She was initially believed to be the daughter of Edward and Diana Spellman, making her half-mortal and half-witch. However, it was later revealed that her actual father was the Dark Lord.",
      
      photo:
        "https://i0.wp.com/essentiallypop.com/epop/wp-content/uploads/2020/01/sabrina-1.jpg?fit=1080%2C1350&ssl=1",
      
      rate: "1" ,
      },
    {
      id: "02",
      titre: "The Witcher",
      description:
        "Hexer Geralt reprend la mission inachevée d'un autre sorceleur dans un royaume traqué par une bête féroce. Yennefer se forge un avenir magique au prix d'un terrible sacrifice.",

      photo:
        "https://fr.web.img6.acsta.net/pictures/19/12/12/12/13/2421997.jpg",
        rate: "5" ,
    },

    {
      id: "03",
      titre: "Harry Potter",
      description:
        "Harry Potter is an orphaned boy brought up by his unkind Muggle (non-magical) aunt and uncle. At the age of eleven, half-giant Rubeus Hagrid informs him that he is actually a wizard and that his parents were murdered by an evil wizard named Lord Voldemort.",

      photo:
        "https://th.bing.com/th/id/OIP.sNWPAEJC3O0_l0SQ_gtzFAHaJ4?pid=ImgDet&rs=1",

        rate: "5" ,
    },
    {
      id: "04",
      titre: "Fantastic Beasts",
      description:
        "Fantastic Beasts and Where to Find Them is a 2016 fantasy film directed by David Yates. A joint British and American production, it is a spin-off of and prequel to the Harry Potter film series",

      photo:
        "https://upload.wikimedia.org/wikipedia/en/3/3c/Fantastic_Beasts_-_The_Crimes_of_Grindelwald_Poster.png",
    
        rate: "3" ,
      },
    {
      id: "05",
      titre: "Game of Thrones",
      description:
        "Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO. It is an adaptation of A Song of Ice and Fire, a series of fantasy novels by George R. R. Martin",

      photo:
        "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_FMjpg_UX1000_.jpg",
    
        rate: "4" ,
      },

    {
      id: "06",
      titre: "Vikings",
      description:
        "The Vikings is a 1958 epic historical fiction swashbuckling film directed by Richard Fleischer and filmed in Technicolor. It was produced by Jerry Bresler and stars Kirk Douglas.",

      photo:
        "https://m.media-amazon.com/images/M/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
        rate: "3" ,
      },
  ]);
  const [filterByName, setFilterByName] = useState("");

  const [rateByName, setRateByName] = useState(0);


  const addMovie = (newMovie) => {
    return setMovies([...movies, newMovie]);
  };
  return (
    <div style={{ backgroundColor: "black" }}>
      <div>
        <NavBar addMovie={addMovie} setFilterByName={setFilterByName} setRateByName={setRateByName} rateByName={rateByName} />
      </div>

      <TiTre />

      <div className="movielist">
        {movies
          .filter((film) =>
            film.titre.toLowerCase().includes(filterByName.toLowerCase()) &&  film.rate >= rateByName
          )

          
          .map((film) => (
            <MyCard  film={film} />
          ))}{" "}
          
            
          
      </div>
    </div>
  );
}

export default App;
