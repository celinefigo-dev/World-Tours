const UNSPLASH_API_KEY = "YOUR_UNSPLASH_KEY";

export async function getImage(placeName) {
    const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(placeName)}&client_id=${UNSPLASH_API_KEY}`
    );
    const data = await res.json();
    if (data.results && data.results.length > 0) return data.results[0].urls.small;
    return "https://via.placeholder.com/300";
}
