const btns = document.querySelectorAll(".btn-filter");
const storeproducts = document.querySelectorAll(".box");




for(i=0 ; i<btns.length ; i++)
{
    btns[i].addEventListener("click",(e) => {
        e.preventDefault();

        const filter = e.target.dataset.filter;

        storeproducts.forEach((product)=> {

            if(filter == "all")
            {
                product.style.display = "block"
            }
            else
            {
                if(product.classList.contains(filter))
                {
                    product.style.display = "block"
                }
                else
                {
                    product.style.display = "none"
                }
            }


        })


    })
}

//remove the active button
btns.forEach((li)=>{
    li.addEventListener("click",removeactive);
})
function removeactive()
{
    btns.forEach((li)=>{
    li.classList.remove("active");
    this.classList.add("active");

    })
}
