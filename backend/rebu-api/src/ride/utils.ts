export const transformTime = (time) => {
    const minutes = Math.floor(+time / 60)
    const minuteText = minutes === 1 ? "1 minuto" : `${minutes} minutos`
    const remainingSeconds = +time % 60
    const secondText = remainingSeconds === 1 ? "1 segundo" : `${remainingSeconds} segundos`
    if (minutes > 0 && remainingSeconds > 0) {
        return `${minuteText} e ${secondText}`;
    } else if (minutes > 0) {
        return minuteText;
    } else {
        return secondText;
    }
}
