export default function Description({ raffle }) {
  const ends = new Date(raffle.end * 1000);
  const remains = raffle.left * 100
  return (
    <>
      <p>Sold {raffle.sold} / {raffle.supply}</p>
      <p>Left {remains.toFixed(2)} %</p>
      <p>Ends: {ends.toLocaleString('en-US', { timeZone: 'Atlantic/South_Georgia' })}</p>
    </>
  )
}