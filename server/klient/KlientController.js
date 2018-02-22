var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Klient = require('./Klient');
var VerifyToken = require('../auth/VerifyToken');

router.post('/klientdt', VerifyToken, function(req, res) {
       var sorting = {}
       var start = 0
       var page = parseInt(req.body.page);
       if ( page > 1)
                start = (page -1) * 5;
       sorting[req.body.sort[0]] = req.body.sort[1]
       var filter = ""
       if (req.body.filter)
                filter = req.body.filter
       var q = Klient.aggregate([
           {
            $project: {
                         klient: { $toLower:{ $concat:[ {$ifNull: ["$n_firmy", ""]}," ",{$ifNull: ["$nazwisko", ""]}," ",{$ifNull: ["$imie", ""]}]}},
                         pesel: {$ifNull:["$pesel",""]},
                         tel: {$ifNull:["$tel",""]},
                         miejscowosc:1,ulica:1
                      }
        },
        {
               $match: {
                         $or: [
                             {klient: {'$regex':'^' + filter,'$options':'i'}},
                             {klient: {'$regex':'^ ' + filter,'$options':'i'}},
                             {pesel: {'$regex':'^' + filter,'$options':'i'}}
                        ]
                      }
        },
        {$sort : sorting},
        {$skip : start},
        {$limit : 5}
      ]);

      var q_count = Klient.aggregate([

          {
           $project: {
                        klient: { $toLower:{ $concat:[ {$ifNull: ["$n_firmy", ""]}," ",{$ifNull: ["$nazwisko", ""]}," ",{$ifNull: ["$imie", ""]}]}},
                        pesel: {$ifNull: ["$pesel",""]}
                     }
       },
       {
              $match: {
                        $or: [
                            {klient: {'$regex':'^' + filter,'$options':'i'}},
                            {klient: {'$regex':'^ ' + filter,'$options':'i'}},
                            {pesel: {'$regex':'^' + filter,'$options':'i'}}
                       ]
                     }
        },
        {
          $count : "count"
        }
     ]);
      q_count.exec(function(err, count_f) {
       var recFilter = 0;
       if (count_f.length > 0)
             recFilter = parseInt(count_f[0].count)
      q.exec(function(err, osobas) {
           if (err)
               res.send(err);
           var data_send = {"recordsFiltering": recFilter, "data": osobas}
           res.json(data_send);
     })
   })
 })


router.get('/klient/:id', VerifyToken, function(req, res, next) {
//router.get('/klient/:id', function(req, res, next){
 var id = req.params.id;
  Klient.findById(id, function (err, klient) {
    if (err) return next('Wystąpił błąd podczas  wyszukiwania klienta.');
    res.json(klient);
  });
});

router.put('/klient/:id', VerifyToken, function(req, res, next) {
if (req.body.data_wyd)
{
   var data = new Date(req.body.data_wyd['year']+'-'+req.body.data_wyd['month']+'-'+req.body.data_wyd['day']+' 00:00 UTC');
   req.body.data_wyd = data.toISOString();
}
  Klient.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next('Wystąpił błąd podczas aktualizowania klienta.');
    res.json(post);
  });
});

router.delete('/klient/:id', VerifyToken, function(req, res, next) {
  Klient.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next('Wystąpił błąd podczas usuwania klienta.');
    res.json(post);
  });
});

router.post('/klient_new', VerifyToken, function(req, res) {
    var klient = new Klient();
    klient.n_firmy = req.body.n_firmy;
    klient.typ_prawny = req.body.typ_prawny;
    klient.pesel = req.body.pesel;
    klient.nazwisko = req.body.nazwisko;
    klient.imie = req.body.imie;
    klient.kod = req.body.kod;
    klient.miejscowosc = req.body.miejscowosc;
    klient.ulica = req.body.ulica;
    klient.kod_k = req.body.kod_k;
    klient.miejscowosc_k = req.body.miejscowosc_k;
    klient.ulica_k = req.body.ulica_k;
    klient.tel = req.body.tel;
    klient.tel_kom = req.body.tel_kom;
    klient.email = req.body.email;
    var data = new Date(req.body.data_wyd['year']+'-'+req.body.data_wyd['month']+'-'+req.body.data_wyd['day']+' 00:00 UTC');
    klient.data_wyd = data.toISOString();
    klient.Kat = req.body.Kat;
    klient.nip = req.body.nip;
    klient.regon = req.body.regon;
    klient.uwagi = req.body.uwagi;
    klient.ts = new Date();
    klient.save(function(err) {
        if (err)
            res.send('Wystąpił błąd podczas dodawania klienta.');
        res.json({ m: 1 });
    });
  })


module.exports = router;
