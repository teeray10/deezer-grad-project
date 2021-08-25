import { Track } from './track';

export interface Album {
    id: number,
    title: string,
    cover_xl: string,
    release_date: string,
    artist: {
        name: string
    }
    tracks?: {
        data: Track[],
    }
}