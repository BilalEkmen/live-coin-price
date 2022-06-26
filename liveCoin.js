let btcData = new WebSocket('wss://stream.binance.com:9443/ws/btcbusd@trade')

const btcArea = document.getElementById('btc-area')

btcData.onmessage = (event) => {
    let stockOpjectBtc = JSON.parse(event.data)
    let priceBtc = parseFloat(stockOpjectBtc.p).toFixed(2)
    console.log(priceBtc)
}
