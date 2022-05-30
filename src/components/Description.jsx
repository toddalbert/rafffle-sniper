const validate = (e) => {
  const t = e.toString();
  return (t.indexOf(".") >= 0) ? t.substring(0, t.indexOf(".") + 3) : t;
}

export default function Description({ raffle }) {
  const ends = new Date(raffle.end * 1000);
  const remains = raffle.left * 100
  const pct = 100 / (1 + raffle.sold)
  return (
    <>
      <h3>{pct.toFixed(2)}% for {validate(raffle.price  * Math.pow(10, -raffle.decimals))} {raffle.mint.substring(0,4)}</h3>
      <p>Sold {raffle.sold} / {raffle.supply}</p>
      <p>Left {remains.toFixed(2)} %</p>
      <p>Ends: {ends.toLocaleString('en-US', { timeZone: 'Atlantic/South_Georgia' })}</p>
    </>
  )
}