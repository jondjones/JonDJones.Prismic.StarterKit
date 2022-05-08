import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = 'jondjonesprismicstarterkit'

export const client = prismic.createClient(repositoryName, {
  // If your repo is private, add an access token
  accessToken: 'MC5ZbkdNSVJjQUFDWUFhalJo.AO-_vRYCAHzvv73vv73vv73vv71s77-9Wu-_ve-_vWx0ce-_vSEK77-9c1ISBiPvv73vv73vv73vv71l',
})