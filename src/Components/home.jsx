import "@fontsource/inter";
import { AiFillPhone } from "react-icons/ai";
import { SiGooglemessages, SiTrustpilot } from "react-icons/si"
import { MailInModal } from "./mailin";
import { Slideshow } from "./slideshow"
import { Head } from "./header";
import { Footer } from "./footer";
import { Button } from "@chakra-ui/react";
export const Home = () =>{
	return(
		<>
			<Head/>
			<div class="">
				<hr class="!border-t-2 my-[1px]" />
				<div class="flex justify-center">
					<div class="xs:w-[375px] sm:w-[700px] md:w-11/12 xs:mt-10">
						<Slideshow/>
					</div>
				</div>
				<a href="https://paypal.me/theepicpebbles" target="_blank">
					<div class="text-center bg-blue-500 my-6 py-3">
							Buy me a coffee ☕ (Click me!)
					</div>
				</a>
				<a href="https://www.trustpilot.com/review/techchimp.repair" target="_blank">
					<div class="flex justify-center bg-green-600 my-6 py-3">
							Check out our Reviews On Trust Pilot <SiTrustpilot/>
					</div>
				</a>
				<div>
					<div class="xs:text-left">
						<div class="sm:justify-center sm:flex">
							<img src={"./Images/Services.png"} class="xs:scale-75 lg:scale-100 "/>
						</div>
						<div  class="xs:text-center xs:text-[10px] sm:text-[18px] pt-2">
							<h3><u>Disclaimer:</u> we do not work on:<br/>
								Cell Phones, Tablets, or wearables<br/>
								unless it's for <u>solder work only.</u></h3>
						</div>
						<div class="xs:flex xs:justify-center xs:mt-2 sm:text-[20px] md:text-[20px]">
							<div class="sm:flex md:w-10/12 justify-around">
								<ul class="sm:ml-6">
									<li>
										Virus Removal
									</li>
									<li>
										Data Recovery
									</li>
									<li>
										Data Transfers
									</li>
									<li>
										New Computer Set-up
									</li>
									<li class="flex flex-row items-end">
										<div class="flex flex-col">
											<span>Custom Computer Builds</span>
											<span class="xs:text-[12px] sm:text-[17px] md:text-[12px]">(Business, Gaming, & Personal)</span>						
										</div>
									</li>
									<li>
										Screen Replacements
									</li>
									<li>
										Keyboard Replacements
									</li>
									<li>
										Battery Replacements
									</li>
									
								</ul>
								
								<ul class="sm:ml-2 text-right" dir="rtl">
									<li>
										Spill / Liquid Damage &nbsp;
									</li>
									<li>
										Laptop Repair
									</li>
									<li>
										Graphics Cards
									</li>
									<li>
										Computer Repair
									</li>
									<li class="flex flex-row items-end">
										<div class="flex flex-col">
											<span>Game Systems</span>
											<span class="xs:text-[12px] sm:text-[17px] md:text-[12px] absolute]">(XBOX, Play Station, Nintendo & more)</span>
										</div>	
									</li>
									<li>
										Cracked / Broken Motherboards
									</li>
									<li>
										Any & All Solder Work
									</li>
									<li>
										Any & All Electronics Repair
									</li>
									
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div class="hidden">
						<div class="bg-[aliceblue] text-center rounded text-black">
							<h1> 🔧 Tech Chimp <br/>Your Trusted Electronics Repairmen! </h1>
							<div class="flex justify-center">
								Call 
								<a href="tel:+16304868413" class="flex justify-center">
									<AiFillPhone size={"32px"} />
								</a> OR
								Text 
								<a href="sms:+16304868413" class="flex justify-center">
									<SiGooglemessages/>
								</a>
							</div>	
							(630)486-8413 to schedule your repair today! 🔧
						</div>
						
					</div>
					<div id="section2">
						<div className="flex justify-center">
							<hr class="xs:my-4 w-10/12"/>
						</div>
						<div class="">
							<div class="flex justify-center xs: xs:w-1/2 sm:w-100 xs:ml-[25%] ">
								<img src={"./Images/Quality.png"} class="xs:scale-[.85] object-contain"/>
								<img src={"./Images/Repair.png"} class="xs:scale-75 md:scale-[.88]"/>
							</div>
							<div class="flex justify-center">
								<img src={"./Images/Services.png"} class="xs:scale-50 md:scale-[.70]"/>
							</div>

							<div class="flex justify-center">
								<div class="w-10/12">
									<p class=" xs:text-md xs:text-center break-words mx-2 sm:text-lg md:text-[26px] ">
										Experiencing electronic troubles? Tech Chimp's got your back! We're electronics repair masters, specializing in motherboard repair and expert soldering. Trust our skilled team to revive your devices with care! ⚙️
									<br/>
									Motherboard Magic - From power to connections, we've got it covered. Tech Chimp's soldering is pure wizardry! 🛠️<br/><br/>
									😊 Stellar Service - We treat your devices like our own, keeping you in the loop. Excellence is our priority! <br/><br/>
									💡 Trust the Best - Tech Chimp: Motherboard Repair and Soldering Experts. <br/> Call/text <strong>(630)486-8413</strong> to experience our skills. Revive your electronics with Tech Chimp! 💡⚙️
									</p>
								</div>
							</div>
						</div>
						<div class="section2">
							<div>
								<div className="flex justify-center">
									<hr class="xs:my-4 w-10/12"/>
								</div>
								<div class="flex justify-center">
									<img src={"./Images/60 Day.png"} class="xs:scale-[.7]"/>
								</div>

								<div class="flex justify-center">
									<img src={"./Images/Warranty.png"} class="xs:scale-75 object-contain"/>
								</div>

								<div class="flex justify-center">
									<div class="w-10/12">
										<p class="xs:text-md sm:text-lg md:text-[26px] xs:text-center ">
											We are so confident that you’ll love our service and be satisfied with our work, that we offer a 60-day warranty on all of our repairs. 
										</p>
									</div>
								</div>
								
							</div>
						</div>
						<div className="flex justify-center">
							<hr class="xs:my-4 w-10/12"/>
						</div>
						<div className="mb-4">
							<div class="flex justify-center">
								<img src={"./Images/Not Local.png"} class="xs:scale-75"/> <img src={"./Images/questionMark.png"} class="h-[50px] m-2 -ml-10 object-contain"/> 
							</div>

							<div class="flex justify-center ">
								<div class="w-10/12">
									<p class="xs:text-md  sm:text-lg md:text-[26px] xs:text-center ">
										It would be a pleasure to serve you through our Mail-In Repair Service! 
										Our unique Mail-In Service makes it easy to repair your device from the comfort of your home. Our customers rave about this service, and feel comfortable knowing that their devices are in good hands. Send us your device today and receive impeccable service you can trust. 
									</p>
								</div>
							</div>
							
							<div class="xs:flex xs:justify-center">
								<Button class="sm:text-lg md:text-[26px]" colorScheme="blue" variant={"solid"}>
									<MailInModal Icon="Button"/> 
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer/>
		</>
	)
}