import React from 'react';

const playlists = [
  { title: 'BEACH Series - Meditation Music', youtube_link: 'https://youtube.com/playlist?list=PLJfvMQgAiaWbaWnMWuXDJnFcQHeqXTY-x&si=kePxz357Wz3n1SEM' },
  { title: 'DESERT Series - Meditation Music', youtube_link: 'https://youtube.com/playlist?list=PLJfvMQgAiaWZNSCpV0_72qpp2k6SaSHUX&si=MM1ik9mRylVh1A6n' },
  { title: 'COSMIC Series - Meditation Music', youtube_link: 'https://youtube.com/playlist?list=PLJfvMQgAiaWaZoRPxk3ucgx094NJEACj8&si=K3BZ1fVVF5TfutGN' },
];

function PlaylistsPage() {
  return (
    <div>
      <div className="playlists-banner"></div>
      <h1>Playlists</h1>
      <p>
        Explore our collection of original, high-quality meditative <a href="https://www.youtube.com/channel/UC3MC2lsf8ritNB6iaG1-zvw" target="_blank" rel="noopener noreferrer">YouTube</a> playlists. Each playlist combines the ancient wisdom of meditation with modern, innovative soundscapes to help you relax, reduce stress, and cultivate a sense of well-being.
      </p>
      <ul>
        {playlists.map((playlist, index) => (
          <li key={index} className="fadeInUp">
            <a href={playlist.youtube_link} target="_blank" rel="noopener noreferrer">
              {playlist.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlaylistsPage;
