var products = [
    {"id":101,"name":"Basket Ball","image":"basketball.png","price":150},
    {"id":102,"name":"Football","image":"football.png","price":120},
    {"id":103,"name":"Soccer","image":"soccer.png","price":110},
    {"id":104,"name":"Table Tennis","image":"table-tennis.png","price":130},
    {"id":105,"name":"Tennis","image":"tennis.png","price":100}
];

storedInCart = []
for(var i =0 ; i < products.length ; i++)
{
    products[i].quantity = 0;
}
//products.quantity = 0;
var eachProduct = {};


display()

function display()
{
    var html = "";
    console.log("first")
    for(var i =0 ; i< products.length ; i++)
    {
        console.log("second")
        html+='<div id="'+products[i].id+'" class="product">\
				<img src="images/'+products[i].image+'">\
				<h3 class="title"><a href="#">Product '+products[i].id+'</a></h3>\
				<span>Price: '+products[i].price+'</span>\
				<a class="add-to-cart" href="#" data-pid = "'+products[i].id+'">Add To Cart</a>\
			</div>'
    }
    console.log("third")
    $('#products').html(html);
}


$(document).ready(function(){
    $("a").click(function(){
        console.log("You've clicked the link.");
        console.log(this)
        var pid = $(this).data('pid');
        console.log("this =" +pid)
            var product = getProduct(pid);
         console.log("object return by getProduct =" +product);

        //  console.log("ispresent"+Ispresent(pid))
        //  if(Ispresent(pid))
        //  {
        //       increaseQuantity(product)
        //  }else{
        //      storedInCart.push(product)
        //      increaseQuantity(product)
        //  }        
        storedInCart.push(product)
        display2(storedInCart,pid)
    });
 });

//  function Ispresent(pid)
//  {
//     for(var i =0 ; i < storedInCart.length ; i++)
//     {
//         console.log(pid +"=="+ storedInCart[i].id)
//         if(pid == storedInCart[i].id)
//         {
//             console.log("entered")
//             return true;         
//         }

//     }
//     return false;
//  }

//  function increaseQuantity(product)
//  {
//      product.quantity = product.quantity + 1
//  }


function display2(storedInCart,pid) {
   console.log("stored in cart length "+storedInCart.length)

    // if(stored)

    document.getElementById('id1').innerHTML = "<h1>Items Added in CART</h1>";
    var html = '';
    html += '<table><tr><th>ID</th><th>NAME</th><th>PRICE</th><th>Quantity</th></tr>';
    for(i =0 ; i < storedInCart.length ; i++)
    {
        html += '<tr><td>'+storedInCart[i].id+'</td><td>'+storedInCart[i].name+'</td><td>'+storedInCart[i].price+'</td><td>'+storedInCart[i].quantity+'</td></tr>';

    }
    html += '</table>';
    document.getElementById('footer').innerHTML = html;
}


function getProduct(pid)
{
    for(var i =0 ; i < products.length ; i++)
    {
        if(pid == products[i].id)
        {
            return products[i];
        }
    }
}