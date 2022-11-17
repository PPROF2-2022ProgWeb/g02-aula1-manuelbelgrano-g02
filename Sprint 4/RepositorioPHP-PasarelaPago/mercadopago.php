<?php

header('Access-Control-Allow-Origin: *');

// SDK de Mercado Pago
require __DIR__ .  '/vendor/autoload.php';
// Agrega credenciales
MercadoPago\SDK::setAccessToken('APP_USR-4076046132987876-110909-6eabb2cf87ba743789d48d700531380e-1235209127');


$preference = new MercadoPago\Preference();


//Suscripciòn mensual
$item = new MercadoPago\Item();
$item->id = '0001';
$item->title = 'Suscripciòn mensual';
$item->quantity = 1;
$item->unit_price = 400;
$item->currency_id = 'ARS';


$preference->items = array($item);
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