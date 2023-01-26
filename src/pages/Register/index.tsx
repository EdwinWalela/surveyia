import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { registerUser } from './slice';
import Loader from '../../common/loader';

const RegisterPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [passwordValid, setPasswordValid] = useState(false);
	const [passwordError, setPasswordError] = useState('');
	const [emailValid, setEmailError] = useState(true);

	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state.register);

	useEffect(() => {
		if (password.length < 5) {
			setPasswordValid(false);
			setPasswordError('Password should be at least 5 characters long');
		} else {
			setPasswordError('');
			setPasswordValid(true);
		}
	}, [password]);

	useEffect(() => {
		if (email) {
			if (email.includes('@') && email.includes('.')) {
				setEmailError(true);
			} else {
				setEmailError(false);
			}
		}
	}, [email]);

	function updatePassword(e: React.FormEvent<HTMLInputElement>) {
		setPassword(e.currentTarget.value);
	}

	function updateEmail(e: React.FormEvent<HTMLInputElement>) {
		setEmail(e.currentTarget.value);
	}

	function updatePhone(e: React.FormEvent<HTMLInputElement>) {
		setPhoneNumber(e.currentTarget.value);
	}

	function submitForm(e: React.FormEvent) {
		e.preventDefault();
		dispatch(
			registerUser({
				email,
				password,
				phoneNumber,
			})
		);
	}

	return (
		<>
			{state.hasError && <pre className="text-center text-red-500">Failed to register</pre>}
			{state.isLoading && <Loader />}
			<section className="">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
								Create an account
							</h1>
							<form className="space-y-4 md:space-y-6" action="#" onSubmit={submitForm}>
								<div>
									<label
										htmlFor="email"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Your email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										value={email}
										onChange={updateEmail}
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="name@company.com"
										required={true}
									/>
									{!emailValid && (
										<pre className="text-xs my-2 text-red-700">
											Please enter a valid email address
										</pre>
									)}
								</div>
								<div>
									<label
										htmlFor="password"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Password
									</label>
									<input
										type="password"
										name="password"
										id="password"
										value={password}
										onChange={updatePassword}
										placeholder="••••••••"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										required={true}
									/>
									{!passwordValid && (
										<pre className="text-xs my-2 text-red-700">{passwordError}</pre>
									)}
								</div>
								<div>
									<label
										htmlFor="confirm-password"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Phone
									</label>
									<input
										type="text"
										onChange={updatePhone}
										value={phoneNumber}
										placeholder="+2547000000"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										required={true}
									/>
								</div>
								<button
									type="submit"
									className="w-full bg-black text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
								>
									Create an account
								</button>
								<p className="text-sm font-light text-gray-500 dark:text-gray-400">
									Already have an account?{' '}
									<Link
										to="/login"
										className="font-medium text-primary-600 hover:underline dark:text-primary-500"
									>
										Login here
									</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default RegisterPage;
