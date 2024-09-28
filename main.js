function AddEventInItemById(id){    
    document.getElementById(id).addEventListener('click', function(){
        const productDiv = document.getElementById(id)
        const productName = productDiv.querySelector('h2').innerText
        const productPrice = parseFloat(productDiv.querySelector('span').innerText)
        
        console.log(productName);
        console.log(productPrice);

        let totalPrice = parseFloat(document.getElementById('total-price').innerText)
        totalPrice += productPrice
        document.getElementById('total-price').innerText = totalPrice

        let finalTotal = totalPrice
        // if(totalPrice >= 200){
        //     // const discountedPrice = (totalPrice * 20) / 100
        //     // document.getElementById('discount-price').innerText = discountedPrice
        //     // finalTotal = totalPrice - discountedPrice
        //     document.getElementById('btn-apply').removeAttribute('disabled')
        // }
        document.getElementById('final-total').innerText = finalTotal

        const cartContainer = document.createElement('div')
        cartContainer.innerHTML = `
            <div>
                <p class="mb-2 font-semibold text-lg">${productName}</p>
            </div>
        `
        const totalCountDiv = document.getElementById('total-count-div')
        // document.getElementById('purchased-product-list').insertBefore(cartContainer, totalCountDiv)
        document.getElementById('purchased-product-list').appendChild(cartContainer)
    })
}

AddEventInItemById('product-1')
AddEventInItemById('product-2')
AddEventInItemById('product-3')
AddEventInItemById('product-4')
AddEventInItemById('product-5')
AddEventInItemById('product-6')
AddEventInItemById('product-7')
AddEventInItemById('product-8')
AddEventInItemById('product-9')


document.getElementById('purchase=btn').addEventListener('click', function(){

    my_modal_1.showModal()
    document.getElementById('purchased-product-list').innerHTML = ''
    const totalPrice = document.getElementById('total-price')
    const discountPrice = document.getElementById('discount-price')
    const finalTotalPrice = document.getElementById('final-total')
    totalPrice.innerText = '00'
    discountPrice.innerText = '00'
    finalTotalPrice.innerText = '00'

})


document.getElementById('coupon-code')
      .addEventListener('keyup', function(event){
        const inputValue = event.target.value
        console.log(inputValue);
        if(inputValue === 'SELL200'){
            document.getElementById('btn-apply').removeAttribute('disabled')
            alert('Coupon Code SELL200 is applied')
        }
        
})

document.getElementById('btn-apply').addEventListener('click', function(){
    const inputValue =  document.getElementById('coupon-code').value
    // inputValue.value = ''
    // console.log('clicked', inputValue);

    if(inputValue === 'SELL200'){
        document.getElementById('btn-apply').removeAttribute('disabled')
        // alert('Coupon Code SELL200 is applied')
    }

    let totalPrice = parseFloat(document.getElementById('total-price').innerText)
    let finalTotal = totalPrice
    const discountedPrice = (totalPrice * 20) / 100
    document.getElementById('discount-price').innerText = discountedPrice
     finalTotal = totalPrice - discountedPrice
     document.getElementById('final-total').innerText = finalTotal
    
 })