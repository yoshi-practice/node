// Execute DB manipuration here
class UserController {
    static getAllUsers = (req, res) => {
        return res.json({
            users: [
                {
                    id: 1,
                    name: 'tenma'
                }
            ]
        })
    }
}

module.exports = UserController;