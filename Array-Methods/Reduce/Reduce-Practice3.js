//Sales Analizer - Small sales analizer to use Reduce().

//Array of objects with products of the store.
const sales = [
    {product: 'Laptop', price: 1200, quantity: 2},
    {product: 'Mouse', price: 25, quantity: 5},
    {product: 'Keyboard', price: 80, quantity: 1},
    {product: 'Monitor', price: 300, quantity: 2}
];


//Function to calculate the total revenue (multiplying the price by the quantity)
function getTotalRevenue(sales) {
    return sales.reduce((acc, item) => {
        return acc + (item.price * item.quantity)
    },0);
}

//Function that helps to get the amount of Items sold
function getTotalItemsSold(sales) {
    return sales.reduce((acc, item )=>{
        return acc + item.quantity;
    },0);
}

//Function that helps us to get the revenue but per product
function getRevenueByProduct(sales) {
    return sales.reduce((acc, item) => {
        const revenue = item.price * item.quantity;

        if(!acc[item.product]){
            acc[item.product] = 0;
        }

        acc[item.product] += revenue;

        return acc;
    }, {});
}


//Function to get global total of revenue, global amount of items, and every item revenue
function getFullSalesSummary(sales) {
    return sales.reduce((acc, item) => {
        const revenue = item.price * item.quantity;

        //totals
        acc.totalRevenue += revenue;
        acc.totalItems += item.quantity;

        //revenue per product.
        if(acc.products[item.product] === undefined){
            acc.products[item.product] = 0;
        }

        acc.products[item.product] += revenue

        return acc;
    }, {
        totalRevenue: 0,
        totalItems: 0,
        products: {}
    });
}