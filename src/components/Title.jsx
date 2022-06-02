const howRareIs = {
  'bohemia_': 'bohemia',
  'boryoku_dragonz': 'boryokudragonz',
  'boryoku_baby_dragonz': 'boryoku_baby_dragonz', // not on howrareis
  'blocksmith_labs': 'blocksmithlabs',
  'cets_on_creck': 'cetsoncreck',
  'communi3': 'communi3', // not on howrareis
  'degenerate_ape_academy': 'degenerate_ape_academy', // not on howrareis
  'degods': 'degods',
  'famous_fox_federation': 'famousfoxfederation',
  'okay_bears': 'okay_bears',
  'stoned_ape_crew': 'stonedapecrew',
  'the_catalina_whale_mixer': 'catalinawhalemixer',
  'trippin_ape_tribe': 'trippin_ape_tribe',
}


export default function Title({ raffle }) {
  const icon = (raffle.fox) ? '🟠' : '🚀'
  const flagged = (raffle.flagged) ? '⛔️' : ''
  const id = raffle.nft.name.split('#')[1]
  const collection = howRareIs[raffle.nft.collection]
  return (
    <a href={`https://howrare.is/${collection}?ids=${id}`} target="_blank">
      <h3>{flagged} {icon} {raffle.nft.name}</h3>
    </a>
  )
}