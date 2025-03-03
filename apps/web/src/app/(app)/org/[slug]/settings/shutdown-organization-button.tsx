import { XCircle } from 'lucide-react'
import { redirect } from 'next/navigation'

import getCurrentOrg from '@/auth/auth'
import { Button } from '@/components/ui/button'
import { shutdownOrganization } from '@/http/shutdown-organization'

export function ShutdownOrganizationButton() {
  async function shutdownOrganizationAction() {
    'use server'

    const currentOrg = await getCurrentOrg()

    await shutdownOrganization({ org: currentOrg! })

    redirect('/')
  }

  return (
    <form action={shutdownOrganizationAction}>
      <Button variant="destructive" type="submit" className="w-56">
        <XCircle className="sie-4 mr-2" />
        Shutdown organization
      </Button>
    </form>
  )
}
