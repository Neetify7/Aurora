function searchYT() {
    const input = document.getElementById('input').value.trim();
    if (!input) {
    alert("Please enter a YouTube link.");
    return false;
    }

    const regexList = [
    /(?:youtube\.com\/.*(?:\?|\&)v=)([^&\s]+)/,
    /youtu\.be\/([^&\s]+)/,
    /youtube\.com\/embed\/([^&\s]+)/
    ];

    let videoId = null;
    for (const regex of regexList) {
    const match = input.match(regex);
    if (match && match[1]) {
        videoId = match[1];
        break;
    }
    }

    if (!videoId) {
    alert("Please enter a valid YouTube link.");
    return false;
    }

    const embedHTML = `
    <iframe width="854" height="480"
            src="https://www.youtube.com/embed/${videoId}"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
    `;

    document.getElementById('videoEmbed').innerHTML = embedHTML;

    return false;
}