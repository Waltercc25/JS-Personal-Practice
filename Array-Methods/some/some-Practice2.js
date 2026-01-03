//validaating products.

const orders = [
    {
      id: 1,
      customer: "Ana",
      paid: true,
      items: [
        { name: "Laptop", stock: 3 },
        { name: "Mouse", stock: 10 }
      ]
    },
    {
      id: 2,
      customer: "Luis",
      paid: false,
      items: [
        { name: "Keyboard", stock: 5 }
      ]
    },
    {
      id: 3,
      customer: "Maria",
      paid: true,
      items: [
        { name: "Monitor", stock: 0 }
      ]
    }
  ];


  // Function using some (nested).
  function hasInvalidOrders(orders) {
    return orders.some(order => 
        order.paid &&
        order.items.some(item => item.stock === 0)
    );
  }


//Validating Sources.

const courses = [
    {
      id: 1,
      title: "JavaScript Básico",
      published: true,
      lessons: [
        { title: "Variables", duration: 10 },
        { title: "Funciones", duration: 15 }
      ]
    },
    {
      id: 2,
      title: "React Avanzado",
      published: true,
      lessons: [
        { title: "Hooks", duration: 0 }
      ]
    },
    {
      id: 3,
      title: "Node.js",
      published: false,
      lessons: [
        { title: "Streams", duration: 20 }
      ]
    }
  ];

  //Funtion also using nested some method.
  function hasInvalidPublishedCourses(courses) {
    return courses.some(course => 
        course.published &&
        course.lessons.some(lesson => lesson.duration === 0)
    );
  }

  
//Function using (some, filter and every) all the courses must have their lessons with a duration longer than 0

function allPublishedCoursesAreValid(courses) {
    return courses
    .filter(course => course.published)
    .every(course => 
        course.lessons.every(lesson => lesson.duration > 0)
    );
}

const orders2 = [
    {
      id: 1,
      paid: true,
      items: [
        { name: "Laptop", stock: 3 },
        { name: "Mouse", stock: 10 }
      ]
    },
    {
      id: 2,
      paid: true,
      items: [
        { name: "Keyboard", stock: 0 }
      ]
    },
    {
      id: 3,
      paid: false,
      items: [
        { name: "Monitor", stock: 0 }
      ]
    }
  ];
  
  //Function to confirm the paid orders and verify if the stock is more then 0 to ship the orders.
  function canShipAllPaidOrders(orders2) {
    const paidOrders = orders2.filter(order => order.paid);

    return paidOrders.length > 0 &&
        paidOrders.every(order =>
            order.items.every(item => item.stock > 0)
        );
  }