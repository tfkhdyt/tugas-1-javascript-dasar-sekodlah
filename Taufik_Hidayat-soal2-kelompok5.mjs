import prompts from 'prompts';

const { angka } = await prompts({
  type: 'number',
  name: 'angka',
  message: 'Masukkan angka:',
});

if (angka % 2 === 0) {
  console.log('Angka Genap');
} else {
  console.log('Angka Ganjil');
}
