<?php

header('Access-Control-Allow-Origin: *');

// SDK de Mercado Pago
require __DIR__ .  '/vendor/autoload.php';
// Agrega credenciales
MercadoPago\SDK::setAccessToken('APP_USR-4076046132987876-110909-6eabb2cf87ba743789d48d700531380e-1235209127');


$preference = new MercadoPago\Preference();


//Suscripciòn semestral
$item2 = new MercadoPago\Item();
$item2->id = '0002';
$item2->title = 'Suscripciòn semestral';
$item2->quantity = 1;
$item2->unit_price = 600;
$item2->currency_id = 'ARS';


$preference->items = array($item2);
$preference->save();



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Integrando Mercado pago</title>
    <!-- SDK MercadoPago.js V2-->
<script src="https://sdk.mercadopago.com/js/v2"></script>


</head>
<body>


<div class="checkout-btn">

</div>
    

<script>
    const mp = new MercadoPago('APP_USR-60f8a6da-1bf2-4353-8037-087b87dc8096', {
        locale: 'es-AR'
    });

    mp.checkout({
        preference: {
            id: '<?php echo $preference->id; ?>'
        },
        render: {
            container: '.checkout-btn',
            label: 'Pagar con Mercado Pago'
        }
    })
    
</script>
</body>
</html>