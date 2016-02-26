var DataHandler = function (data) {
    this.content = data;
};

DataHandler.prototype = {
    addRecord: function (detail, money, time) {
        var that = this;
        var inside = false;
        var index = 0;
        for (var i = 0; i < that.content.length; i++) {
            if (that.content[i].time === time) {
                inside = true;
                index = i;
                break;
            }
        }
        if (inside) {
            var dayRecord = that.content[index];
            that.addDayRecord(dayRecord, detail, money, time);
        } else {
            var dayRecord = that.createDayRecord(time);
            that.content.push(dayRecord);
            that.addDayRecord(dayRecord, detail, money, time);
        }
    },
    addDayRecord: function (obj, detail, money, time) {
        var record = {
            detail: detail,
            money: money,
            time: time
        };
        obj.records.push(record);
    },
    createDayRecord: function (time) {
        var obj = {
            time: time,
            records: []
        };
        return (obj);
    },
    sort: function () {
        var array = this.content;
        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < array.length - 1; j++) {
                if (array[j].time < array[j + 1].time) {
                    var temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
    }
};


