import Swal from "sweetalert2";


const swalAlert = {
    success: async message => {
        await Swal.fire({
            title: "Success",
            html: message,
            icon: 'success',
            timer: 1500
        })
    },
    error: async message => {
        await Swal.fire({
            title: "Error",
            html: message,
            icon: 'error',
            timer: 1500
        })
    },
    confirm: async (message, confirmText) => {
        return await Swal.fire({
            title: "Are you sure?",
            html: message,
            icon: 'question',
            showConfirmButton: true,
            confirmButtonText: confirmText || "Yes",
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#ff3232',
            showCancelButton: true
        })
    },
    sureMeg: async (message, confirmText) => {
        return await Swal.fire({
            title: "Are you sure?",
            html: message,
            icon: 'question',
            showConfirmButton: true,
            confirmButtonText: confirmText || "Yes",
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#50C878',
            showCancelButton: true
        })
    }
}

export default swalAlert;