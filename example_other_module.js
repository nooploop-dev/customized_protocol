export function getMean(arr) {
    if (arr.length) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum / arr.length;
    } else {
        return 0;
    }
}

export function getVariance(arr) {
    if (arr.length) {
        var v = 0;
        var mean = getMean(arr);
        for (var i = 0; i < arr.length; i++) {
            v += (arr[i] - mean) * (arr[i] - mean);
        }
        return v / arr.length;
    } else {
        return 0;
    }
}

export function getMedian(arr) {
    if (arr.length) {
        var arrSorted = arr.slice().sort();
        var median = 0;
        if (arrSorted.length % 2 == 1) {
            median = arrSorted[(arrSorted.length + 1) / 2 - 1];
        }
        else {
            median = (arrSorted[arrSorted.length / 2 - 1] + arrSorted[arrSorted.length / 2]) / 2;
        }
        return median;
    } else {
        return 0;
    }
}

export function addNewData(arr, data, length) {
    if (typeof arr == 'undefined') {
        arr = [];
    }
    arr.push(data);
    while (arr.length > length) {
        arr.shift();
    }
    return arr;
}