import PageAuthorizationComponent from "./component/page-authorization.js";
import {PageApplication} from "./component/page-application.js";
import {Notification} from "./component/modal/notification.js";
import {CreatePostFormModal} from "./component/modal/create-post-form-modal.js"

const login = new PageAuthorizationComponent('login')
export  const pageApplication = new PageApplication('page-content', login)
export const notification = new Notification('notification')
export const createPostFormModal = new createPostFormModal ('')


if (JSON.parse(localStorage.getItem('selectedUserId'))) {
    login.hide()
    pageApplication.show()
}
