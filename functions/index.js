import fucntions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors());

app.get('/', (req, res) => {

  fetch('https://dens.famousfoxes.com/entries.json', {
    headers: {
      'accept': '*/*',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-US,en;q=0.9',
      'cache-control': 'max-age=0',
      'dnt': 1,
      'if-modified-since': 'Sat, 28 May 2022 18:19:05 GMT',
      'if-none-match': 'W/"62926799-e20a9b"',
      'origin': 'https://rafffle.famousfoxes.com',
      'referer': 'https://rafffle.famousfoxes.com/',
      'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': "macOS",
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36',
    }
  })
    .then(res => res.json())
    .then(json => {
      // const regs = json.filter(entry => !entry.winnerPicked && !entry.fox && (entry.nft.collection === 'degods' || entry.nft.collection === 'trippin_ape_tribe' || entry.nft.collection === 'okay_bears' || entry.nft.collection === 'famous_fox_federation'));
      const regs = json.filter(entry => !entry.winnerPicked
        && (entry.nft.collection === 'degods'
        || entry.nft.collection === 'trippin_ape_tribe'
        || entry.nft.collection === 'okay_bears'
        || entry.nft.collection === 'famous_fox_federation'
        || entry.nft.collection === 'bohemia_'
        || entry.nft.collection === 'communi3'
        || entry.nft.collection === 'stoned_ape_crew'
        || entry.nft.collection === 'degenerate_ape_academy'
        || entry.nft.collection === 'boryoku_dragonz'
        || entry.nft.collection === 'boryoku_baby_dragonz'
        || entry.nft.collection === 'the_catalina_whale_mixer'
        || entry.nft.collection === 'blocksmith_labs'
        || entry.nft.collection === 'cets_on_creck'));
      const _raffles = regs.map(entry => {
        let raffle = entry
        raffle.collection = entry.nft.collection;
        raffle.url = `https://rafffle.famousfoxes.com/raffle/${entry.raffle}`;
        return raffle;
      })
      res.send(_raffles);;
    })
    .catch(console.error);
});

// app.listen(3001, () => console.log('Raffle API listening on port 3001...'));
export const api = fucntions.https.onRequest(app);