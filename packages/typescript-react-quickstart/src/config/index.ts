export default {
  interface_addr: process.env.NODE_ENV === 'development' ? `http://localhost:8081` : '',
}
