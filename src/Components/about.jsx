import { Head } from "./header"

export const About = () =>{
	return(
		<>
			<Head/>
			<div class="flex justify-center xs:py-10 md:py-0 md:mt-[10%]">
				<div class="m-4 text-center w-10/12 md:text-[20px]">
					At Tech Chimp, we're not just your ordinary electronics repair service – we're your trusted specialists with a remarkable history of expertise spanning over five years in the industry. Our journey began with a simple mission: to breathe new life into electronics and empower our customers with seamless, reliable repairs.
				
					<h1>
						Why Choose Us?
					</h1>
				
					<h2><br/>
						🛠️ Unmatched Expertise:
					</h2>
				
					With over five years of hands-on experience in electronics repair, we've seen it all. From intricate motherboard fixes to delicate soldering work, our technicians have honed their skills to perfection.
				
					<h2><br/>
						💼 Wide-ranging Specialization:
					</h2>
				
					We've evolved into masters of various electronics domains – laptops, gadgets, gaming consoles, and more. Tech Chimp is your comprehensive solution for all your repair needs.
				
					<h2><br/>
						🔧 The Soldering Wizards:
					</h2>
				
					Our secret sauce? It's our solder work. We've fine-tuned it into an art form, making complex fixes look like magic. When others say it's impossible, we say, "Let's make it happen!"
				
					<h2><br/>
						😊 Exceptional Service:
					</h2>
				
					Excellence is in our DNA. We treat your devices as if they were our own, ensuring each repair is executed with precision and care. Your satisfaction is our driving force.
				
					<h2><br/>
						🌟 Five Years of Trust:
					</h2>
				
					We've built lasting relationships with our valued customers over the years. Your trust has fueled our growth and pushed us to excel further.
				
					<br/>
				
					Discover the genuine impact that half a decade of unwavering commitment to electronics repair can bring. We believe your devices deserve nothing but the best, and that's exactly what we provide. Welcome to Tech Chimp, where expertise intersects with innovation, and your electronics are revitalized for a second lease on life.
				
					<br/>
					<br/>
				</div>
			</div>
			<div className="flex justify-center pb-10">
				<img SRC="./Images/construction.gif" alt="construction" class="object-contain"/>
			</div>
		</>
	)
}