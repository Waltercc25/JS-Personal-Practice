//Example to normalize data from jsons so the información doesnt get duplicated.

const purchases = [
    {
      id: 1,
      customer: { id: "c1", name: "Ana" },
      products: [
        { id: "p1", name: "Book", price: 20 },
        { id: "p2", name: "Pen", price: 5 }
      ]
    },
    {
      id: 2,
      customer: { id: "c2", name: "Luis" },
      products: [
        { id: "p2", name: "Pen", price: 5 }
      ]
    }
  ];
  
  function normalizingPurchases(purchases) {
    return purchases.reduce((acc, purchase) => {

        //normalizing customers.
        acc.customers[purchase.customer.id] = purchase.customer;

        //normalizing products
        purchase.products.forEach(product => {
            acc.products[product.id] = product;
        });


        //calculating total of the purchase.
        const totalPrice = purchase.products.reduce((sum, product) =>
        sum + product.price, 0);

        //normalizing purchases
        acc.purchases[purchase.customer.id] = {
            id: purchase.id,
            customerId: purchase.customer.id,
            products: purchase.products.map(product => product.id),
            totalPrice
        };

        return acc;
    }, {
        customers: {},
        products: {},
        purchases: {}  
    })
  }