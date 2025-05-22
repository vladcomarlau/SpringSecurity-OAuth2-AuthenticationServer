export default function Thymeleaf() {
    return(
        <div className="bg-gray-100">
            <div className="flex items-center justify-center min-h-screen px-4">
                <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">

                    <h1 className="text-2xl font-bold text-center mb-2">Spring Boot Tutorial</h1>
                    <h2 className="text-xl text-gray-700 text-center mb-6">Please Log In</h2>

                    <div
                        className="text-red-600 bg-red-100 border border-red-200 p-3 rounded mb-4 text-sm"
                    >
                        Invalid username and password.
                    </div>
                    <div
                        className="text-green-700 bg-green-100 border border-green-200 p-3 rounded mb-4 text-sm"
                    >
                        You have been logged out.
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-600 mb-1">Username</label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                placeholder="Enter your username"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 mb-1">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded transition"
                        >
                            Log in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
