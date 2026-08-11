const TEST_AUDIO_FILES = [
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
];


export function getAudioUrl(track) {
    if (!track?.title) return null;

    const hash = track.title.split('').reduce((acc,ch) => acc + ch.charCodeAt(0),0);
    return TEST_AUDIO_FILES[hash % TEST_AUDIO_FILES.length];
}
