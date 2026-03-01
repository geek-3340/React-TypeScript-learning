export interface PokemonProps {
    id: number;
    name: string;
    is_default: boolean;
    weight: number;
    height: number;
    sprites: {
        front_default: string;
    };
    stats: {
        base_stat: number;
        stat: {
            name: string;
        };
    }[];
}
