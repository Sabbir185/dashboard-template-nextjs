import Swal from "sweetalert2"
import React from "react"
import {notification} from "antd";

const swalAlert = {
    success: async (message, t) => {
        await Swal.fire({
            title: !!t ? t("Success") : "Success",
            html: message,
            icon: 'success',
        })
    },
    error: async (message, t) => {
        await Swal.fire({
            title: !!t ? t("Error") : "Error",
            html: message,
            icon: 'error',
        })
    },
    warning: async (message, timer = true) => {
        await Swal.fire({
            title: "Warning",
            html: message,
            icon: 'warning',
            timer: timer ? 3000 : undefined
        })
    },
    confirm: async (message, confirmText, t) => {
        return await Swal.fire({
            title: !!t ? t("Are you sure?") : "Are you sure?",
            html: message,
            icon: 'question',
            showConfirmButton: true,
            confirmButtonText: confirmText || (!!t ? t("Yes") : "Yes"),
            cancelButtonText: !!t ? t("Cancel") : "Cancel",
            showCancelButton: true
        })
    }
}

export default swalAlert


export const antdAlert = {
    warning: (message, description) => notification.warning({message, description})
}

export const swalLoading = () => {
    Swal.fire({
        title: "",
        html: `
         <div class="loading">
           
        </div>
         `,
        onBeforeOpen() {
            Swal.showLoading()
        },
        onAfterClose() {
            Swal.hideLoading()
        },
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showConfirmButton: false,
        background: "none"
    })
}