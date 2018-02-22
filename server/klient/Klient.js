var mongoose = require('mongoose');
var KlientSchema = new mongoose.Schema({
  id: String,
      typ_prawny: Number,
      n_firmy: String,
      pesel: String,
      nazwisko: String,
      imie: String,
      kod: String,
      miejscowosc: String,
      ulica: String,
      kod_k: String,
      miejscowosc_k: String,
      ulica_k: String,
      tel: String,
      tel_kom: String,
      email: String,
      data_wyd: Date,
      Kat: String,
      nip: String,
      regon: String,
      uwagi: String
});
mongoose.model('Klient', KlientSchema);

module.exports = mongoose.model('Klient');
