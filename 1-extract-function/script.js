function printBanner() { console.log('BANNIÈRE') }
function calculateOutstanding() { return 10 }
function printOwing(invoice) {
  printBanner()
  let outstanding = calculateOutstanding()

  // print details
  console.log(`name: ${invoice.customer}`)
  console.log(`amount: ${outstanding}`)
}
module.exports = printOwing
