const greetings = [
  "Hello",
  "Ciao",
  "Servus",
  "Bonjour",
];

export default defineEventHandler(() => {
  const greeting = greetings[
    Math.floor(Math.random() * 4) // pick random
  ];
  return {
    greeting,
    time: Date.now(),
  };
});
