import axios from 'axios'

export function registerEmp(usrdata){
  let data = axios.post(' https://sweede.app/DeliveryBoy/Add-Employee/', usrdata);
  return data;
}
export function getEmp(){
  let data = axios.get('https://sweede.app/DeliveryBoy/Get-Employee/');
  return data;
}
export function updateEmp(id,userData){
  let data = axios.post('https://sweede.app/DeliveryBoy/update-Employee/'+id,userData);
  return data;
}
export function deleteEmp(id){
  let data = axios.delete('https://sweede.app/DeliveryBoy/delete-Employee/'+id);
  return data;
}
