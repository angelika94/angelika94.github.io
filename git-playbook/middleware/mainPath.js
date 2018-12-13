export default function ({params, route, redirect}) {

  if (route.path === '/') {
    // redirect to the playbook path
    redirect('301', '/playbook');
  }
}
