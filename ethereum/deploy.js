const HDWalletProvier= require('truffle-hdwallet-provider')
const Web3= require('web3')
const compiledFactory = require('./build/:CampaignFactory.json')

const provider = new HDWalletProvier(
    'change word expand find sting outside maximum parent science assist check never', 
    'https://rinkeby.infura.io/v3/d8b856668d794a7ab7ad8dc2d648cbe7'
)

const web3 = new Web3(provider)

const deploy = async ()=>{
    const accounts = await web3.eth.getAccounts()

    console.log('attempting to deploy from account',accounts[0])

    const result= await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({data:compiledFactory.bytecode})
        .send({gas:'10000000',gasPrice:'5000000000',from:accounts[0]})

        console.log('Contract deployed to',result.options.address)
}
deploy()