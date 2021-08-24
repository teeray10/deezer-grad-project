export interface Track {
    id: number,
    title: string,
    artist: {
        id: number,
        name: string
    },
    album: {
        id: number,
        title: string
    }
}