import PokemonModel from './domain/PokemonModel'
import LogRocket from 'logrocket';

class RootStore {
    static type = {
        POKEMON_MODEL: 'pokemonModel'
    }

    constructor() {
        LogRocket.init('1jufuh/react-mvvm-pokemon');
        this.pokemonModel = new PokemonModel()
    }

    getStores = () => ({
        [RootStore.type.POKEMON_MODEL]: this.pokemonModel
    })
}

export default RootStore