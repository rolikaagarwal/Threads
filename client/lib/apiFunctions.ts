export const post = async(url:string,body:{})=>{
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      credentials:'include',
      mode:'cors'
    });
    return response;
    
  } catch (error) {
    throw error;
  }
} 