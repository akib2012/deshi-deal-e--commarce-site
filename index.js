/// get function by id always
function getId(id) {
    let getid = document.getElementById(id).innerText;
    return getid;
}
let emne;
const btns = document.getElementsByClassName("btn");
for (let bt of btns) {
    bt.addEventListener('click',
        function () {



            let price = bt.parentNode.parentNode.children[2].children[0].innerText;
            let title  = bt.parentNode.parentNode.children[1].innerText;
            let img = bt.parentNode.parentNode.parentNode.children[0].src;
            
            

            // console.log(price);
            let tottal_price = getId("total-price");

            let newPrice = Number(tottal_price) + Number(price);

            document.getElementById("total-price").innerText = newPrice; // jokhun print koramo tokhun function call korvo na sodo matro dirict documetn call kora lagbe!!



            let quan = getId("total-quantity");
            let quantity = Number(quan) + 1;

            document.getElementById("total-quantity").innerText = quantity;


            /* add or append any html elemtns any places  */
            const divs = document.getElementById("clears-all");
            const newDiv = document.createElement("div");

            emne = divs.appendChild(newDiv);  //here add amy place to add new elements 

            emne.innerHTML = ` <br> <div class="bg-white h-[100px] p-[20px]" id="price-add-bouchers" class = "remove">
                    <div class="flex justify-between items-center">
                        <img src="${img}" alt="" class="w-[50px] h-[60px] p-[5px]">
                        <div>
                            <h4>${title}</h4>
                            <h4>Price: <span id="total-prices">${price}</span> TK</h4>
                            
                        </div>
                        <button class="btn btn-secondary rounded-r-[10px]" id="removeit">remove</button>
                    

                    </div>


                </div>`
        //  return emne;

        }
    )
}


/* clear all button functionality  here */

document.getElementById("clear-btn").addEventListener("click",
    function() {
        const divsss = document.getElementById("clears-all");
        divsss.innerHTML = "";
        // console.log("her click the clear button");
        document.getElementById("total-price").innerText = "0";
        document.getElementById("total-quantity").innerText = "0";
        


    }
)



/* document.getElementById("removeit").addEventListener("click",
    function(){
        console.log("remove button cliked !!!");
    }
) */


/* document.getElementById("btn-clear").addEventListener("click", function () {
  const cartContainer = getElement("cart-container");
  cartContainer.innerHTML = "";
  getElement("total-quantity").innerText = 0;
  getElement("total-price").innerText = 0;
}); */








// jekono aktar jonn try marlam okay?🌟😉🤞
/* document.getElementById("btn-id").addEventListener("click",
    function(){
        
        let price = getId("price-of-product");
        let tottal_price = getId("total-price");

        let newPrice = Number(tottal_price) + Number(price);

        document.getElementById("total-price").innerText = newPrice; // jokhun print koramo tokhun function call korvo na sodo matro dirict documetn call kora lagbe!!



        let quan = getId("total-quantity");
        let quantity = Number(quan) + 1;

        document.getElementById("total-quantity").innerText = quantity;

    }
) */