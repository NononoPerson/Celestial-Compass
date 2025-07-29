function storeUserInfo() {
  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;
  const time = document.getElementById('time').value;
  const password = document.getElementById('password').value;
  localStorage.setItem('user', JSON.stringify({ name, dob, time, password }));
  return true;
}

function verifyUser() {
  const loginName = document.getElementById('nameLogin').value;
  const loginPassword = document.getElementById('passwordLogin').value;
  const user = JSON.parse(localStorage.getItem('user'));
  if (user.name === loginName && user.password === loginPassword) return true;
  alert('Invalid login');
  return false;
}

function getZodiacSign(month, day) {
  const zodiacData = [
  { sign: 'Capricorn', meaning: 'Capricorn is ambitious and practical, always striving for long-term success. They value discipline and structure, and thrive when setting solid foundations for themselves and others.', horoscope:'Your vision grows sharper this month. Hard work finally shows payoff. Someone relies on your wisdom. Do not neglect rest amid your rise. Discipline turns goals into achievements.', advice: 'Focus on long-term goals.' },
  { sign: 'Aquarius', meaning: 'Aquarius is visionary and unique, known for their innovative spirit and unconventional thinking. They often stand out by challenging the norm and dreaming big for the future.', horoscope:'Ideas flow like electricity. You challenge norms with style. A fresh perspective redirects your energy. You may feel distant—check in with your people. Innovation finds roots in emotion.', advice: 'Pursue innovative paths.' },
  { sign: 'Pisces', meaning: 'Pisces is compassionate and dreamy, deeply connected to emotions and intuition. Their empathetic nature helps them support and understand others with gentle kindness.', horoscope:'Your imagination feels limitless. A creative burst brings fulfillment. You sense what others cannot say. Someone close needs your empathy. Stay dreamy, but keep your feet on the ground.', advice: 'Follow your intuition.' },
  { sign: 'Aries', meaning: 'Aries is bold and enthusiastic, always ready to take the lead and dive into challenges head-on. Their fiery energy fuels their ambition, courage, and natural charisma.', horoscope:'You are full of drive and ready to lead. Opportunities favor bold decisions. Someone admires your fearless energy. A challenge might test your patience. Use your spark to inspire, not overwhelm.', advice: 'Lead with confidence.' },
  { sign: 'Taurus', meaning: 'Taurus is grounded and loyal, drawn to comfort, stability, and beauty. They move steadily, valuing the journey just as much as the destination.', horoscope:'Comfort feels sweet, but growth needs motion. You are being nudged toward change. Unexpected kindness surprises you. Your routine gets a meaningful upgrade. Trust slow progress—it is building something strong.', advice: 'Build slowly and securely.' },
  { sign: 'Gemini', meaning: 'Gemini is adaptable and curious, always eager to learn, connect, and explore different perspectives. Their sharp wit and energy make them naturally engaging communicators.', horoscope:'Your curiosity is in overdrive. Conversations unlock important truths. A twist brings creative energy. Someones perspective helps you grow. Flexibility will carry you through sudden turns.', advice: 'Learn and explore often.' },
  { sign: 'Cancer', meaning: 'Cancer is intuitive and nurturing, deeply attuned to emotions and the needs of loved ones. They find purpose in caring for others and building safe, supportive spaces.', horoscope:'Your heart feels especially tender. Home becomes your anchor this month. A memory leads to healing. You may reconnect with someone you have missed. Trust your intuition—it is whispering wisdom.', advice: 'Find joy in caring for others.' },
  { sign: 'Leo', meaning: 'Leo is charismatic and proud, born to express themselves creatively and shine in the spotlight. Their warmth and loyalty make them magnetic leaders and generous friends.', horoscope:'You are glowing with confidence and charisma. Recognition finally comes your way. A bold move could shift everything. Financial focus brings smart rewards. Lead with heart, not just pride.', advice: 'Shine with creativity.' },
  { sign: 'Virgo', meaning: 'Virgo is detail-oriented and kind, always striving to improve and serve others. Their practical nature combines with a deep caring that shows in quiet, thoughtful actions.', horoscope:'Your attention to detail brings results. Someone appreciates your quiet support. You are uncovering clarity through reflection. A plan unfolds exactly as it should. Stay grounded, your growth is visible.', advice: 'Serve others with grace.' },
  { sign: 'Libra', meaning: 'Libra is balanced and diplomatic, seeking harmony in relationships and surroundings. Their natural sense of fairness and beauty makes them gentle peacemakers and aesthetes.', horoscope:'Harmony is your mission right now. Relationships deepen in surprising ways. Your eye for beauty shines brightly. A negotiation swings in your favor. Balance helps you find inner calm.', advice: 'Seek harmony in choices.' },
  { sign: 'Scorpio', meaning: 'Scorpio is intense and wise, drawn to mystery, truth, and transformation. Their emotional depth and loyalty make them powerful allies and seekers of authenticity.', horoscope:'Your intuition feels sharper than ever. Hidden truths begin surfacing. A shift within brings new strength. Let go of what you cannot control. Emotional clarity sets you free.', advice: 'Embrace transformation.' },
  { sign: 'Sagittarius', meaning: 'Sagittarius is adventurous and honest, always chasing knowledge and experience. Their optimism and blunt truth-telling make them courageous truth-seekers and lifelong learners.', horoscope:'', advice: 'Keep discovering the world.' }
];
  const cutoffs = [20, 19, 20, 20, 21, 21, 23, 23, 23, 23, 22, 22];
  const index = (day < cutoffs[month - 1]) ? month - 1 : month % 12;
  return zodiacData[index];
}
function showFortune() {
  const nameInput = document.getElementById('nameInput');
  const dobInput = document.getElementById('dobInput');

  const name = nameInput.value.trim();
  const dob = new Date(dobInput.value);

  if (!name || isNaN(dob)) {
    alert("Please enter a valid name and date.");
    return;
  }

  // Re-set the inputs (optional, for formatting or value retention)
  nameInput.value = name;
  dobInput.valueAsDate = dob;

  const month = dob.getMonth() + 1;
  const day = dob.getDate();
  const zodiacInfo = getZodiacSign(month, day);

  document.getElementById('userName').textContent = 'Hello, ' + name;
  document.getElementById('zodiacSign').textContent = 'Your Zodiac Sign: ' + zodiacInfo.sign;
  document.getElementById('zodiacMeaning').textContent = 'Traits: ' + zodiacInfo.meaning;
  document.getElementById('advice').textContent = 'Advice: ' + zodiacInfo.advice;
  document.getElementById('horoscope').textContent = 'Horoscope: ' + zodiacInfo.horoscope;
}

window.onload = function () {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) return;
  const date = new Date(user.dob);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const zodiacInfo = getZodiacSign(month, day);
  document.getElementById('userName').textContent = 'Hello, ' + user.name;
  document.getElementById('zodiacSign').textContent = 'Your Zodiac Sign: ' + zodiacInfo.sign;
  document.getElementById('zodiacMeaning').textContent = 'Traits: ' + zodiacInfo.meaning;
  document.getElementById('advice').textContent = 'Advice: ' + zodiacInfo.advice;
  document.getElementById('horoscope').textContent = 'Horoscope: ' + zodiacInfo.horoscope;
};
