import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Step,
	StepDescription,
	StepIcon,
	StepIndicator,
	StepNumber,
	StepSeparator,
	StepStatus,
	StepTitle,
	Stepper,
	useSteps,
	Button,
	useDisclosure,
	Box,
	Text,
	useToast,
	Input,
	Switch,
	Select,
	Textarea
} from "@chakra-ui/react"

import { Component, useState } from "react"
import $, { data } from "jquery"


import { BiPackage } from "react-icons/bi"
import {
	FaFileSignature,
	FaHandHoldingHeart,
	FaHandshake
} from "react-icons/fa"
import { GiMailbox } from "react-icons/gi"

import HCaptcha from '@hcaptcha/react-hcaptcha'

import { FilePond, registerPlugin } from 'react-filepond';

import 'filepond/dist/filepond.min.css';

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export const MailInModal = (props) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [userName, setUserName] = useState("")
	const [userBusinessName, setUserBusinessName] = useState("")
	const [userEmail, setUserEmail] = useState("")
	const [userPhoneNum, setUserPhoneNum] = useState("")
	const [userAddress, setUserAddress] = useState("")
	const [userCity, setUserCity] = useState("")
	const [userState, setUserState] = useState("")
	const [userWentPostal, setUserWentPostal] = useState("")
	const [userReferral, setUserReferral] = useState("")

	const [device_IssueSubject, setDevice_IssueSubject] = useState("")
	const [device_IssueDetails, setDevice_IssueDetails] = useState("")
	const [device_Make, setDevice_Make] = useState("")
	const [device_password, setDevice_password] = useState("")
	const [device_LiquidDamaged, setDevice_LiquidDamaged] = useState("")
	const [expiditedService, setExpiditedService] = useState(false)
	const [returnShippingMethod, setReturnShippingMethod] = useState("Return Shipping Method")
	const [userUploadedFiles, setUserUploadedFiles] = useState([])

	const [checkFormState, setCheckFormState] = useState(true)

	const steps = [
		{ description: 'Overview' },
		{ description: 'Contact Info' },
		{ description: 'Device Information' },
		{ description: 'EULA' },
		{ description: 'Confirm Details' },
	]
	const { activeStep, setActiveStep } = useSteps({
		index: 0,
		count: steps.length,
	})
	const toast = useToast()

	function formatPhoneNumber(phoneNumberString) {
		var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
		var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
		if (match) {
			setUserPhoneNum('(' + match[1] + ') ' + match[2] + '-' + match[3])
		}
		return null;
	}

	function checkPartOne() {
		if (userName.length > 3 && userEmail.length > 3 && userPhoneNum.length > 5 && userAddress.length > 6 && userCity.length > 3 && userState.length > 0 && userWentPostal.length > 4) {
			return false;
		} else {
			return true;
		}
	}

	function checkPartTwo() {
		if (device_IssueSubject.length > 6 && device_IssueDetails.length > 6 && device_Make.length > 6 && returnShippingMethod != "Return Shipping Method") {
			return false
		} else {
			return true
		}
	}

	function SaveDraft() {
		localStorage.setItem("userName", userName)
		localStorage.setItem("userBusinessName", userBusinessName)
		localStorage.setItem("userEmail", userEmail)
		localStorage.setItem("userPhoneNum", userPhoneNum)
		localStorage.setItem("userAddress", userAddress)
		localStorage.setItem("userCity", userCity)
		localStorage.setItem("userState", userState)
		localStorage.setItem("userWentPostal", userWentPostal)
		localStorage.setItem("userReferral", userReferral)
		localStorage.setItem("device_IssueSubject", device_IssueSubject)
		localStorage.setItem("device_IssueDetails", device_IssueDetails)
		localStorage.setItem("device_Make", device_Make)
		localStorage.setItem("device_password", device_password)
		localStorage.setItem("device_LiquidDamaged", device_LiquidDamaged.toString())
		localStorage.setItem("expiditedService", expiditedService.toString())
		localStorage.setItem("returnShippingMethod", returnShippingMethod)
		onClose()
		toast({
			description: `Draft Saved`,
			status: "success",
			isClosable: true,
			duration: 3000,
		})
	}

	function LoadDraft() {
		if (localStorage.getItem("userName") != null) {
			setUserName(localStorage.getItem("userName"))
		}
		if (localStorage.getItem("userBusinessName") != null) {
			setUserBusinessName(localStorage.getItem("userBusinessName"))
		}
		if (localStorage.getItem("userEmail") != null) {
			setUserEmail(localStorage.getItem("userEmail"))
		}
		if (localStorage.getItem("userPhoneNum") != null) {
			setUserPhoneNum(localStorage.getItem("userPhoneNum"))
		}
		if (localStorage.getItem("userAddress") != null) {
			setUserAddress(localStorage.getItem("userAddress"))
		}
		if (localStorage.getItem("userCity") != null) {
			setUserCity(localStorage.getItem("userCity"))
		}
		if (localStorage.getItem("userState") != null) {
			setUserState(localStorage.getItem("userState"))
		}
		if (localStorage.getItem("userWentPostal") != null) {
			setUserWentPostal(localStorage.getItem("userWentPostal"))
		}
		if (localStorage.getItem("userReferral") != null) {
			setUserReferral(localStorage.getItem("userReferral"))
		}
		if (localStorage.getItem("device_IssueSubject") != null) {
			setDevice_IssueSubject(localStorage.getItem("device_IssueSubject"))
		}
		if (localStorage.getItem("device_IssueDetails") != null) {
			setDevice_IssueDetails(localStorage.getItem("device_IssueDetails"))
		}
		if (localStorage.getItem("device_Make") != null) {
			setDevice_Make(localStorage.getItem("device_Make"))
		}
		if (localStorage.getItem("device_password") != null) {
			setDevice_password(localStorage.getItem("device_password"))
		}
		if (localStorage.getItem("device_LiquidDamaged") === 'true') {
			setDevice_LiquidDamaged(localStorage.getItem("device_LiquidDamaged"))
		}
		if (localStorage.getItem("expiditedService") === 'true') {
			setExpiditedService(localStorage.getItem("expiditedService"))
		}
		if (localStorage.getItem("returnShippingMethod") != null) {
			setReturnShippingMethod(localStorage.getItem("returnShippingMethod"))
		}
	}

	function DeleteDraft() {
		onClose()
		toast({
			render: () => (
				<>
					Save Instead? <Button onClick={() => SaveDraft()}>Confirm</Button>
				</>
			),
			status: "info",
			isClosable: true,
		})
		toast({
			render: () => (
				<>
					Delete Draft <Button onClick={() => clearStorage()}>Confirm</Button>
				</>
			),
			status: "error",
			isClosable: true,
		})
	}

	function clearStorage() { localStorage.clear(); toast.closeAll(); setActiveStep(0) }

	/* SmtpJS.com - v3.0.0 */
	//var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof window.windowXDomainRequest ? (t = new window.XDomainRequest).open(e, n) : t = null, t } };

	const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

	var ticket = genRanHex(16)
	const fs = require("fs")

	function handleSubmit() {
		window.Email.send({
			Host: "mail.techchimp.repair",
			Username: "inquiries",
			Password: "4E-rm'RJvAJ=hx=!/m'X-t!u<z9Fbm_j",
			To: 'admin@techchimp.repair',
			From: "inquiries@techchimp.repair",
			Subject: userName + " | " + device_Make + " | " + ticket,
			Body:
				"Name : " + userName + "\n\n" +
				"Business : " + userBusinessName + "\n\n" +
				"Email : " + userEmail + "\n\n" +
				"Phone : " + userPhoneNum + "\n\n" +
				"Street Address : " + userAddress + "\n\n" +
				"City : " + userCity + "\n\n" +
				"State : " + userState + "\n\n" +
				"Postal Code : " + userWentPostal + "\n\n" +
				"Referal : " + userReferral + "\n\n" +

				"Device Issue Title : " + device_IssueSubject + "\n\n" +
				"Details : " + device_IssueDetails + "\n\n" +
				"Device Make/Model : " + device_Make + "\n\n" +
				"Password : " + device_password + "\n\n" +
				"LiquidDamaged? : " + device_LiquidDamaged + "\n\n" +
				"Expideted Service : " + expiditedService + "\n\n" +
				"Return Shipping Method : " + returnShippingMethod
		}).then(
			toast({
				description: `Request Sent! Please keep a close eye on your inbox once we've reviewed your request, we will email you with more information.`,
				status: "success",
				isClosable: true,
			})
		);
			
/* fs.appendFile("./secret/customerJub.json", JSON.stringify(value), (err)=>{
	toast({
		message: "Please contact admin@techchimp.repair : " + err,
		status: "error",
	})
}) */
		/* var value =
			{ ticket : 
				[
					"Name : " + userName,
					"Business : " + userBusinessName,
					"Email : " + userEmail,
					"Phone : " + userPhoneNum,
					"Street Address : " + userAddress,
					"City : " + userCity,
					"State : " + userState,
					"Postal Code : " + userWentPostal,
					"Referal : " + userReferral,

					"Device Issue Title : " + device_IssueSubject,
					"Details : " + device_IssueDetails,
					"Device Make/Model : " + device_Make,
					"Password : " + device_password,
					"LiquidDamaged? : " + device_LiquidDamaged,
					"Expideted Service : " + expiditedService,
					"Return Shipping Method : " + returnShippingMethod
				]
			}
			$.ajax({
				method: "POST",
				url: "./submitMailInRequest.php",
				dataType: "json",
				data: value,
				success: (data) => {
					console.log(data)
				}
			}) */
		}

	function renderSwitch(thing) {
		switch (thing) {

			case (0):
				return (
					<>
						<div class="grid sm:gap-y-1 md:gap-y-5 lg:gap-y-10 mt-[100px]">
							<div class="xs:text-center">
								<div class="xs:flex xs:justify-evenly">
									<FaFileSignature color={"black"} size={"32px"} />
								</div>
								<p class="xs:text-[22px]">Step 1</p>
								<p class="xs:text-sm">
									Fill out the form below and give us a little bit more information about your device. Be sure to read instructions and disclaimer.
								</p>
							</div>
							<div class="xs:text-center">
								<div class="xs:flex xs:justify-evenly">
									<GiMailbox color={"black"} size={"32px"} />
								</div>
								<p class="xs:text-[22px]">
									Step 2
								</p>
								<p class="xs:text-sm">
									You will receive an email from us with your ticket PDF. Print and place in package with your device. Mail to the provided address.
								</p>
							</div>
							<div class="xs:text-center">
								<div class="xs:flex xs:justify-evenly">
									<FaHandHoldingHeart color={"black"} size={"32px"} />
									<FaHandshake color={"black"} size={"32px"} />
								</div>
								<p class="xs:text-[22px]">Step 3</p>
								<p class="xs:text-sm">
									We work on your device. You pay when device is fixed. We mail package back to you after payment has been processed.
								</p>
							</div>
						</div>
						<div class="flex justify-center xs:mt-[20px] sm:mt-[200px] md:mt-[300px]">
							<Button onClick={() => setActiveStep(activeStep + 1)}>
								Continue
							</Button>
						</div>
					</>
				)
				break;
			case (1):
				return (
					<>
						<p class="font-bold text-xl">Contact Information</p>
						<div class="xs:flex xs:justify-center">
							<div class="sm:w-[500px] md:w-[700px] grid sm:gap-y-1 md:gap-y-5 lg:gap-y-8">
								<div>
									<label for="userName" class="block text-sm font-medium text-black">*Full Name</label>
									<div class="mt-1">
										<Input id="userName" type="text" autocomplete="name" required class="w-full text-black border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary" value={userName} onChange={(e) => setUserName(e.target.value)} />
									</div>
								</div>

								<div>
									<label for="userBusinessName" class="block text-sm font-medium text-black">*Business Name</label>
									<div class="mt-1">
										<Input id="userBusinessName" type="text" autocomplete="organization" required class="w-full text-black border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary" value={userBusinessName} onChange={(e) => setUserBusinessName(e.target.value)} />
									</div>
								</div>
								<div>
									<label for="userEmail" class="block text-sm font-medium text-black">*Email adress</label>
									<div class="mt-1">
										<Input id="userEmail" type="email" autocomplete="email" required class="w-full text-black border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
									</div>
								</div>
								<div>
									<label for="userTel" class="block text-sm font-medium text-black">*Phone Number</label>
									<div class="mt-1">
										<Input id="userTel" type="tel" autocomplete="tel" required class="w-full text-black border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary" value={userPhoneNum} onChange={(e) => formatPhoneNumber(e.target.value)} />
									</div>
								</div>
								<div>
									<label for="userAddress" class="block text-sm font-medium text-black">*Street Address</label>
									<div class="mt-1">
										<Input id="userAddress" type="text" autocomplete="shipping" required class="w-full text-black border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary" value={userAddress} onChange={(e) => setUserAddress(e.target.value)} />
									</div>
								</div>
								<div>
									<label for="userCity" class="block text-sm font-medium text-black">*City</label>
									<div class="mt-1">
										<Input id="userCity" type="text" autocomplete="address-level2" required class="w-full text-black border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary" value={userCity} onChange={(e) => setUserCity(e.target.value)} />
									</div>
								</div>
								<div>
									<label for="userState" class="block text-sm font-medium text-black">*State</label>
									<div class="mt-1">
										<Input id="userState" type="text" autocomplete="address-level1" required class="w-full text-black border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary" value={userState} onChange={(e) => setUserState(e.target.value)} />
									</div>
								</div>
								<div>
									<label for="userWentPostal" class="block text-sm font-medium text-black">*Zip/Postal</label>
									<div class="mt-1">
										<Input id="userWentPostal" type="text" autocomplete="postal-code" required class="w-full text-black border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary" value={userWentPostal} onChange={(e) => setUserWentPostal(e.target.value)} />
									</div>
								</div>
								<div>
									<label for="userReferral" class="block text-sm font-medium text-black">Referred By</label>
									<div class="mt-1">
										<Input id="userReferral" type="text" class="w-full text-black border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary" value={userReferral} onChange={(e) => setUserReferral(e.target.value)} />
									</div>
								</div>
							</div>
						</div>
						<div class="flex justify-around mt-6">
							<Button onClick={() => setActiveStep(activeStep - 1)}>
								Back
							</Button>
							<Button onClick={() => setActiveStep(activeStep + 1)} isDisabled={checkPartOne()}>
								Continue
							</Button>
						</div>
					</>
				)
				break;
			case (2):
				return (
					<>
						<p class="font-bold text-xl">Device Details</p>

						<div class="flex justify-center">
							<div class="sm:w-[500px] md:w-[700px] grid xs:gap-y-1 lg:gap-y-2 xs:h-[525px]">
								<div>
									<label for="device_IssueSubject" class="block text-sm font-medium text-black">*Issue Subject</label>
									<div class="mt-1">
										<Input id="device_IssueSubject" required type="text" class="w-full text-black border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary" value={device_IssueSubject} onChange={(e) => setDevice_IssueSubject(e.target.value)} />
									</div>
								</div>
								<div>
									<label for="device_IssueDetails" class="block text-sm font-medium text-black">*Issue Details</label>
									<div class="mt-1">
										<Textarea id="device_IssueDetails" required class="w-full text-black border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary" value={device_IssueDetails} onChange={(e) => setDevice_IssueDetails(e.target.value)}></Textarea>
									</div>
								</div>
								<div>
									<label for="device_Make" class="block text-sm font-medium text-black">*Device Make & Model</label>
									<div class="mt-1">
										<Textarea id="device_Make" required placeholder="Example: '2022 Macbook A1286 (serial number if available)'" class="w-full text-black border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary" value={device_Make} onChange={(e) => setDevice_Make(e.target.value)}></Textarea>
									</div>
								</div>
								<div>
									<label for="device_password" class="block text-sm font-medium text-black">Password</label>
									<div class="mt-1">
										<Input id="device_password" placeholder="if none just leave blank" type="text" class="w-full text-black border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary" value={device_password} onChange={(e) => setDevice_password(e.target.value)} />
									</div>
								</div>

								<hr class="my-3" />

								<div class="flex justify-center">
									<table class="table table-hover ">
										<tbody>
											<tr>
												<td colspan="1">
													<p class="text-center">Please Check <br /> if your Device is Liquid Damaged</p>
												</td>
												<td colspan="3">
													<Switch size="lg" name="cum" onClick={() => setDevice_LiquidDamaged(!device_LiquidDamaged)} />
												</td>
											</tr>
										</tbody>
									</table>
								</div>

								<hr class="my-2" />

								<div class="flex justify-center">
									<table class="table table-hover">
										<tbody>
											<tr>
												<td>

													<p class="text-center text-ellipsis">Please Check <br /> if you need Expidited Service<br /> (Mail a check for $50 <br /> along with your device <br />to ensure your place)</p>
												</td>
												<td class="my-auto">
													<Switch size="lg" name="cum" onClick={() => setExpiditedService(!expiditedService)} />
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div class="text-center" >
								</div>

								<hr class="my-2" />

								<div>
									<p class="text-center">
										Price is based on weight and size
									</p>
									{returnShippingMethod == "USPS First class" ? <>
										<p class="text-center">
											Only valid for packages below 16oz
										</p>
									</> : <></>}
									<div class="flex justify-center">
										<Select class="text-center text-black" value={returnShippingMethod} onChange={(e) => setReturnShippingMethod(e.target.value)}>
											<option>Return Shipping Method</option>
											<option>USPS Express</option>
											<option>USPS Priority (1-3 days)</option>
											<option>USPS First class</option>
										</Select>
									</div>
								</div>

								<hr class="my-2" />

								<div>
									<FilePond
										files={userUploadedFiles}
										allowMultiple={true}
										onupdatefiles={(fileItems) => {
											setUserUploadedFiles(fileItems.map((fileItem) => fileItem.file))
										}}
									/>
								</div>
								<div class="flex justify-around mt-6">
									<Button onClick={() => setActiveStep(activeStep - 1)}>
										Back
									</Button>
									<Button onClick={() => setActiveStep(activeStep + 1)} isDisabled={checkPartTwo()}>
										Continue
									</Button>
								</div>
							</div>
						</div>
					</>
				)
				break;
			case (3):
				return (<>
					<p class="font-bold text-xl">Terms & Conditions</p>
					<div class="flex justify-center xs:h-[500px] md:h-[900px] overflow-y-scroll" >
						<div class="w-9/12 text-left">

							<p><strong>Repair Risks</strong><br />
								Electronic repairs are unpredictable. Your device may be beyond repair or may be permanently damaged during repair and rendered useless. Circuit board components deteriorate over time and can fail without warning especially on liquid damage devices where components can short circuit, oxidize, corrode and rust over time.&nbsp;</p>

							<p>Repairs on devices with glued-on screens such as iPads involve prying the screen to access internal components. Screens are very delicate and can crack or break during the prying process. We are highly experienced and the risk of screen breaking is minimal, but glass can break and risks do exist.&nbsp;&nbsp;&nbsp;<br />
								Touch id / Face id on apple devices may fail during repair and deemed unusable. Although this is not common, it can happen depending on the device condition.&nbsp;&nbsp;<br />
								Integrated GPU on laptops and AIO computers can fail without warning especially on older devices such as 2011 Macbooks/iMacs. HP, Dell, Toshiba, and other devices with known GPU problems of any year make and model.</p>

							<hr class="my-3" />

							<p><strong>Estimates</strong><br />
								While we try to be as thorough as possible with all estimates, we do not guarantee that our estimate is all-inclusive and final. Often, it is very difficult or impossible to identify every problem affecting a device until some work is performed. Our estimates may evolve or change during the course of servicing your device. If our technicians need to update the estimate, we will let you know as soon as possible we continue the service. All changes MUST be approved by you before we move on with any work. Our initial estimate will always remain valid within the scope of the services it was originally attached to, though we may advise you that the original service may have become unnecessary or unlikely to resolve the issue.</p>

							<hr class="my-3" />

							<p><strong>Limited Shop Warranty</strong><br />
								We offer a 60 day warranty on all repairs. If for any reason an issue from the original work order recurs within 60 days, we will perform the service again at no extra charge. All parts used to service your device&nbsp; is also guaranteed for 60 days from the date of the service. The guarantee does not cover issues that may develop within the guarantee period that are not related to services performed or to the original issue or symptom diagnosed and repaired.</p>

							<hr class="my-3" />

							<p><strong>Warranty Exclusions</strong><br />
								- We do not offer warranties or guarantees, explicit or implicit, on any of the following:<br />
								- Any service using parts not purchased through Tech Chimp Electronics<br />
								- Any software issues, including virus removal, Operating system installation<br />
								- New symptoms/issues not directly tied to the original service within the 60 day guarantee period<br />
								- Installing new hardware or modifying existing hardware in the 60 day guarantee period voids the Tech Chimp Electronics</p>

							<hr class="my-3" />

							<p><strong>Limited Shop Warranty</strong><br />
								Recurrence of original symptoms or issues caused by user error or negligence in the 30 day guarantee period, including but not limited to physical damage (drops, crushing, exposure to temperature extremes), liquid damage (spills on and liquid immersion of the device), electrical damage (improper grounding, contact with poorly performing or damaged electrical networks), and damage caused through installation or use of harmful software components (viruses, malware, spyware), voids the Tech Chimp Electronics Limited Shop Warranty<br />
								NOTE: If your device is physically tampered with or damaged within the warranty period, the Tech Chimp Electronics Limited Warranty is void. This includes but is not limited to cracked screens, dents to the casing, internal damage not present at time of original repair, attempts to open or modify the device, using non original charging cables to charge your device,&nbsp; or any other action, accidental or intentional, that could cause our repair to fail.&nbsp;<br />
								Some services performed by Tech Chimp Electronics may void your manufacturer's warranty. By accepting service from Tech Chimp Electronics, you understand and agree that we are not held liable for voiding your device manufacturers warranty.</p>

							<hr class="my-3" />

							<p><strong>Warranty Repairs</strong><br />
								If your device malfunctions or fails within 60 days from the time that you received the device, we will perform the repair again at no extra cost to you. The issue must be related to the original work order. If the issue is unrelated, you will be notified about repair cost before we move forward with the repair. No refunds are issued before we attempt the repair again so we can verify the validity of the claim. Refunds are only issued if we are not able to fix your device minus the repair attempt fee and return shipping. See repair attempt fee section of our terms for more details.. If your device qualifies for the warranty repair, you are responsible for shipping the device back to us and we will cover return shipping.</p>

							<hr class="my-3" />

							<p><strong>Estimate and Repair Time</strong><br />
								We pride ourselves on the speed of our repairs, however many of the factors that determine the length of your repair are beyond our control. As such, we will attempt to service your device as soon as possible in the order it was received. Many of our repairs are completed in 1-48 hours, however we offer no guarantees of how long the service will take. Any references to service times on our website or in promotional materials are our best estimates based on previous experience and are not meant to represent an exact time frame or offer any guarantees of service time.</p>

							<hr class="my-3" />

							<p><strong>Replacement Parts Procedure&nbsp;</strong><br />
								If a service requires parts to complete, we will contact and inform you of the need prior to ordering any parts. We will explain the part needed, why it’s necessary, any associated costs, and give an estimate of when the part will likely arrive. Due to shipping times being beyond our control, our estimate is a best guess and is not intended to guarantee arrival by a specific time. If you would like to hold on to your device until parts come in, a non-refundable deposit of 50% of the cost of the ordered parts will be required. Tech Chimp Electronics will generally not use parts not purchased by the customer. This is due to our inability to verify that the parts are functional and will provide a good fit for your device. Any replacement parts not supplied by the customer are not covered by any kind of warranty or guarantee except as might be provided by the part manufacturer. By providing your own parts, you acknowledge that you understand and agree that any work we provide is not covered by the Tech Chimp Electronics Limited Shop Warranty or any other guarantee or assurance, explicit or implicit. You also agree to waive any liability for damage to your device caused by faulty parts or other part incompatibilities.<br />
								<br />

								<br class="my-1" />

								<strong>Repair Attempt Fee</strong><br />
								We charge a repair attempt fee for most devices that involve motherboard repairs,&nbsp; data recovery or devices that had prior repair attempts. If repair is unsuccessful or data recovery is not possible, or the device was previously worked on before it arrived at our shop&nbsp; you will be charged a repair attempt fee ranging from $40-$65 to cover the time spent working on your device.&nbsp;</p>

							<hr class="my-3" />

							<p><strong>Data&nbsp;</strong><br />
								Tech Chimp Electronics does not guarantee the security or safety of your data. While we take every precaution possible to make sure the integrity of your data is unaffected, we cannot assume liability for any lost data as a result of services performed by Tech Chimp Electronics.<br />
								<br />
								If we are aware that a procedure may result in loss of data, we will inform you of the possibility, what data may be affected, and will offer to back your data up at an additional cost. However, due to the complex nature of electronic devices, we cannot in advance predict what may happen to your data in every situation. We strongly encourage you to back up any important files and documents before you drop off or mail in your device for service.</p>

							<hr class="my-3" />

							<p><strong>Pickup time limit and storage</strong><br />
								Due to our limited storage capacity, we will hold on to devices for up to 60 days after we contact you to pick up your device. After the 60 days period, if we have not heard from you, we will consider your device abandoned and Tech Chimp Electronics will have the right to sell the device to recover service cost and parts used to fix your device, or we’ll recycle the device if it’s non functional. We cannot guarantee that your equipment will not be discarded after the initial 60 day period, so it is critical that you pick up your equipment on time or make arrangements with Tech Chimp Electronics to store your equipment until you can pick it up.&nbsp; If you make arrangements to pick up after 60 days, You will be billed at $40 a month for storage .&nbsp;</p>

							<hr class="my-3" />
							<br />
							<p>By mailing in your device, you are agreeing to the terms mentioned here and understand the risks involved. You also acknowledge that Tech Chimp Electronics will not be held responsible for any damage your device sustains or Data loss as a result of the repair. If your device powers on, we highly recommend that you backup your data before you ship it to us</p>
						</div>
					</div>
				</>)
			case (4):
				return (<>
					<div class="xs:h-[350px] md:h-[600px]">
						<p class="text-black text-center text-lg font-bold">Please Confirm your Input</p>
						<table class="table table-hover sm:w-[500px] md:w-[700px] ">
							<tbody class="overflow-y-scroll">
								<tr>
									<td colspan="2" class="text-center text-white bg-slate-700 rounded">
										<strong>Contact Information</strong>
									</td>
								</tr>
								<tr>
									<td>
										<strong>Name</strong>
									</td>
									<td class="xs:max-w-[150px] truncate">
										<div>
											<Input id="userName" type="text" autocomplete="name" required class="w-full text-black border-b-gray-300 bg-transparent px-3 py-2 focus:outline-none" value={userName} onChange={(e) => setUserName(e.target.value)} />
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<strong>Business Name</strong>
									</td>
									<td class="truncate">
										<div>
											{userBusinessName.length > 0 ? <>
												<Input id="userBusinessName" type="text" autocomplete="name" class="w-full text-black border-b-gray-300 bg-transparent px-3 py-2 focus:outline-none" value={userBusinessName} onChange={(e) => setUserBusinessName(e.target.value)} />
											</> : <>
												<Input id="userBusinessName" type="text" autocomplete="name" class="w-full text-black border-b-gray-300 bg-transparent px-3 py-2 focus:outline-none" placeholder={"None"} onChange={(e) => setUserBusinessName(e.target.value)} />
											</>}
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<strong>Email</strong>
									</td>
									<td>
										<Input id="userEmail" type="text" autocomplete="name" required class="w-full text-black border-b-gray-300 bg-transparent px-3 py-2 focus:outline-none" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
									</td>
								</tr>
								<tr>
									<td>
										<strong>Address</strong>
									</td>
									<td class="xs:max-w-[150px] truncate">
										<Input id="userAddress" type="text" autocomplete="name" required class="w-full text-black border-b-gray-300 bg-transparent px-3 py-2 focus:outline-none" value={userAddress} onChange={(e) => setUserAddress(e.target.value)} />
									</td>
								</tr>
								<tr>
									<td>
										<strong>City</strong>
									</td>
									<td class="xs:max-w-[150px] truncate">
										<Input id="userCity" type="text" autocomplete="name" required class="w-full text-black border-b-gray-300 bg-transparent px-3 py-2 focus:outline-none" value={userCity} onChange={(e) => setUserCity(e.target.value)} />
									</td>
								</tr>
								<tr>
									<td>
										<strong>State</strong>
									</td>
									<td class="xs:max-w-[150px] truncate">
										<Input id="userState" type="text" autocomplete="name" required class="w-full text-black border-b-gray-300 bg-transparent px-3 py-2 focus:outline-none" value={userState} onChange={(e) => userState(e.target.value)} />
									</td>
								</tr>
								<tr>
									<td>
										<strong>Postal Code</strong>
									</td>
									<td>
										<Input id="userWentPostal" type="text" autocomplete="name" required class="w-full text-black border-b-gray-300 bg-transparent px-3 py-2 focus:outline-none" value={userWentPostal} onChange={(e) => setUserWentPostal(e.target.value)} />
									</td>
								</tr>
								<tr>
									<td>
										<strong>Refferal</strong>
									</td>
									<td class="truncate">
										{userReferral.length > 0 ? <>
											<Input id="userReferral" type="text" autocomplete="name" class="w-full text-black border-b-gray-300 bg-transparent px-3 py-2 focus:outline-none" value={userReferral} onChange={(e) => setUserReferral(e.target.value)} />

										</> : <>
											<Input id="userReferral" type="text" autocomplete="name" class="w-full text-black border-b-gray-300 bg-transparent px-3 py-2 focus:outline-none" placeholder={"None"} onChange={(e) => setUserReferral(e.target.value)} />
										</>}
									</td>
								</tr>
								<tr>
									<td colspan="2" class="text-center text-white bg-slate-700">
										<strong>Device Details</strong>
									</td>
								</tr>
								<tr>
									<td>
										<strong>Issue Subject</strong>
									</td>
									<td class="xs:max-w-[150px] truncate">
										<Input id="device_IssueSubject" type="text" autocomplete="name" required class="w-full text-black border-b-gray-300 bg-transparent px-3 py-2 focus:outline-none" value={device_IssueSubject} onChange={(e) => setDevice_IssueSubject(e.target.value)} />
									</td>
								</tr>
								<tr>
									<td>
										<strong>Issue Details</strong>
									</td>
									<td class="xs:max-w-[150px] truncate">
										<Textarea id="device_IssueDetails" required class="w-full text-black border-b-gray-300 bg-transparent px-3 py-2 focus:outline-none" value={device_IssueDetails} onChange={(e) => setDevice_IssueDetails(e.target.value)}></Textarea>
									</td>
								</tr>
								<tr>
									<td>
										<strong>Device Make & Model</strong>
									</td>
									<td class="xs:max-w-[150px] truncate">
										<Textarea id="device_Make" required class="w-full text-black border-b-gray-300 bg-transparent px-3 py-2 focus:outline-none" value={device_Make} onChange={(e) => setDevice_Make(e.target.value)}></Textarea>
									</td>
								</tr>
								<tr>
									<td>
										<strong>Password</strong>
									</td>
									<td class="truncate">
										{device_password.length > 0 ? <>
											<Input id="device_password" type="text" autocomplete="name" required class="w-full text-black border-b-gray-300 bg-transparent px-3 py-2 focus:outline-none" value={device_password} onChange={(e) => setDevice_password(e.target.value)} />
										</> : <>
											<Input id="device_password" type="text" autocomplete="name" required class="w-full text-black border-b-gray-300 bg-transparent px-3 py-2 focus:outline-none" placeholder={"None"} onChange={(e) => setDevice_password(e.target.value)} />
										</>}
									</td>
								</tr>
								<tr>
									<td>
										<strong>Liquid Damage?</strong>
									</td>
									<td>
										<Switch size="lg" name="cum" onClick={() => setExpiditedService(!device_LiquidDamaged)} />
									</td>
								</tr>
								<tr>
									<td>
										<strong>Expedited?</strong>
									</td>
									<td>
										<Switch size="lg" name="cum" onClick={() => setExpiditedService(!expiditedService)} />
									</td>
								</tr>
								<tr>
									<td>
										<strong>Return Shipping Service</strong>

										<p class="text-center text-[10px]">
											Price is based on weight and size
										</p>
										{returnShippingMethod == "USPS First class" ? <>
											<p class="text-center">
												Only valid for packages below 16oz
											</p>
										</> : <></>}
									</td>
									<td class="xs:max-w-[150px] truncate">
										<div>

											<div class="flex justify-center">
												<Select class="text-center text-black xs:text-[10px]" value={returnShippingMethod} onChange={(e) => setReturnShippingMethod(e.target.value)}>
													<option>Return Shipping Method</option>
													<option>USPS Express</option>
													<option>USPS Priority (1-3 days)</option>
													<option>USPS First class</option>
												</Select>
											</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
						<FilePond
							files={userUploadedFiles}
							allowMultiple={true}
							onupdatefiles={(fileItems) => {
								setUserUploadedFiles(fileItems.map((fileItem) => fileItem.file))
							}}
						/>
						<div class="m-2 flex justify-center">
							<HCaptcha
								sitekey="f3c5fddd-b79c-4860-a055-4a4ca30248c4"
								theme={"dark"}
								onVerify={() => setCheckFormState(false)}
							/>
						</div>

						<Button colorScheme="blue" isDisabled={checkFormState} onClick={() => handleSubmit()}>
							Submit Request
						</Button>
					</div>

				</>)
		}
	}

	function thePrestige() {
		switch (props.Icon) {
			case ("Icon"):
				return (<>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width={32} height={32} fill="currentColor"><path d="M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,.7-3.25Z" opacity="0.2"/><path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z" 
					class="hover:cursor-pointer" onClick={() => {
						onOpen()
						LoadDraft()
					}} /></svg>
				</>)
			case ("Text"):
				return (<>
					<Text class="hover:cursor-pointer xs:text-[14px] sm:text-[20px] sm:p-3 md:text-[22px] md:p-3 opacity-75 rounded hover:opacity-100 hover:bg-slate-400 hover:drop-shadow-lg" onClick={() => {
						onOpen()
						LoadDraft()
					}}>Mail In Form</Text>
				</>)
			case ("Button"):
				return (<>
					<Text onClick={() => {
						onOpen()
						LoadDraft()
					}}>Click to Start the Quick & Easy Mail-In Process Today!</Text>
				</>)
		}
	}
	return (
		<>

			{thePrestige()}

			<Modal onClose={onClose} isOpen={isOpen} isCentered size={"full"} color={"black"} variant={"dark"}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						<div className="flex justify-center text-black">
							<Text className="text-[36px]">
								Submit A Mail In Form
							</Text>
						</div>
						<div className="flex justify-center">
							<Stepper index={activeStep} className="text-black">
								{steps.map((step, index) => (
									<Step key={index}>
										<StepIndicator>
											<StepStatus
												complete={<StepIcon />}
												incomplete={<StepNumber />}
												active={<StepNumber />}
											/>
										</StepIndicator>

										{/* <StepDescription>{step.description}</StepDescription> */}

										<StepSeparator />
									</Step>
								))}
							</Stepper>
						</div>


					</ModalHeader>
					<ModalCloseButton color={"black"} />
					<ModalBody className="flex justify-center text-black">
						<div>
							<div className="text-black text-center overflow-auto h-5/6">
								{renderSwitch(activeStep)}
							</div>
							<div class="flex justify-between mt-4">
								<Button onClick={() => DeleteDraft()} colorScheme="red">
									Delete
								</Button>

								{activeStep == 3 ? <>
									<Button onClick={() => setActiveStep(activeStep + 1)}>
										I Agree
									</Button>
								</> : <></>}

								<Button onClick={() => SaveDraft()} colorScheme="teal">
									Save as Draft
								</Button>
							</div>
						</div>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}