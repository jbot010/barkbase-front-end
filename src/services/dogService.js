import * as tokenService from './tokenService'

const BASE_URL = 'http://localhost:3001/api/dogs'

async function index() {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch ( err ) {
    console.log(err)
  }
}

async function create(dogFormData) {
  try {
    // BASE_URL IS POST http://localhost:3001/api/blogs
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dogFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function update(dogFormData) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'PUT',
      headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dogFormData)
    })
    return res.json()
  } catch(error) {
    console.log(error)
  }
}

async function show(dogId) {
  try {
    const res = await fetch(`${BASE_URL}/${dogId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

export {index, create, update, show}