let btcData = new WebSocket('wss://stream.binance.com:9443/ws/btcbusd@trade')

const btcArea = document.getElementById('btc-area')

btcData.onmessage = (event) => {
    let stockOpjectBtc = JSON.parse(event.data)
    let priceBtc = parseFloat(stockOpjectBtc.p).toFixed(2)
    console.log(priceBtc)
}



const socket = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');

socket.onopen = () => {
  console.log('WebSocket connection opened');
};

socket.onmessage = event => {
  const data = JSON.parse(event.data);
  if (data && data.s === 'ETHUSDT') {
    const price = parseFloat(data.p).toFixed(2);
    console.log(`Current ETH Price: $${price}`);
  }
};

socket.onclose = event => {
  console.log(`WebSocket connection closed with code: ${event.code}`);
};

socket.onerror = error => {
  console.error('WebSocket encountered an error:', error);
};
