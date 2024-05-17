import React from 'react';

const playlists = [
  { title: '60 Minute Meditation Music', youtube_link: 'https://youtube.com/playlist?list=PLJfvMQgAiaWZ4MrR9ITL1Ec5ojaRNcArX&si=KrEUEAeGik8G7yT-' },
  { title: '45 Minute Meditation Music', youtube_link: 'https://youtube.com/playlist?list=PLJfvMQgAiaWb_PjRby32B8Sx5dCkVo436&si=sm7K_K7osjOAqJcQ' },
  { title: '30 Minute Meditation Music', youtube_link: 'https://youtube.com/playlist?list=PLJfvMQgAiaWZNSCpV0_72qpp2k6SaSHUX&si=WMFgIKLYZRiOAFt0' },
  { title: '20 Minute Meditation Music', youtube_link: 'https://youtube.com/playlist?list=PLJfvMQgAiaWZR9_lIGxpzJOFsCpuVD3qg&si=Gd7ZHk0jR-V9KonD' },
  { title: '15 Minute Meditation Music', youtube_link: 'https://youtube.com/playlist?list=PLJfvMQgAiaWZ-Oc1Yx9qADGebsjDT9IiU&si=ArTefa7HOawRoMn8' },
  { title: '10 Minute Meditation Music', youtube_link: 'https://youtube.com/playlist?list=PLJfvMQgAiaWaZoRPxk3ucgx094NJEACj8&si=5ZP45_hSfYaKsOL3' },
  { title: '5 Minute Meditation Music', youtube_link: 'https://youtube.com/playlist?list=PLJfvMQgAiaWboZK_5quvnJpWsowDjeHCy&si=TR9_teVDCVjum4gk' },
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
