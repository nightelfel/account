var data = [];
var dataHandler;

var Page = {
    layout: function () {
        var t = Utils.getTime();
        var store = localStorage.getItem("store");
        if (store) {
            store = $.parseJSON(store);
            data = store.data;
        }
        dataHandler = new DataHandler(data);

        $("#mainTime").html(t.year + '-' + t.month);

        $('#takeRecord').on('click', function () {
            Utils.showRecord(t);
            var inputs = $('#record').find('input');
            $(inputs[0]).focus();
        });

        $('#record').find('span').on('click', function () {
            $('#record').hide();
        });

        $('#alert').hide();

        Page.calculateTotal();
        $('#addConfirm').on('click', function () {
            Page.addRecord();
        });
        Page.showTable();
        Page.calculateTotal();
    },

    calculateTotal: function () {
        var table = $('table');
        var total = 0;
        var rows = table.find('tr');
        for (var i = 0; i < rows.length; i++) {
            var row = $(rows[i]);
            var value = $(row.find('td')[1]).html();
            if (value) {
                if (Number(value)) {
                    total = total + Number(value);
                }
            }
        }
        $('#totalMoney').html('支出: ' + total);
    },

    addRecord: function () {
        var inputs = $('#record').find('input');
        var validate = Page.isValid();
        if (!validate) {
            return;
        }
        var detail = $(inputs[0]).val();
        var money = $(inputs[1]).val();
        var time = $(inputs[2]).val();

        dataHandler.addRecord(detail, money, time);

        Page.showTable();

        Page.calculateTotal();
    },

    isValid: function () {
        var inputs = $('#record').find('input');
        for (var i = 0; i < inputs.length; i++) {
            if ($(inputs[i]).val() === '') {
                $('#alert').show();
                return false;
            }
        }
        return true;
    },

    showTable: function () {
        if (data.length === 0) {
            return;
        }
        dataHandler.sort();
        var inputs = $('#record').find('input');
        $('table').empty();
        for (var i = 0; i < data.length; i++) {
            var timeRow = $(window.template.timeRow({
                time: data[i].time
            }));
            $('table').append(timeRow);
            for (var j = 0; j < data[i].records.length; j++) {
                var temp = data[i].records[j];
                var tableRow = $(window.template.tableRow({
                    detail: temp.detail,
                    money: temp.money
                }));
                $('table').append(tableRow);
            }
        }
        inputs.val('');
        $('#record').hide();
        var store = {
            data: data
        };
        localStorage.setItem("store", JSON.stringify(store));
    }
};
