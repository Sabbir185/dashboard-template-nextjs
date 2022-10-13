const dataSortingHelper = (data, sortToggle, setSortData, setSortToggle) => {

    if (data === 'accountant') {
        setSortToggle(pre => !pre)

        if (sortToggle === false) {
            setSortData("accountant")

        } else {
            setSortData(null)
        }

    } else if (data === 'updatedAt') {
        setSortToggle(pre => !pre)

        if (sortToggle === false) {
            setSortData('updatedAt')

        } else {
            setSortData(null)
        }


    } else if (data === 'createdAt') {
        setSortToggle(pre => !pre)

        if (sortToggle === false) {
            setSortData('createdAt')

        } else {
            setSortData(null)
        }


    } else if (data === 'name') {
        setSortToggle(pre => !pre)

        if (sortToggle === false) {
            setSortData("name")

        } else {
            setSortData(null)
        }


    } else if (data === 'sn') {
        setSortToggle(pre => !pre)

        if (sortToggle === false) {
            setSortData({ createdAt: 1 })

        } else {
            setSortData(null)
        }
    } else if (data === 'city') {
        setSortToggle(pre => !pre)

        if (sortToggle === false) {
            setSortData("city")

        } else {
            setSortData(null)
        }
    } else if (data === 'phone') {
        setSortToggle(pre => !pre)

        if (sortToggle === false) {
            setSortData("phone")

        } else {
            setSortData(null)
        }
    } else if (data === 'status') {
        setSortToggle(pre => !pre)

        if (sortToggle === false) {
            setSortData("status")

        } else {
            setSortData(null)
        }
    } else if (data === 'payment') {
        setSortToggle(pre => !pre)

        if (sortToggle === false) {
            setSortData("payment")

        } else {
            setSortData(null)
        }
    } else if (data === 'step') {
        setSortToggle(pre => !pre)

        if (sortToggle === false) {
            setSortData("step")

        } else {
            setSortData(null)
        }
    }
}

export default dataSortingHelper



// user data sorting
const UserDataSortingHelper = (data, sortToggle, setSortData, setSortToggle) => {
    if (data === 'username') {
        setSortToggle(pre => !pre)

        if (sortToggle === false) {
            setSortData("username")

        } else {
            setSortData(null)
        }

    } else if (data === 'email') {
        setSortToggle(pre => !pre)

        if (sortToggle === false) {
            setSortData('email')

        } else {
            setSortData(null)
        }


    } else if (data === 'userStatus') {
        setSortToggle(pre => !pre)

        if (sortToggle === false) {
            setSortData('userStatus')

        } else {
            setSortData(null)
        }


    } else if (data === 'role') {
        setSortToggle(pre => !pre)

        if (sortToggle === false) {
            setSortData("role")

        } else {
            setSortData(null)
        }
    } else if (data === 'city') {
        setSortToggle(pre => !pre)

        if (sortToggle === false) {
            setSortData("city")

        } else {
            setSortData(null)
        }
    } else if (data === 'country') {
        setSortToggle(pre => !pre)

        if (sortToggle === false) {
            setSortData("country")

        } else {
            setSortData(null)
        }
    } else if (data === 'steps') {
        setSortToggle(pre => !pre)

        if (sortToggle === false) {
            setSortData("steps")

        } else {
            setSortData(null)
        }
    } else if (data === 'createdAt') {
        setSortToggle(pre => !pre)

        if (sortToggle === false) {
            setSortData("createdAt")

        } else {
            setSortData(null)
        }
    } else if (data === 'updatedAt') {
        setSortToggle(pre => !pre)

        if (sortToggle === false) {
            setSortData("updatedAt")

        } else {
            setSortData(null)
        }
    }
}

export {
    UserDataSortingHelper
}