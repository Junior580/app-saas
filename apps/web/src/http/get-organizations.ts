import { api } from './api-client'

interface GetOrganizationsResponse {
  organizations: {
    id: string
    name: string
    slug: string
    avatarUrl: string | null
  }[]
}

export async function getOrganizations() {
  console.log(`🔥 ~ getOrganizations called`)
  const result = await api.get('organizations').json<GetOrganizationsResponse>()

  return result
}
