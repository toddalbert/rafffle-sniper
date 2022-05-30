export default function Title({ raffle }) {
  const icon = (raffle.fox) ? '🟠' : '🚀'
  const flagged = (raffle.flagged) ? '⛔️' : ''
  const id = raffle.nft.name.split('#')[1]
  const collection = raffle.nft.collection.endsWith('_')
    ? raffle.nft.collection.slice(0, -1)
    : raffle.nft.collection.startsWith('cets')
      ? 'cetsoncreck'
      : raffle.nft.collection.startsWith('famous')
        ? 'famousfoxfederation'
        : raffle.nft.collection
  return (
    <a href={`https://howrare.is/${collection}?ids=${id}`} target="_blank">
      <h3>{flagged} {icon} {raffle.nft.name}</h3>
    </a>
  )
}