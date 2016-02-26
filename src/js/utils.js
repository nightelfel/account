var Utils = {
    getTime: function () {
        var time = new Date();
        var date = '' + time.getDate();
        var month = '' + (time.getMonth() + 1);
        var year = '' + time.getFullYear();
        if (date.length < 2) {
            date = '0' + date;
        }
        if (month.length < 2) {
            month = '0' + month;
        }
        var obj = {
            date: date,
            month: month,
            year: year
        };
        return (obj);
    },
    showRecord: function (time) {
        $('#record').show();
        var date = time.year + '-' + time.month + '-' + time.date;
        var inputs = $('#record').find('input');
        $(inputs[2]).val(date);
    }
};
