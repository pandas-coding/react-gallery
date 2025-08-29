
export interface RequestError extends Error {
  error?: {message: string};
  status?: number;
}

export async function request(url = '', method: string = 'GET', data?: unknown) {
  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer SOMEJWTTOKEN',
    },
    body: data ? JSON.stringify(data) : undefined,
  })

  if (res.status > 400) {
    const error = await res.json()
    const e: RequestError = new Error(String(res.status))
    e.error = error
    e.status = res.status
    throw e
  }

  const result = await res.json()
  return result
}