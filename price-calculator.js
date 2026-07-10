function calculateDiscount(price, discountPercent){
    let discountAmount = price * (discountPercent / 100 );
    return discountAmount;
}

function calculateTax(priceAfterDiscount, taxPercent){
    let tax = priceAfterDiscount * (taxPercent / 100);
    return tax;

}

function calculateFinalPrice(price, discount, tax){
    let finalPrice = price - discount + tax; 

}
function createPriceSummary( price, discountPercent, taxPercent){
    let priceAfterDiscount = price - calculateDiscount(price, discountPercent);
    let discount = calculateDiscount(price, discountPercent);
    let tax = calculateTax(priceAfterDiscount, price);
    
    let finalPrice =createPriceSummary(price, discount, tax)

    let summary =  {
        price : price,
        discount : `${discount}`,
        tax : `${tax}`,
        finalPrice : `${finalPrice}`
        
    };
    
    return summary;

}

//Tests
console.log(createPriceSummary(100, 20, 10));
console.log(createPriceSummary(200, 25, 5));
console.log(createPriceSummary(50, 0, 10));