import Alpaca from '@alpacahq/alpaca-trade-api';

function config() {
  const paper = process.env.NX_ALPACA_PAPER?.toLocaleLowerCase() === 'true';
  const keyId = paper
    ? process.env.NX_ALPACA_PAPER_KEY
    : process.env.NX_ALPACA_LIVE_KEY;

  const secretKey = paper
    ? process.env.NX_ALPACA_PAPER_SECRET
    : process.env.NX_ALPACA_LIVE_SECRET;

  return { keyId, secretKey, paper };
}

const alpaca = new Alpaca(config());

export async function getAccount(): Promise<object> {
  return await alpaca.getAccount();
}
