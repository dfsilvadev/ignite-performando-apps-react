module.exports = () => {
  const data = {
    products: [],
  };

  for (let i = 0; i < 1000; i++) {
    data.products.push({
      id: i + 1,
      price: Math.random() * (350 - 15) + 15,
      title: `Camiseta ref.:${Math.ceil(Math.random() * (300 - 500) + 500)}`,
    });
  }

  return data;
};
