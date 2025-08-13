function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    document.getElementById('time').textContent = `${hours}:${minutes} ${ampm}`;
}
setInterval(updateTime, 1000);
updateTime();

if ('getBattery' in navigator) {
    navigator.getBattery().then(function(battery) {
        function updateBattery() {
            const chargingIcon = battery.charging ? '⚡' : '';
            const level = Math.round(battery.level * 100);
            document.getElementById('battery').textContent = `${chargingIcon} ${level}%`;
        }
        battery.addEventListener('chargingchange', updateBattery);
        battery.addEventListener('levelchange', updateBattery);
        updateBattery();
    });
} else {
    document.getElementById('battery').textContent = 'Battery API not supported';
}