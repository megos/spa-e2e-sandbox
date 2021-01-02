const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms))

const login = async ({ id, password }: { id: string; password: string }) => {
  // xhr mock
  await sleep(1000)

  if (id === 'user1' && password === 'user1password') {
    // Dummy token
    return Math.random() + ''
  } else {
    return null
  }
}

export const api = {
  login,
}
