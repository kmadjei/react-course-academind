import { createContext, useState } from 'react';

// createContext hook ??
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0
});

function FavoritesContextProvider(props) {

    const [userFavorites, setUserFavorites] = useState([]);

    // ??
    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    // ?? context logic?? --> video 3:26:12
    function removeFavoriteHandler(meetupId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }

    // ??
    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
    }

    return (
        <FavoritesContext.Provider value={context} >
            {props.children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContextProvider;