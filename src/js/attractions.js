const OPENTRIP_API_KEY = "1d68a99355mshf58a1039113f98fp1ebf7bjsnfd1d17012fbb";

export async function getAttractions(lat, lon) {
    const res = await fetch(
        `https://api.opentripmap.com/0.1/en/places/radius?radius=30000&limit=3&lat=${lat}&lon=${lon}&apikey=${OPENTRIP_API_KEY}`
    );
    const data = await res.json();
    if (!data.features) return [];
    return data.features;
}

export async function getAttractionDetails(xid) {
    const res = await fetch(`https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=${OPENTRIP_API_KEY}`);
    const data = await res.json();
    return data;
}
