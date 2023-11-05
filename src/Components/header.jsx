import { MailInModal } from "./mailin"
import { SiFacebook, SiEbay, SiGooglemessages} from "react-icons/si"
import { AiFillInstagram, AiFillPhone } from "react-icons/ai"
import { IoIosMail } from "react-icons/io"
import { Link } from "react-router-dom"
export const Head = () =>{
	return(
		<>
			<div class="bg-red-500 text-center">
				🚧 The site is currently under construction, please email <b><a href="mailto:inquiries@techchimp.repair" target="_blank">inquiries@techchimp.repair</a></b> for <u><b>any</b></u> issues you may have 🚧
			</div>
			<div class="bg-[#0659A7] flex xs:p-2 w-100 xs:justify-center">
				<div class="xs:hidden md:flex sm:pt-[4%] md:w-1/4 sm:justify-between  px-2">
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
				<Link to={"/"} class="xs:h-[50px] sm:h-[100px] md:h-[80px] flex xs:justify-evenly 2xl:justify-center xs:mb-[50px] md:w-1/2">
					<img src={"./Images/Logo-transparent-noText.png"} class="xs:h-[105px] sm:h-[155px] md:h-[135px] object-contain"/>
					<img src={"./Images/Font.png"} class="xs:h-[65px] sm:h-[120px] md:h-[100px] xs:mt-4 object-contain"/>
				</Link>
				<div class="xs:hidden md:flex md:w-1/4 md:justify-between sm:pt-[4%] px-2">
					<MailInModal Icon="Icon"/>
					<a href="mailto:inquiries@techchimp.repair">
						<IoIosMail size={"32px"}/>
					</a>
					<a href="tel:+16304868413">
						<AiFillPhone size={"32px"}/>
					</a>
					<a href="sms:+16304868413">
						<SiGooglemessages size={"32px"}/>
					</a>
				</div>
			</div>

			<nav class="xs:flex xs:absolute md:bottom-auto xs:w-full xs:justify-evenly xs:p-3 xs:backdrop-blur-sm sm:p-2 md:p-4 z-20">
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
				<Link to="/about">
					<button type="button" class="btn variant-filled-primary rounded xs:text-[14px] sm:text-[20px] sm:p-3 md:text-[22px] md:p-3 opacity-75 hover:opacity-100 hover:bg-slate-400 hover:drop-shadow-lg">
						About
					</button>
				</Link>
			</nav>
		</>
	)
}