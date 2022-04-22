input.onButtonPressed(Button.A, function () {
    basic.showString(esp8266_read_by_naim.connectThingSpeak("api.thingspeak.com", "your_read_api_key"))
})
basic.showIcon(IconNames.Heart)
esp8266_read_by_naim.connectWifi(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate115200,
"your_ssid",
"your_pw"
)
