import got from 'got'

export function searchAnime (Name: string) {
  return new Promise((resolve, reject) => {
    got(`https://kitsu.io/api/edge/anime?filter[text]=${Name}`, { headers: {
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json'
    }}).then(Response => {
      resolve(JSON.parse(Response.body))
    }).catch(reject)
  })
}
