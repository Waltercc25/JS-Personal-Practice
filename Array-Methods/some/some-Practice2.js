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

  
