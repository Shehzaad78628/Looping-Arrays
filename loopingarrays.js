for (let i = 1000; i >= 0; i -= 2) {
    console.log(i);
  }

  const totalIterations = 10000;

  for (let i = 0; i <= totalIterations; i++) {
    if (i === totalIterations / 4) {
      alert("A quarter of the way there!");
    } else if (i === totalIterations / 2) {
      alert("Halfway there!");
    } else if (i === totalIterations) {
      alert("The loop is done!");
    }
    // Your other loop logic goes here
  }

const top5TVShows = ["Dragon Ball Z", "Breaking Bad", "Demon Slayer", "The Mandalorian", "Naruto Shippuden"];
for (let i = 0; i < top5TVShows.length; i++) {
  console.log(`My #${i + 1} favorite TV show is ${top5TVShows[i]}`);
}
