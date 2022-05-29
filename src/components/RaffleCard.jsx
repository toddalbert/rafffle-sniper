import { Card, Col, Tooltip } from 'antd';
import Description from './Description';
const { Meta } = Card;

export default function RaffleCard({ raffle }) {
  const icon = (raffle.fox) ? '🟠' : '🚀'
  return (
    <Col>
      <a href={`https://rafffle.famousfoxes.com/raffle/${raffle.raffle}`}>
        <Card
          hoverable
          style={{
            width: 256,
            margin: '1em',
          }}
          cover={<img alt={raffle.nft.name} src={raffle.nft.image} />}
        >
          <Tooltip title={`${raffle.price/1000000000} ${raffle.mint.substring(0,4)}`}>
            <Meta
              title={`${icon} ${raffle.nft.name}`}
              description={<Description raffle={raffle} />} />
          </Tooltip>
        </Card>
      </a>
    </Col>
  )
}


const sample = {
  "raffle": "HdQHXr1fHGF75zUtUrK9RosZ26bw64P1Puk5Y4reisp6",
  "mint": "DUSTawucrTsGU8hcqRdHDCbuYhCPADMLM2VcCb8VnFnQ",
  "end": 1653786000,
  "price": 5000000000,
  "sold": 109,
  "supply": 1500,
  "fox": true,
  "entrantsData": {
    "max": 1500,
    "total": 109,
    "entries": [
      "C5B2eHSVGbUbrynVDaXUjh6M6ZojUZA87HHFz4nYZxHe",
      "FuJqWe5zXWRXqF4e1vQCNVzdYqjtYruYBxxgkSERMSa5"
    ]
  },
  "nft": {
    "attributes": [
      {
        "trait_type": "Background",
        "value": "Green"
      },
      {
        "trait_type": "Fur",
        "value": "Red Panda"
      },
      {
        "trait_type": "Mouth",
        "value": "Okay"
      },
      {
        "trait_type": "Eyes",
        "value": "Disappointed"
      },
      {
        "trait_type": "Hat",
        "value": "Sweatband"
      },
      {
        "trait_type": "Clothes",
        "value": "Loose Overalls"
      }
    ],
    "collection": "okay_bears",
    "externalUrl": "https://www.okaybears.com/",
    "image": "https://images.famousfoxes.com/i/C15VRTrtJ5XQpysoELmPLGhSTBdLdmFQd8dGPMNmmT8N.webp",
    "mintAddress": "C15VRTrtJ5XQpysoELmPLGhSTBdLdmFQd8dGPMNmmT8N",
    "name": "Okay Bear #3109",
    "owner": "HdQHXr1fHGF75zUtUrK9RosZ26bw64P1Puk5Y4reisp6",
    "primarySaleHappened": true,
    "properties": {
      "category": "image",
      "creators": [
        {
          "address": "7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe",
          "share": 100
        }
      ],
      "files": [
        {
          "type": "image/png",
          "uri": "https://bafybeid6krsh4dhd2czttm4dqvzwyv5dmyhglgnxas6v6uh5s2en3mry64.ipfs.nftstorage.link/3108.png?ext=png"
        }
      ]
    },
    "sellerFeeBasisPoints": 750,
    "supply": 1,
    "updateAuthority": "7ttWYWpc9H9NUQnEaH64qWLwXcHMYwFBu1WrtwjyAHC3",
    "verified": true
  },
  "left": 0.9273333333333333,
  "decimals": 9,
  "cost": 5,
  "winnerPicked": false,
}