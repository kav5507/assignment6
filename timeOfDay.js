const getTimeOfDay = (time) => {
if (time >= 4 && time < 12) {
    return "Morning";
    } else if (time >= 12 && time < 17) {
    return "Afternoon";
    } else {
    return "Evening";
    }
}

const isMorning = (time) => {
    return time >= 4 && time < 12;
}
    
const isAfternoon = (time) => {
    return time >= 12 && time < 17;
}
    
const isEvening = (time) => {
    return time >= 17 || time < 4;
}
    
module.exports = { getTimeOfDay, isMorning, isAfternoon, isEvening };