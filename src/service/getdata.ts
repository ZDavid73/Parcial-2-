export async function getdata () {
    try {
        const data = await fetch('https://api.chucknorris.io/jokes/random').then(res => res.json());
        console.log(data);
        return data.results;
    } catch (error) {
        console.error(error);
}
}