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

export {index}