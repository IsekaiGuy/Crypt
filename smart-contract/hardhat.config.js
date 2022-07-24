//https://eth-goerli.g.alchemy.com/v2/teAV6dVlKpTgkLuIbZbgTvTehl4M9m9P
require('dotenv').config();
require('@nomiclabs/hardhat-waffle');

module.exports = {
    solidity: '0.8.0',
    networks: {
        goerli: {
            url: 'https://eth-goerli.g.alchemy.com/v2/teAV6dVlKpTgkLuIbZbgTvTehl4M9m9P',
            accounts: [`${process.env.ACCOUNT_NAME}`]
        }
    }
}
