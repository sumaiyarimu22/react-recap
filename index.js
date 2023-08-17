function delay(i) {
  return new Promise((resolve) => {
    setTimeout(() => {
      //kon function return hole ba callback funcation hole tar ager valuse gula mone rakhe
      resolve(i);
    }, i * 1000);
  });
}

async function timer(n) {
  console.log("Start timer");

  for (let i = 0; i <= n; i++) {
    const result = await delay(i);
    console.log(result);
  }

  console.log("End timer");
}
timer(3);
