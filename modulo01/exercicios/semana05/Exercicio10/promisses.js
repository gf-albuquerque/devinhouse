function sleep(valor) {
  return new Promise((res, rej) => {
    setTimeout(
      () =>
        valor >= 0
          ? res(
              console.log(
                `O valor ${valor} que foi colocado é maior ou igual a zero`
              )
            )
          : rej(
              console.log(`O valor ${valor} que foi colocado é menor que zero`)
            ),
      3000
    );
  });
}

console.log(sleep(10));
