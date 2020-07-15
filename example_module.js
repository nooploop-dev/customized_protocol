import { getMean, getMedian, getVariance, addNewData } from "./example_other_module.js"

export function medianFilter(data, length) {
    medianFilter.datas = addNewData(medianFilter.datas, data, length);
    return getMedian(medianFilter.datas);
}

export function meanFilter(data, length) {
    meanFilter.datas = addNewData(meanFilter.datas, data, length);
    return getMean(meanFilter.datas);
}


export function calculateVariance(data, length) {
    calculateVariance.datas = addNewData(calculateVariance.datas, data, length);
    return getVariance(calculateVariance.datas);
}

export function calculateStandardDeviation(data, length) {
    return Math.sqrt(calculateVariance(data, length));
}

export function positionFilter(dataX, dataY, dataZ, offsetZ, length) {
    positionFilter.datasX = addNewData(positionFilter.datasX, dataX, length);
    var x = getMean(positionFilter.datasX);
    positionFilter.datasY = addNewData(positionFilter.datasY, dataY, length);
    var y = getMean(positionFilter.datasY);
    positionFilter.datasZ = addNewData(positionFilter.datasZ, dataZ, length);
    var z = getMean(positionFilter.datasZ) + offsetZ;
    return [x, y, z];
}

export function checkRange(data, min, max) {
    if (min < max && (data < min || data > max)) {
        console.warn('data ', data, ' is out of range');
    }
}
