'use strict';

module.exports = function (app) {
    var jsonku = require('./../controller/controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/data')
        .get(jsonku.tampilsemuamahasiswa);

    app.route('/data/:id')
        .get(jsonku.tampilberdasarkanid);

    app.route('/data')
        .post(jsonku.tambahMahasiswa);

    app.route('/data/:id')
        .put(jsonku.ubahMahasiswa);

    app.route('/data/:id')
        .delete(jsonku.hapusMahasiswa);

    app.route('/matakuliahdata')
        .get(jsonku.tampilgroupmatakuliah);
}