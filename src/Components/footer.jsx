import { Button } from "@chakra-ui/react"
import { SiGooglemessages , SiFacebook, SiEbay} from "react-icons/si"
import { AiFillPhone, AiFillInstagram } from "react-icons/ai"
import { IoIosMail } from "react-icons/io"
import { MailInModal } from "./mailin"
import moment from "moment"
import { Link } from "react-router-dom"
export const Footer = () => {
	return(<>
		<div className="grid gap-4 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#07253a] p-4 border-2 border-slate-700">
			<div className="flex justify-center border-2 xs:border-b-slate-700 border-transparent lg:border-b-transparent">
				<div class="grid gap-6 ">
					<a href="https://www.facebook.com/techchimpllc" target="_blank">
						<SiFacebook size={"32px"}/> 
					</a>
					<a href="https://www.instagram.com/techchimp_llc" target="_blank">
						<AiFillInstagram size={"32px"}/>
					</a>
					<a href="https://www.ebay.com/usr/tech-chimp" target="_blank">
						<SiEbay size={"32px"}/>
					</a>
				</div>
			</div>
			<div className="flex justify-center border-2 xs:border-b-slate-700 border-transparent lg:border-b-transparent">
				<div class="text-center grid gap-4 pb-4">
					<Link to="/">
						<button type="button" class="btn variant-filled-primary rounded xs:text-[14px] sm:text-[20px] sm:p-3 md:text-[22px] md:p-3 opacity-75 hover:opacity-100 hover:bg-slate-400 hover:drop-shadow-lg">
							Home
						</button>
					</Link>
					<MailInModal Icon="Text"/>
					<Link to="/contact">
						<button type="button" class="btn variant-filled-primary rounded xs:text-[14px] sm:text-[20px] sm:p-3 md:text-[22px] md:p-3 opacity-75 hover:opacity-100 hover:bg-slate-400 hover:drop-shadow-lg">
							Contact Us
						</button>
					</Link>
					<div>
						<Link to="/about">
							<button type="button" class="btn variant-filled-primary rounded xs:text-[14px] sm:text-[20px] sm:p-3 md:text-[22px] md:p-3 opacity-75 hover:opacity-100 hover:bg-slate-400 hover:drop-shadow-lg">
								About
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div className="flex justify-center border-2 xs:border-b-slate-700 border-transparent md:border-b-transparent">
				<div className="grid gap-4">
					<div className="flex justify-center">
						<Link to="/contact">
							<Button>
								Contact Us
							</Button>
						</Link>
					</div>
					<div className="flex justify-center">
						<a href="mailto:inquiries@techchimp.repair" className="flex justify-center">
							Email us @ <strong>inquiries@techchimp.repair</strong><IoIosMail size={"32px"}/>
						</a>
					</div>
					<div className="flex justify-center">
						<a href="tel:+16304868413" className="flex justify-center">
							Call us @ <strong>(630)486-8413</strong><AiFillPhone size={"32px"}/>
						</a>
					</div>
					<div className="flex justify-center">
						<a href="sms:+16304868413" className="flex justify-center">
						Text us @ <strong>(630)486-8413</strong><SiGooglemessages size={"32px"}/>
						</a>
					</div>
				</div>
			</div>
			<div className="flex justify-center border-2 xs:border-b-slate-700 border-transparent md:border-b-transparent">
				<iframe class="md:w-[400px] lg:w-[250px] rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5641595.313743701!2d-95.56474546487217!3d38.34154695350313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b2d386f6e2619%3A0x7f15825064115956!2sIllinois!5e0!3m2!1sen!2sus!4v1698962306159!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			</div>
		</div>
		<div class="text-center bg-blue-500"> Site Created by <a href="https://github.com/wgauss" target="_blank">Tech Chimp</a> | All rights reserved &#169; 2018-{moment().year()}</div>
	</>)
}