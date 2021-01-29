import axios from 'axios'
import { getToken } from './auth'
const baseURL = '/api'

export function headers() {
  return {
    headers: { authorization: `Bearer ${getToken()}` }
  }
}


//*AUTH
// REGISTER
export function registerUser(formdata) {
  console.log('registerUser')
  return axios.post(`${baseURL}/auth/register/`, formdata)
}

// LOGIN
export function loginUser(formdata) {
  console.log('loginUser')
  return axios.post(`${baseURL}/auth/login/`, formdata)
}

//PROFILE
export function getUserProfile() {
  console.log(headers())
  return axios.get(`${baseURL}/auth/profile/`, headers())
}

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


//*TAGS
// ALL TAGS
export function getAllTags() {
  console.log('getAllTags')
  return axios.get(`${baseURL}/tags/`)
}

//SINGLE TAG
export function getSingleTag(id) {
  console.log('getSingleTag')
  return axios.get(`${baseURL}/tags/${id}/`)
}


//* LABELS
// ALL LABELS
export function getAllLabels() {
  console.log('getAllLabels')
  return axios.get(`${baseURL}/labels/`)
}

// SINGLE LABEL
export function getSingleLabel(id) {
  console.log('getSingleLabel')
  return axios.get(`${baseURL}/labels/${id}`)
}

//* ARTISTS
// ALL ARTISTS
export function getAllArtists() {
  console.log('getAllArtists')
  return axios.get(`${baseURL}/artists/`)
}

//SINGLE ARTIST
export function getSingleArtist(id) {
  console.log('getSingleArtist')
  return axios.get(`${baseURL}/artists/${id}`)
}


//* FAVOURITES
