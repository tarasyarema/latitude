import configStore from '$src/lib/configStore'
import { request } from '$src/lib/server'
import chalk from 'chalk'

export default async function signupCommand({
  email,
  password,
}: {
  email: string
  password: string
}) {
  const options = {
    path: '/api/users/signup',
    method: 'POST',
    data: JSON.stringify({
      email,
      password,
    }),
  }

  request(options, ({ err, res }) => {
    if (err) {
      console.error('Signup request failed:', err.message)
    } else {
      const { response, responseBody } = res
      if (response.statusCode === 200) {
        try {
          const response = JSON.parse(responseBody)
          const jwt = response.token
          if (jwt) {
            configStore.set('jwt', jwt)
            console.log(chalk.green('Signup successful! JWT stored.'))
          } else {
            throw new Error('JWT not found in response')
          }
        } catch (error) {
          console.error('Failed to parse response:', (error as Error).message)
        }
      } else {
        try {
          const response = JSON.parse(responseBody)
          console.error(chalk.red('ERROR: ', response.error))
        } catch (error) {
          console.error(responseBody)
        }
      }
    }
  })
}
