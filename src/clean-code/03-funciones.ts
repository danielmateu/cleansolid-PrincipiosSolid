(() => {

    interface Movie {
        title: string;
        description: string;
        rating: number;
        cast: string[]
    }

    // función para obtener información de una película por Id
    const getMovieById = (movieId: string) => {
        console.log({ movieId });
    }


    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    const getMovieCastById = (movieId: string) => {
        console.log({ movieId });
    }


    // funcion para obtener el bio del actor por el id
    const getActorBioById = (actorId: string) => {
        console.log({ actorId });
    }

    // Crear una película
    function createMovie({ title, description, rating, cast }: Movie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor(fullName: string, birthdate: Date): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (fullName === 'fernando') return false;

        console.log('Crear actor');
        return true;
    }
})();




