import { toast, type ToastContainerOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

interface ToastProps {
  message: string
}

export function useToast({ message }: ToastProps) {
  toast(message, {
    autoClose: 1000,
    type: 'info',
    theme: 'light',
    position: 'bottom-center',
    transition: 'slide'
  } as ToastContainerOptions)
}
