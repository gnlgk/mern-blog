import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
    return (
        <section id='login' className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <h2 className="text-center p-10 text-3xl font-bold text-gray-800">로그인</h2>
            <div className="bg-white  border border-gray-200 rounded-lg p-8 max-w-md w-full">
                <form>
                    <fieldset className="flex flex-col space-y-6">
                        <legend className="sr-only">로그인 폼</legend>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-gray-700 font-semibold mb-2">이메일</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:black-500"
                                placeholder="이메일을 입력하세요"
                            />
                            {/* <span className="text-red-500 text-sm mt-2">➟ 이메일이 없습니다.</span> */}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="password" className="text-gray-700 font-semibold mb-2">비밀번호</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:black-500"
                                placeholder="비밀번호를 입력하세요"
                            />
                        </div>
                        <div className="mt-5 p-2 text-red-500 bg-red-200">
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full p-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition-colors"
                            >
                                <span>Loding...</span>

                            </button>
                        </div>
                    </fieldset>
                </form>
                <div className="text-center mt-6">
                    <span>계정이 없다면?</span>
                    <Link to="/sign-up" className="text-indigo-500 hover:underline ml-2">회원가입</Link>
                </div>
            </div>
        </section>
    )
}

export default SignIn
