import { aptosClient } from '../utils/aptosClient';

const MODULE_ADDRESS = process.env.MODULE_ADDRESS;

export const addProduct = async (productData: any) => {
  const response = await aptosClient.post(`/transactions`, {
    sender: 'your_account_address',
    module: `${MODULE_ADDRESS}::Marketplace::add_product`,
    arguments: [
      productData.name,
      productData.description,
      productData.price
    ]
  });
  return response.data;
};

// Implement other functions like updateProduct, purchaseProduct similarly
