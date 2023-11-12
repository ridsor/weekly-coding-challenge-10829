const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const happyNumber = (n) => {
  const setAngka = new Set();

  while (!n <= 0 && n !== 1) {
    // memisahkan angka pada n
    let angkaTerpisah = String(n).split("");

    // merubah string ke int
    angkaTerpisah = angkaTerpisah.map((angka) => Number(angka));

    // perjumlahan angka kuadrat
    let jumlah = 0;
    for (const angka of angkaTerpisah) {
      jumlah += angka ** 2;
    }

    // mengecek angka berputar tanpa henti
    if (setAngka.has(jumlah)) return false;

    setAngka.add(jumlah);
    n = jumlah;
  }

  return n > 0;
};

rl.question("Masukan angka : ", (n) => {
  const hasil = happyNumber(n);
  console.log(hasil);

  rl.close();
});
