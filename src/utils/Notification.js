import { toast } from 'react-toastify'

class Notification {
  config = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    theme: 'dark',
  }

  success(text) {
    toast.success(text, this.config)
  }

  error(text) {
    toast.error(text, this.config)
  }

  warning(text) {
    toast.warning(text, this.config)
  }
}

export const notification = new Notification()
