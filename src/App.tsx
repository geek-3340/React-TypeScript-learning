import { useState } from 'react';
import './App.css';
import type { PokemonProps } from './interaces';

const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

function App() {
    const [pokemonId, setPokemonId] = useState('');
    const [pokemonData, setPokemonData] = useState<PokemonProps | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleFetchPokemon = async () => {
        try {
            const response = await fetch(API_URL + pokemonId);
            const data = await response.json();
            setPokemonData(data);
            setError(null);
            console.log(data);
        } catch (err) {
            setPokemonData(null);
            setError('ポケモンの情報の取得に失敗しました。');
            console.error('err:', err);
        }
    };

    return (
        <>
            <div>
                <h1>ポケモン図鑑</h1>
                <input
                    type="text"
                    value={pokemonId}
                    onChange={(e) => setPokemonId(e.target.value)}
                />
                <button type="button" onClick={handleFetchPokemon}>
                    検索
                </button>

                {error && <p>{error}</p>}
                {pokemonData && (
                    <div>
                        <h2>{pokemonData.name}</h2>
                        <img
                            src={pokemonData.sprites.front_default}
                            alt={pokemonData.name}
                        />
                        <p>weight:{pokemonData.weight}</p>
                        <p>height:{pokemonData.height}</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default App;
