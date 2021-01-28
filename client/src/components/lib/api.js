import axios from 'axios'
const baseURL = '/api'



//* RELEASES
// ALL RELEASES
export function getAllReleases() {
  console.log('getAllReleases')
  return axios.get(`${baseURL}/releases`)
}

//SINGLE RELEASE
export function getSingleRelease(id) {
  console.log('getSingleRelease')
  return axios.get(`${baseURL}/releases/${id}/`)
}



