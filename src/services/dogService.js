const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/dogs`

export async function index() {
  try {
    const res = await fetch(BASE_URL)
    return res.json()
  } catch ( err ) {
    console.log(err)
  }
}