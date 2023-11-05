import React, { useState, useEffect } from 'react'
import { Head } from "./header"
import HCaptcha from '@hcaptcha/react-hcaptcha'
import { Button } from "@chakra-ui/react"

export const Contact = () =>{
	const [userName, setUserName] = useState("")
	const [userBusinessName, setUserBusinessName] = useState("")
	const [userEmail, setUserEmail] = useState("")
	const [userPhoneNum, setUserPhoneNum] = useState("")
	const [userSkillIssue, setUserSkillIssue] = useState("")
	const [userReferral, setUserReferral] = useState("")
	const [contactDisabled, setContactDisabled] = useState(true)

	function formatPhoneNumber(phoneNumberString) {
		var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
		var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
		if (match) {
			setUserPhoneNum('(' + match[1] + ') ' + match[2] + '-' + match[3])
		}
		return null;
	}

	return(
		<>
			<Head/>
			<div class="xs:py-10 md:py-0 md:mt-[10%]">
	<div class="m-4">
		<p class="text-center xs:text-sm sm:text-[18px]" >
			<strong class="text-[26px]">Unlock the Answers You Need - Send Us Your Inquiry Today!</strong><br/><br/>
	
			Looking for expert advice on electronics repair, motherboard fixes, or soldering solutions? Tech Chimp is here to help, and we're just a click away!<br/><br/>
	
			🔧 Ask Anything: Have a question about your device? Wondering about our services? Need repair guidance? No matter the inquiry, we've got answers.<br/><br/>
	
			💬 Easy Inquiry: Sending us your inquiry is a breeze! Fill out our simple online form, and we'll get back to you promptly with the information you seek.<br/><br/>
	
			✨ Expert Advice: Our team of skilled technicians and electronics wizards is ready to assist you. We're passionate about solving your electronic puzzles.<br/><br/>
	
			📩 Start the Conversation: Don't hesitate. Your inquiry is the key to unlocking the solutions you need. Click below to send your message to Tech Chimp today!<br/><br/>
	
			Send Your Inquiry Now<br/>
	
			Your electronics questions, our expert answers - Tech Chimp: Where Inquiries Meet Expertise!
		</p>
	</div>
	<form action="mailto:inquiries@techchimp.repair" method="post" enctype="text/plain">
		<div class="xs:flex xs:justify-center xs:items-center border-2 rounded bg-black rounded p-1 bg-opacity-40 xs:mb-[30px] m-2">
			<div>
				<strong class="xs:text-lg sm:text-[26px] flex justify-center m-1">
					Inquiry Submission Form
				</strong>
				<div>
					<label for="userName" class="block text-sm font-medium text-white">*Full Name</label>
					<div class="mt-1">
						<input id="userName" type="text" autocomplete="name" required class="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary text-black" value={userName}  onChange={(e) => setUserName(e.target.value)}/>
					</div>
				</div>
				<div>
					<label for="userBusinessName" class="block text-sm font-medium text-white">Business Name</label>
					<div class="mt-1">
						<input id="userBusinessName" type="text" autocomplete="organization" required class="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary text-black" value={userBusinessName}  onChange={(e) =>setUserBusinessName(e.target.value)}/>
					</div>
				</div>
				<div>
					<label for="userEmail" class="block text-sm font-medium text-white">*Email adress</label>
					<div class="mt-1">
						<input id="userEmail" type="email" autocomplete="email" class="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary text-black" value={userEmail}  onChange={(e) => setUserEmail( e.target.value )}/> 
					</div>
				</div>
				<div>
					<label for="userTel" class="block text-sm font-medium text-white">*Phone Number</label>
					<div class="mt-1">
						<input id="userTel" type="tel" autocomplete="tel" required class="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary text-black" value={userPhoneNum} onChange={(e) => formatPhoneNumber(e.target.value)}/>
					</div>
				</div>
				<div>
					<label for="device_IssueDetails" class="block text-sm font-medium text-white">*Inquiry Details</label>
					<div class="mt-1">
					  <textarea id="device_IssueDetails" required class="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary text-black" value={userSkillIssue} onChange={(e) =>setUserSkillIssue(e.target.value)}></textarea>
					</div>
				</div>
				<div>
					<label for="userReferral" class="block text-sm font-medium text-white">Referred By</label>
					<div class="mt-1">
						<input id="userReferral" type="text" class="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary text-black" value={userReferral} onChange={(e) => setUserReferral(e.target.value)}/>
					</div>
				</div>
				<div class="mt-4 flex justify-center">
					<HCaptcha
						sitekey="f3c5fddd-b79c-4860-a055-4a4ca30248c4" 
						theme={"dark"}
						onVerify={() => setContactDisabled(false)}
					/>
				</div>
				<div class="my-3  flex justify-end">
					<Button colorScheme='blue' type="submit" isDisabled={contactDisabled}>
						Submit
					</Button>
				</div>
			</div>
		</div>
	</form>
</div>
		</>
	)
}