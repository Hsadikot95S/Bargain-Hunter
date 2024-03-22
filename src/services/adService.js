import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8084/ad' });

const adService = {
    getAllAds: async () => {
      try {
        const response = await API.get(`/getAllAds`);
        return response.data;
      } catch (error) {
        console.error('Error fetching ADs:', error);
        throw error;
      }
    },
  
    createAd: async (AdData) => {
      try {
        const response = await API.post(`/saveAd`, AdData);
        return response.data;
      } catch (error) {
        console.error('Error creating Ad:', error);
        throw error;
      }
    },
  
    updateAd: async (adId, AdData) => {
      try {
        const response = await API.put(`updateHouse/${adId}`, AdData);
        return response.data;
      } catch (error) {
        console.error('Error updating Ad:', error);
        throw error;
      }
    },
  
    deleteAd: async (adId) => {
      try {
        const response = await API.delete(`/deleteHouse/${adId}`);
        return response.data;
      } catch (error) {
        console.error('Error deleting Ad:', error);
        throw error;
      }
    }
  };
  
  export default adService;