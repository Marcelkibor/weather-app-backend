const router = require("express").Router();
const verify  = require("../verifyToken");
const locations = ['Mombasa','Kwale','Kilifi','Tana River','Lamu','Taita Taveta','Garissa','Wajir','.Mandera','Marsabit',
'Isiolo','Meru','Tharaka Nithi','Embu','Kitui','Machakos','Makueni','Nyandarua','Nyeri','Kirinyaga','Murang’a','Kiambu',
'Turkana','West Pokot','Samburu','Trans Nzoia','Uasin Gishu','Elgeyo Marakwet','Nandi','Baringo','Laikipia','Nakuru',
'Narok','Kajiado','Kericho','Bomet','Kakamega','Vihiga','Bung’oma','Busia','Siaya','Kisumu','Homa Bay','Migori','Kisii.','Nyamira','Nairobi']

//add middleware for verification
router.get('/',verify,(req,res)=>{
    res.json({locations})
})
module.exports = router