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


      
      //Advanced data normalization (nested objects)

      //real scenario(API)

      const orders3 = [
        {
          id: 1,
          user: { id: 10, name: "Ana" },
          items: [
            { id: "p1", name: "Laptop", price: 1000 },
            { id: "p2", name: "Mouse", price: 50 }
          ]
        },
        {
          id: 2,
          user: { id: 20, name: "Luis" },
          items: [
            { id: "p2", name: "Mouse", price: 50 }
          ]
        }
      ];
      

      //Funciton to normalize the dataset.
      function normalizeOrders(orders3) {
        return orders3.reduce((acc, order) => {

            //normalizing users
            acc.users[order.user.id] = order.user;

            //normalizing products
            order.items.forEach(item => {
                acc.products[item.id] = item;
            });

            //Normalizing orders
            acc.orders[order.id] = {
                id: order.id,
                userId: order.user.id,
                items: order.items.map(item => item.id)
            };

            return acc;
        },{
            users: {},
            products: {},
            orders: {}
        });
      }


    console.log(normalizeOrders(orders3));



    //Example 5, Advanced normalization.

    const comments = [
      {
        id: 1,
        post: { id: 100, title: "JS Tips" },
        author: { id: 10, name: "Ana" },
        reactions: [
          { id: "r1", type: "like" },
          { id: "r2", type: "love" }
        ]
      },
      {
        id: 2,
        post: { id: 100, title: "JS Tips" },
        author: { id: 20, name: "Luis" },
        reactions: [
          { id: "r1", type: "like" }
        ]
      }
    ];
    

    //Function that will help us to normalize the json.
    function commentsNormalization(comments) {
      return comments.reduce((acc, comment) => {

        //Normalizing the posts
        acc.posts[comment.post.id] = comment.post;

        //Normalizing authors
        acc.authors[comment.author.id] = comment.author;

        //Normalizing reacctions.
        comment.reactions.forEach(reaction => {
          acc.reactions[reaction.id] = reaction;
        });

        //normalizing comments
        acc.comments[comment.id] = {
          id: comment.id,
          postId: comment.post.id,
          authorId: comment.author.id,
          reactions: comment.reactions.map(reaction => reaction.id)
        };

        return acc;

      }, {
        posts:{},
        authors: {},
        reactions: {},
        comments: {}
      })
    }