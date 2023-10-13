import React from 'react';

function YouTubeEmbed({ videoUrl }) {
  // Extract the video ID from the URL using regular expressions
  const videoId = videoUrl.match(/(?:\?v=|&v=|youtu\.be\/|embed\/|\/v\/|\/e\/|watch\?v=)([^#\&\?]*).*/)[1];

  // Construct the embed URL for the iframe
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;



  return (
    <div className="youtube-embed">
      <iframe
        className='w-full h-[400px]'
        src={embedUrl}
        title="YouTube Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default YouTubeEmbed;
