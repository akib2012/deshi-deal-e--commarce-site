/// get function by id always
function getId(id) {
    let getid = document.getElementById(id).innerText;
    return getid;
}

const btns = document.getElementsByClassName("btn");
for (let bt of btns) {
    bt.addEventListener('click',
        function () {

            const divs = document.getElementById("divv");
            const newDiv = document.createElement("div");

            const emne = divs.insertBefore(newDiv, divs.children[1]);

            emne.innerHTML = `<div class="bg-white h-[130px] p-[20px]">
                    <h3 class="text-[20px] font-semibold">have a coupn ?</h3>
                    <div class="join">
                        <div>
                            <label class="input validator join-item">
                                <svg class="h-[1em] opacity-50" viewBox="0 0 24 24">
                                    <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none"
                                        stroke="currentColor">


                                    </g>
                                </svg>
                                <input type="text" placeholder="" required />
                            </label>

                        </div>
                        <button class="btnn btn-secondary rounded-r-[10px]">apply</button>
                    </div>
                </div>`
            
            
            
            

            



            let price = bt.parentNode.parentNode.children[2].children[0].innerText;

            // console.log(price);
            let tottal_price = getId("total-price");

            let newPrice = Number(tottal_price) + Number(price);

            document.getElementById("total-price").innerText = newPrice; // jokhun print koramo tokhun function call korvo na sodo matro dirict documetn call kora lagbe!!



            let quan = getId("total-quantity");
            let quantity = Number(quan) + 1;

            document.getElementById("total-quantity").innerText = quantity;

        }
    )
}












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