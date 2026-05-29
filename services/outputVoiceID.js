/*
Based on user input, outputs the correct voice id
*/
const VOICE_CATALOG = {
//   svenska: { key: "svenska", label: "Exempel: Svenska", providerVoiceId: "rjyvihvKM3mIEn2BPC6H" },
  skånska: { key: "skånska", label: "Exempel: Skånska", providerVoiceId: "rjyvihvKM3mIEn2BPC6H" }, //
  assistant: { key: "assistant", label: "Personal Assistant Vibes", providerVoiceId: "O5cOSvUD7fKfUyUaF0g4" }, //
  motivational: { key: "motivational", label: "Motivational", providerVoiceId: "YURxXazL6LhRZieWQX0A" }, //
  tv: { key: "tv", label: "TV Narrator", providerVoiceId: "DAAREHIiqwAq4ddreFw4" }, //
  caine: { key: "caine", label: "Michael Caine", providerVoiceId: "7p1Ofvcwsv7UBPoFNcpI" }, // Only demo from elevenlabs
  feynman: { key: "feynman", label: "Richard Feynman", providerVoiceId: "7p1Ofvcwsv7UBPoFNcpI" },
  stan_lee: { key: "stan_lee", label: "Stan Lee", providerVoiceId: "7p1Ofvcwsv7UBPoFNcpI" },
};


// const VOICE_CATALOG = {
//   julian: { key: "julian", label: "Wise Friend", providerVoiceId: "7p1Ofvcwsv7UBPoFNcpI" },
//   myrrdin: { key: "myrrdin", label: "Socratic Monologue", providerVoiceId: "oR4uRy4fHDUGGISL0Rev" },
//   wyatt: { key: "wyatt", label: "Aurelian Meditations", providerVoiceId: "YXpFCvM1S3JbWEJhoskW" },
//   best_female_friend: { key: "best_female_friend", label: "Calm Narrator", providerVoiceId: "aj0fZfXTBc7E3By4X8L2" },
//   mid30s_female: { key: "mid30s_female", label: "Wise Big Sister", providerVoiceId: "xYa75LlayhWHCRl1yJSH" },
// };

export function listVoices() {
	return Object.values(VOICE_CATALOG).map(({ key, label }) => ({ key, label }));
}

export function isValidVoiceKey(voiceKey) {
	return Boolean(voiceKey && VOICE_CATALOG[voiceKey.toLowerCase()]);
}

export default function outputVoiceID(voiceKey) {
  const key = (voiceKey || "julian").toLowerCase();
  console.log(`Outputting voice ID for key: ${key}`);
  return VOICE_CATALOG[key]?.providerVoiceId ?? VOICE_CATALOG.julian.providerVoiceId;
}