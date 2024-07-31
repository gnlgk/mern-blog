import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <section id='signup' className="min-h-screen flex flex-col justify-center items-center bg-white text-black">
            <h2 className="text-center p-10 text-3xl font-bold">회원 가입</h2>
            <div className="bg-white-800 border border-gray-200 rounded-lg p-8 max-w-md w-full">
                <form>
                    <fieldset className="flex flex-col space-y-6">
                        <legend className="sr-only">회원 가입 폼</legend>

                        <div className="flex flex-col">
                            <label htmlFor="username" className="mb-1">이름</label>
                            <input
                                type="text"
                                id="username"
                                className="w-full p-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                                placeholder="이름을 입력하세요"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="mb-1">이메일</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                                placeholder="이메일을 입력하세요"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="password" className="mb-1">비밀번호</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full p-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                                placeholder="비밀번호를 입력하세요"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="confirm-password" className="mb-1">비밀번호 확인</label>
                            <input
                                type="password"
                                id="confirm-password"
                                className="w-full p-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                                placeholder="비밀번호를 다시 입력하세요"
                            />
                        </div>
                        <div className="mt-5 p-2 text-red-500 bg-red-200">
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full p-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition-colors"
                            >

                                "회원가입"

                            </button>
                        </div>
                    </fieldset>
                </form>
                <div className="text-center mt-6">
                    <span>계정이 있다면?</span>
                    <Link to="/sign-in" className="text-indigo-500 hover:underline ml-2">로그인</Link>
                </div>
            </div>
        </section>
    )
}

export default SignUp
