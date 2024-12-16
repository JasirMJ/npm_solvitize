export const getCountdownTime = (targetTime) => {
    const currentTime = new Date().getTime();
    const target = new Date(targetTime).getTime();
    const timeDiff = target - currentTime;

    let obj = {}
    // if timeDiff is less than or equal to 0, return "Time's up!"
    if (timeDiff <= 0) {

        obj = {
            timestring: `Time's up!`,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
        return obj;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    obj = {
        timestring: `${days}d ${hours}h ${minutes}m ${seconds}s`,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    }

    return obj;

};