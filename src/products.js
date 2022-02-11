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

var eachProduct = {};
display()

function display()
{
    var html = "";
   // console.log("first")
    for(var i =0 ; i< products.length ; i++)
    {
       // console.log("second")
        html+='<div id="'+products[i].id+'" class="product">\
				<img src="images/'+products[i].image+'">\
				<h3 class="title"><a href="#">Product '+products[i].id+'</a></h3>\
				<span>Price: '+products[i].price+'</span>\
				<a class="add-to-cart" href="#" data-pid = "'+products[i].id+'">Add To Cart</a>\
			</div>'
    }
   // console.log("third")
    $('#products').html(html);
}


$(document).ready(function(){
    $("a").click(function(){
        console.log("You've clicked the link.");
        var pid = $(this).data('pid');
            var product = getProduct(pid);
         if(Ispresent(pid))
         {
              increaseQuantity(product)
         }else{
             storedInCart.push(product)
             increaseQuantity(product)
         }        
        
        display2(storedInCart,pid)
    });
 });

 function Ispresent(pid)
 {
    for(var i =0 ; i < storedInCart.length ; i++)
    {
        if(pid == storedInCart[i].id)
        {
            return true;         
        }
    }
    return false;
 }

 function increaseQuantity(product)
 {
     product.quantity = product.quantity + 1
 }


function display2(storedInCart,pid) {
   console.log("stored in cart length "+storedInCart.length)

    document.getElementById('id1').innerHTML = "<h1>Items Added in CART</h1>";
    var html = '';
    html += '<table id = "customers"><tr><th>ID</th><th>NAME</th><th>PRICE</th><th>Quantity</th><th>Action</th><th></th></tr>';
    for(i =0 ; i < storedInCart.length ; i++)
    {
        html += '<tr><td>'+storedInCart[i].id+'</td><td>'+storedInCart[i].name+'</td><td>'+storedInCart[i].price+'</td><td>'+storedInCart[i].quantity+'</td><td><button class="editclass" data-pid2 = "'+storedInCart[i].id+'">ADD</button></td> <td><button id="delclass">DELETE</button></td></tr>';

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

$("body").on("click","#delclass" ,function(e){
    $(this).parents('tr').remove();
  });




$("body").on("click",".editclass" ,function(e){
    console.log("im inside edit functoin");
    var pid = $(this).data('pid2');
    var product = getProduct(pid);
    console.log("in edit fucntoin pid = "+pid);

    var Q = "";
    for(var i =0 ; i < storedInCart.length ; i++)
    {
        if(pid == storedInCart[i].id)
        {
            Q = storedInCart[i].quantity
        }
    }


    $(this).parents('tr').find('td:eq(3)').html("<input name='edit_quantity' value='"+Q+"'>");
    $(this).parents('tr').find('td:eq(4)').prepend("<button type='button'  class='updatebutton' data-pid3 = '"+pid+"'>Update</button>");
    $(this).hide()
  });



  $('body').on('click','.updatebutton',function() {
    var updated_quantity=$(this).parents('tr').find("input[name='edit_quantity']").val();
console.log("after press update button value wil be"+updated_quantity)

var pid = $(this).data('pid3');
var product = getProduct(pid);
console.log("in update fucntoin pid = "+pid);

for(var i =0 ; i < storedInCart.length ; i++)
{
    if(storedInCart[i].id == pid)
    {
        storedInCart[i].quantity = updated_quantity 
    }
}

    $(this).parents('tr').find('.editclass').show();
    $(this).parents('tr').find('.updatebutton').remove();
    
  });