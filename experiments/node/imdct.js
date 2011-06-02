var fs = require('fs');
var sys = require('sys');

require('./typed-array.js');
require('../../mad.js');
require('../../imdct_s.js');
require('../../layer3.js');

function test_imdct_s() {
    var X = [
            -0.04093509,0.08902737,-0.04673872,0.81290334,0.33560085,-0.10171456,0.00504069,0.01295291,-0.06297208,0.59918465,0.49750966,0.04453132,0.00895240,0.00263847,-0.08176661,0.16397671,0.64196996,0.02567524];
    var z = [
        0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.08577475,-0.25815145,-0.18377631,0.23950195,0.62323273,-0.65152391,-0.07279154,0.76031951,-0.55000097,-0.29281906,0.79850607,-0.38041764,-0.47771208,0.78320405,-0.18270260,-0.62917816,0.71326943,0.02766476,-0.66871921,0.65951302,-0.23426843,-0.17976049,0.27317924,-0.08803856,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000];

    var _z = [];

    Mad.III_imdct_s(X, 0, _z);

    for (var i = 0; i < 36; i++) {
        console.log(Math.abs(_z[i] - z[i]));
    }
}

function test_imdct_l() {
    var X, z;

    X = [
            -0.00048066,-0.00054808,0.00167604,0.00182871,-0.00358925,-0.00410959,0.00777910,0.01007085,-0.02279030,-0.04289347,0.26965541,-0.63553121,-0.26141275,-0.04325058,0.02372279,0.01200023,-0.01000499,-0.00799890];
    z = [
            -0.01657986,0.10046391,-0.03129764,-0.19516312,0.21620646,0.12183119,-0.38838422,0.12602713,0.39296440,-0.42884540,-0.16424175,0.60964111,-0.23403555,-0.52196859,0.61897832,0.14117452,-0.76309917,0.37974112,0.46963350,-0.76341553,0.29892312,0.41404148,-0.67129315,0.27711135,0.32650343,-0.55648259,0.25239373,0.23127624,-0.42700411,0.20800562,0.14425503,-0.27805873,0.13054677,0.06626966,-0.10050556,0.02050464];

    _z = [];

    Mad.III_imdct_l(X, 0, _z, 0);

    for (var i = 0; i < 36; i++) {
        console.log(Math.abs(_z[i] - z[i]));
    }

    X = [
            -0.02502749,-0.02467428,-0.02383710,-0.02223757,-0.01950704,-0.01533347,-0.00945976,-0.00192413,0.00689093,0.01623087,0.02511228,0.03241420,0.03710076,0.03837438,0.03574897,0.02914715,0.01910392,0.00665824];
    z = [
            -0.00000008,-0.00000039,-0.00000881,0.00000329,-0.00000494,0.00000096,0.00000473,0.00000410,0.00001113,-0.00001216,-0.00000535,-0.00000744,-0.00000184,0.00001191,-0.00001045,0.00003971,0.00000298,0.00000172,-0.00000943,0.00001619,-0.00017760,0.00081702,-0.00045995,0.00505592,-0.09994537,0.26467714,0.02750298,0.02110377,0.10963286,-0.01315806,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000,0.00000000];

    _z = [];

    Mad.III_imdct_l(X, 0, _z, 1);

    for (var i = 0; i < 36; i++) {
        console.log(Math.abs(_z[i] - z[i]));
    }
}

test_imdct_s();
test_imdct_l();