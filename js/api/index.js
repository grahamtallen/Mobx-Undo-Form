/**
 * Created by grahamallen on 1/27/17.
 */
class Api {
    getUsers() {
        return [
                {name: "Frank", user_id: 1},
                {name: "Graham", user_id: 2},
                {name: "Emily", user_id: 3}
               ]
    }
    getCurrentUser() {
        return 2
    }
}

export default new Api()