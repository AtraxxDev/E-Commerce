/*
const initPaypalButton=()=>{
    paypal.Buttons({
        createOrder: function (data, actions) {
            // Detalles de la transacción, cantidad, items
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '277'
                    }
                }]
            });
        }
    }).render('#paypal-button-container');
};

export default initPaypalButton;
*/
/*
export function createOrder(data,actions){
    
    actions.order.create({
        purchase_units:[{
            amount:{
                value:data
            }
        }]
    }).render('#paypal-button-container')
}*/

/*
<script src="https://www.paypal.com/sdk/js?client-id=ARxBPewGtWPGPJMr1rccXbj0P86O3Tj1rvdyDmXAhe929EzY_BhENHXun2LkB6lXAuv3M0fflq0ACkRk"></script>
                        <script>
                            paypal.Buttons({
                                createOrder:function(data,actions){
                                    //Detalles de la transacción, cantidad, items
                                    return actions.order.create({
                                        purchase_units:[{
                                            amount:{
                                                value:'299.99'
                                            }
                                        }]
                                    });
                                }
                            }).render('#paypal-button-container')
                        </script>*/