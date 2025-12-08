// Tworzy i odtwarza dźwięk sukcesu
export const playSuccessSound = () => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  
  // Pierwszy ton
  const oscillator1 = audioContext.createOscillator();
  const gainNode1 = audioContext.createGain();
  oscillator1.connect(gainNode1);
  gainNode1.connect(audioContext.destination);
  oscillator1.frequency.value = 523.25; // C5
  oscillator1.type = 'sine';
  gainNode1.gain.setValueAtTime(0.3, audioContext.currentTime);
  gainNode1.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
  oscillator1.start(audioContext.currentTime);
  oscillator1.stop(audioContext.currentTime + 0.3);

  // Drugi ton (wyższy)
  const oscillator2 = audioContext.createOscillator();
  const gainNode2 = audioContext.createGain();
  oscillator2.connect(gainNode2);
  gainNode2.connect(audioContext.destination);
  oscillator2.frequency.value = 659.25; // E5
  oscillator2.type = 'sine';
  gainNode2.gain.setValueAtTime(0.3, audioContext.currentTime + 0.1);
  gainNode2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
  oscillator2.start(audioContext.currentTime + 0.1);
  oscillator2.stop(audioContext.currentTime + 0.4);

  // Trzeci ton (najwyższy)
  const oscillator3 = audioContext.createOscillator();
  const gainNode3 = audioContext.createGain();
  oscillator3.connect(gainNode3);
  gainNode3.connect(audioContext.destination);
  oscillator3.frequency.value = 783.99; // G5
  oscillator3.type = 'sine';
  gainNode3.gain.setValueAtTime(0.3, audioContext.currentTime + 0.2);
  gainNode3.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
  oscillator3.start(audioContext.currentTime + 0.2);
  oscillator3.stop(audioContext.currentTime + 0.5);
};
