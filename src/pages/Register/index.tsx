import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
	const [username, setUsername] = useState('');
	const [phoneNumberValid, setPhoneNumberValid] = useState(true);

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const state = useAppSelector((state) => state.register);

	useEffect(() => {
		if (state.registerSuccess) {
			navigate('/login', { replace: true, state: { username } });
		}
	}, [state.registerSuccess]);

	useEffect(() => {
		if (password.length < 5) {
			setPasswordValid(false);
			setPasswordError('Password is too short');
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

	useEffect(() => {
		if (phoneNumber) {
			setPhoneNumberValid(phoneNumber.length == 9);
		}
	});

	function updatePassword(e: React.FormEvent<HTMLInputElement>) {
		setPassword(e.currentTarget.value);
	}

	function updateEmail(e: React.FormEvent<HTMLInputElement>) {
		setEmail(e.currentTarget.value);
	}

	function updatePhone(e: React.FormEvent<HTMLInputElement>) {
		setPhoneNumber(e.currentTarget.value);
	}

	function updateUserName(e: React.FormEvent<HTMLInputElement>) {
		setUsername(e.currentTarget.value);
	}

	function submitForm(e: React.FormEvent) {
		e.preventDefault();
		if (phoneNumberValid && emailValid) {
			dispatch(
				registerUser({
					email,
					password,
					phoneNumber: `254${phoneNumber}`,
					username,
				})
			);
		} else {
			alert('Ensure all fields are filled out correctly');
		}
	}

	return (
		<>
			{state.hasError && <pre className="text-center text-red-500">Failed to register</pre>}

			<section className="">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto mt-4 md:mt-0 md:h-screen lg:py-0">
					<div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 ">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
								Create an account
							</h1>
							<form className="space-y-4 md:space-y-6" action="#" onSubmit={submitForm}>
								<div>
									<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
										Email Address
									</label>
									<input
										type="email"
										name="email"
										id="email"
										value={email}
										onChange={updateEmail}
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
										htmlFor=""
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Full Name
									</label>
									<input
										type="text"
										value={username}
										onChange={updateUserName}
										placeholder="John Doe"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										required={true}
									/>
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
										Phone Number
									</label>
									<div className="flex">
										<span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md ">
											+254
										</span>
										<input
											value={phoneNumber}
											onChange={updatePhone}
											type="text"
											id="website-admin"
											className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
											placeholder="700000000"
										/>
									</div>
									{!phoneNumberValid && (
										<pre className="text-xs my-2 text-red-700">
											Please enter a valid phone number
										</pre>
									)}
								</div>
								<button
									type="submit"
									className="w-full bg-black text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
								>
									{state.isLoading && <Loader />}
									{!state.isLoading && 'Create an account'}
								</button>
								<p className="text-sm font-light text-gray-500 ">
									Already have an account?{' '}
									<Link to="/login" className="font-medium text-primary-600 hover:underline ">
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
