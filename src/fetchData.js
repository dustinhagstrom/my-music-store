// This are mock functions that help us simulate a server/db call.\
// In the real workd youll need to call a real server to get real data
// using tools like axios.

const productList = [
  {
    id: "123",
    title: "blue Drum Set",
    description: "good drums",
    brand: "Yamaha",
    price: 59999,
    image:
      "https://www.yamaha.com/yamahavgn/PIM/Images/19027_12073_1_1200x1200_80813f268e73483818697e99937dbd59.jpg",
  },
  {
    id: "234",
    title: "Red Drum Set",
    description: "good drums",
    brand: "Yamaha",
    price: 59999,
    image: "https://m.media-amazon.com/images/I/61YlBr7OQfS._AC_SL1500_.jpg",
  },
];

var users = [
  {
    id: "111",
    email: "john@email.com",
    name: "John",
    lastName: "Smith",
    password: "password",
    favoriteItems: ["234"],
  },
];

export const editFavorites = (userId, favorites) =>
  new Promise((resolve, reject) => {
    console.log("fetching Data from imaginary products database");
    setTimeout(() => {
      try {
        // fetchingData from imaginary database

        const user = users.find((user) => user.id === userId);

        const arrayOfOtherUsers = users.filter((user) => user.id !== userId);

        const userWithUpdatedFavorites = { ...user, favoriteItems: favorites };

        users = [...arrayOfOtherUsers, userWithUpdatedFavorites];

        resolve(userWithUpdatedFavorites);

        throw new Error("Incorrect username or password");
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });

export const logInUser = (email, password) =>
  new Promise((resolve, reject) => {
    const userFound = users.find((user) => {
      if (user.email === email && user.password === password) {
        return true;
      }

      return false;
    });

    console.log("fetching Data from imaginary products database");
    setTimeout(() => {
      try {
        // fetchingData from imaginary database
        if (userFound) {
          resolve(userFound);
        }
        throw new Error("Incorrect username or password");
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });

export const fetchProducts = () =>
  new Promise((resolve, reject) => {
    console.log("fetching Data from imaginary products database");
    setTimeout(() => {
      try {
        // fetchingData from imaginary database
        resolve(productList);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
