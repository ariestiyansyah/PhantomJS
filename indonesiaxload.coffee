# IndonesiaX Loading Screenshoot

console.log "Loading IndonesiaX Status Screenshoot"

page = require("webpage").create()
# Set screenshoot size
page.viewportSize = {width: 1366, height: 768}

# Website Status
page.open 'https://indonesiax.co.id', (status) ->
    if status isnt "success"
        console.log "Couldn't load IndonesiaX"
    else
        page.evaluate ->
            document.body.style.backgroundColor = "#dddddd" # set color to dddddd
        page.render 'indonesiax.png'
        console.log "Screenshoot created."
    phantom.exit()