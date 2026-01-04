// Data Normalization + Reduce.

//example of datasets where the names of an user is repeated.(commun on APIs)
const orders = [
    {
      id: 1,
      user: { id: 10, name: "Ana" },
      items: [{ productId: 100, price: 50 }]
    },
    {
      id: 2,
      user: { id: 10, name: "Ana" },
      items: [{ productId: 200, price: 30 }]
    }
  ];
  
  //Normalized data.

  /* {
    users: {
      10: { id: 10, name: "Ana" }
    },
    orders: {
      1: { id: 1, userId: 10, items: [100] },
      2: { id: 2, userId: 10, items: [200] }
    }
  } */
  
    //Example 1: normalizing users(reduce).

    //input.
    const users = [
        { id: 1, name: "Ana" },
        { id: 2, name: "Luis" }
      ];

        //function we can use to normalize the dataset.
      function normalizeUsers(users) {
        return users.reduce((acc, user) => {
          acc[user.id] = user;
          return acc;
        }, {});
      }
      

    //output.
    const users2 = [
        {
        1: { id: 1, name: "Ana" },
        2: { id: 2, name: "Luis" }
      }
    ];
  

    //Example 3 to normalize the data.
    const products = [
        { id: "a1", name: "Laptop", price: 1000 },
        { id: "b2", name: "Mouse", price: 50 }
      ];
      
      function normalizeProducts(products) {
        return products.reduce((acc, product) => {
            acc[product.id] = product;
            return acc;
        }, {});
      }

      console.log(normalizeUsers(products));


      