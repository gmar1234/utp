const endpoints = {
  getProduct: ({ product }) => ({
    url: `products/${product}`,
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  }),
};

export { endpoints as default };
