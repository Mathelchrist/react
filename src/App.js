import './App.css';
import { useState, useEffect } from "react";                  //useState pour faire du dynamique, useEffect pour faire qu'une execution
import axios from "axios";                                    // lire API

const App = () => {                                           // lecture de html
  const [image, setImage] = useState([]);                     // initialisation du useState pour le dynamique 
  useEffect(() => {                                           // faire qu'une execution de cette methode (tableau vide au 2eme paramettre de useEffect)
    const fetchData = async () => {                           // methode asynchrone pour continuer le code en demandant une réponse d'un serveur, attend que la demande soit retourner
      try {
        const images = await axios("https://picsum.photos/v2/list"); // recuperation de l'api
        console.log(images)
        setImage(images.data);                                       // on recupere les data de l'api dans un tableau grace a useState
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();                                              // on appel la function qui recupere les données
  }, []);                                                     // le tableau vide sert a appelé qu'une fois la methode useEffect

  return image.map(({ download_url, author }) => <><p>{author}</p><img src={download_url} height="250px" alt="" /></>)  //on retourne les url des images fourni par l'api et on les affiches avec la balise <img src={download_url} />
}

export default App;
