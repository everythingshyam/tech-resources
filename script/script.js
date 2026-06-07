let synth = window.speechSynthesis;
let utterance = null;

function toggleReadAloud() {
  // If it's already speaking, pause/stop it
  if (synth.speaking) {
    if (synth.paused) {
      synth.resume();
      updateButtonState("playing");
    } else {
      synth.pause();
      updateButtonState("paused");
    }
    return;
  }

  // Target the element holding your scrubbed sample response
  // Replace 'sample-brief-text' with the actual ID of your code or paragraph block
  const textElement = document.getElementById("sample-response");
  if (!textElement) return;

  // Clean up markdown bold markers (**) so the TTS doesn't stumble
  let cleanText = textElement.innerText.replace(/\*\*/g, "");

  utterance = new SpeechSynthesisUtterance(cleanText);

  // Optional Pacing/Voice adjustments to mimic the regional pack
  utterance.rate = 0.95; // Slightly slower for crisp natural articulation
  utterance.pitch = 1.0;

  // Automatically detect and use an English-India or local natural voice if available
  let voices = synth.getVoices();
  let regionalVoice = voices.find((v) => v.lang.includes("en-IN") || v.name.includes("India"));
  if (regionalVoice) {
    utterance.voice = regionalVoice;
  }

  // Handle audio player end states
  utterance.onend = () => updateButtonState("stopped");
  utterance.onerror = () => updateButtonState("stopped");

  synth.speak(utterance);
  updateButtonState("playing");
}

function updateButtonState(state) {
  const btnText = document.getElementById("tts-text");
  const btnIcon = document.getElementById("tts-icon");

  if (state === "playing") {
    btnText.innerText = "Pause Briefing";
    btnIcon.innerText = "⏸️";
  } else if (state === "paused") {
    btnText.innerText = "Resume Briefing";
    btnIcon.innerText = "▶️";
  } else {
    btnText.innerText = "Listen to Briefing";
    btnIcon.innerText = "🔊";
  }
}

// Edge case: Ensure voices load dynamically in browsers like Chrome
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = synth.getVoices;
}