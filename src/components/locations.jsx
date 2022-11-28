import appartments from '../logements.json';

const getAllAppartments = () => {
    return appartments
  }
  
  const getOneAppartment = (id) => {
    return appartments.find(log => log.id === id)
  }
  
  export const locations = {
    getAllAppartments, getOneAppartment
  }