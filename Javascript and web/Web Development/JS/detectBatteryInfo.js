let charge = document.getElementById('charge')
let chargeLevel = document.getElementById('charge-level')
let chargingTimeRef = document.getElementById('charging-time')

navigator.getBattery().then((battery) => {
    function updateAllBatteryInfo() {
      updateChargingInfo();
      updateLevelInfo();
    }
    updateAllBatteryInfo();
    //When the charging status changes
    battery.addEventListener("chargingchange", () => {
      updateAllBatteryInfo();
    });
    //When the Battery Levvel Changes
    battery.addEventListener("levelchange", () => {
      updateAllBatteryInfo();
    });

})

function updateChargingInfo() {
    if (parseInt(battery.dischargingTime)) {
        let hr = parseInt(battery.dischargingTime / 3600);
        let min = parseInt(battery.dischargingTime / 60 - hr * 60);
        chargingTimeRef.innerText = `${hr}hr ${min}mins remaining`;
      }
}
if (parseInt(battery.dischargingTime)) {
    let hr = parseInt(battery.dischargingTime / 3600);
    let min = parseInt(battery.dischargingTime / 60 - hr * 60);
    chargingTimeRef.innerText = `${hr}hr ${min}mins remaining`;
  }