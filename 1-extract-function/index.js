const printBanner = () =>
  console.log(
    "--------------------------\n" +
      "Bienvenue au café de Paris\n" +
      "--------------------------\n"
  );
const calculateTotal = () => 10;

const printInvoice = invoice => {
  printBanner();
  const amount = calculateTotal();
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${amount}`);
};

module.exports = printInvoice;

/* Motivation:
 * Une fonction doit effectuer 1 seule tâche.
 * Extraire les instructions qui font une certaine tâche dans leur propre fonction permet de mieux communiquer l'intention. */
