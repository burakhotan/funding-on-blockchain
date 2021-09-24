import web3 from './web3'
import CampaignFactory from './build/:CampaignFactory.json'

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x2263D017e1A2BC2a793805F47Ff8D0d7f428c0a8'
)

export default instance;
