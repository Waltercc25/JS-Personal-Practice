//Shallow copy vs Deep copy 

//learning about how to modify nested data without mutating the original.

//commun error, where we want to change the theme from light to dark.
const user = {
    id: 1,
    name: 'walter',
    settings: {
        theme: 'light',
        Notifications: true
    }
};


//Incorrect way, we accidently mutate the object.
/*const updated1 = { ...user};
updated1.settings.theme = 'dark';*/

//Correct way (parcial deep copy).
const updated2 = {
    ...user,
    settings: {
        ...user.settings,
        theme: 'dark'
    }
};

console.log(user.settings.theme);     // "light"
console.log(updated2.settings.theme);  // "dark"


//Changing the user email without mutating.
const user2 = {
    id: 2,
    profile: {
        email: "old@gmail.com",
        phone: "123456"
    }
};

const updated3 = {
    ...user2,
    profile: {
        ...user2.profile,
        email: "new@mail.com"
    }
};





//Example number 3, applying deep copy creating a function.

const users3 = [
    {
      id: 1,
      name: "Ana",
      settings: {
        theme: "light",
        notifications: {
          email: true,
          sms: false
        }
      }
    },
    {
      id: 2,
      name: "Luis",
      settings: {
        theme: "dark",
        notifications: {
          email: true,
          sms: true
        }
      }
    }
  ];
  

  function disableSms(users3, userId) {
    return users3.map(user =>
      user.id === userId
        ? {
            ...user, // copia el usuario
            settings: {
              ...user.settings, // copia settings
              notifications: {
                ...user.settings.notifications, // copia notifications
                sms: false // modifica SOLO sms
              }
            }
          }
        : user
    );
  }
  

console.log(disableSms(users3, 2));



//Example number 4 using deep copy to modify the object.

const projects = [
    {
      id: 1,
      name: "App",
      config: {
        visibility: "private",
        permissions: {
          read: true,
          write: false
        }
      }
    },
    {
      id: 2,
      name: "Website",
      config: {
        visibility: "public",
        permissions: {
          read: true,
          write: true
        }
      }
    }
  ];
  

  //function that will help us to change write from false to true.

  function enableWrite(projects, projectId) {
    return projects.map(project => project.id === projectId
        ? {
            ...project,
            config: {
                ...project.config,
                permissions: {
                    ...project.config.permissions,
                    write: true
                }
            }
        } : project
    );
  }
  