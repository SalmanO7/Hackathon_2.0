import { checkRole } from '@/utils/roles'
import { redirect } from 'next/navigation'

const AdminRoute = async () => {
    const isAdmin = await checkRole('salman_admin')
    if (!isAdmin) {
        redirect('/')
    }

    return (
        <div>AdminRoute</div>
    )
}

export default AdminRoute