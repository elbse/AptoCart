import axios from 'axios';

const APTOS_NODE_URL = process.env.APTOS_NODE_URL;

export const aptosClient = axios.create({
  baseURL: APTOS_NODE_URL,
  headers: { 'Content-Type': 'application/json' }
});
