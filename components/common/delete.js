const {
  deleteUserAPI, deleteProvinceAPI, deleteCouponAPI, deleteFaqAPI, deleteFrontPageAPI, deleteCustomerQueryAPI, deleteFeedbackAPI, deleteTaxFilesAPI, deleteNewUserRoleManageAPI, deleteFormFieldAPI, deleteUserFormControllerAPI
} = require("../../helpers/backend_helper");
import { message } from 'antd';


const deleteAction = async (id, role, cb) => {
  let data = null;

  if (role === 'admin') {
    data = await deleteUserAPI(id)

  } else if (role === 'taxFile') {
    data = await deleteTaxFilesAPI(id)

  } else if (role === 'province') {
    data = await deleteProvinceAPI(id)

  } else if (role === 'coupon') {
    data = await deleteCouponAPI(id)

  } else if (role === 'faq') {
    data = await deleteFaqAPI(id)

  } else if (role === 'frontPage') {
    data = await deleteFrontPageAPI(id)

  } else if (role === 'customerQuery') {
    data = await deleteCustomerQueryAPI(id)

  } else if (role === 'feedbacks') {
    data = await deleteFeedbackAPI(id)

  } else if (role === 'user_role') {
    data = await deleteNewUserRoleManageAPI(id)

  } else if (role === 'userFormField') {
    data = await deleteFormFieldAPI(id)

  } else if (role === 'deleteUserFormFieldFromSpecificUser') {
    data = await deleteUserFormControllerAPI(id)
  }

  // message and callback of setRefresh()  
  if (data?.status === true) {
    message.success(data?.message);
    cb(data?.status)
  } else {
    cb(data?.status)
    message.warning(data?.message)
  }

}


export default deleteAction;
