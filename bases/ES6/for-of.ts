(() => {
  type Avenger = {
    name: string;
    character: string;
  };

  const saw: Avenger = {
    name: "ana",
    character: "main",
  };

  const above: Avenger = {
    name: "jose",
    character: "principal",
  };

  const behine: Avenger = {
    name: "pepe",
    character: "secondary",
  };

const avengers:Avenger[]  = [saw, above, behine]

for (const avenger of avengers) {
    console.log(avenger.name, avenger.character);
}


})();
