import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/reports`

async function create(dogId, reportFormData) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reportFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const updateReport = async ( reportId, reportFormData) => {
  try {
    const res = await fetch(`${BASE_URL}/${reportId}`,
    
    { 
      method: 'PUT',
      headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reportFormData)
    })
    return res.json()
  } catch (error) {
  console.log(error)
  }
}

export {create, updateReport}
