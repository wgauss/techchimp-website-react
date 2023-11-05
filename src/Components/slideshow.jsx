import {
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
	Box,
	Image,
	AspectRatio,
	Text
  } from '@chakra-ui/react'
import { useEffect } from 'react';
import { AiTwotoneEye } from "react-icons/ai"
const Images = [
	{"location" : "./Images/Showcase/setup.jpg", "descLong": "These are the tools I use to get your device, better than factory!", "descSmol": "Setup"},
	{"location" : "./Images/Showcase/pic-selected-230719-1919-52.png", "descLong": "Xbox HDMI Replacement", "descSmol": "HDMI"},
	{"location" : "./Images/Showcase/angelaSig.png", "descLong": "Nintendo Switch Charging Port Replacement", "descSmol": "USB-C"},
	{"location" : "./Images/Showcase/beforeAfter_ps4-fan-connector.png", "descLong": "PS4 Fan Connector Repair", "descSmol": "Fan Connector"},
	{"location" : "./Images/Showcase/pic-selected-230725-2048-32.png", "descLong": "Laptop Charging Port Replacement", "descSmol": "Laptop Charging Port"},
]
export const Slideshow = () => {
	const { activeStep, setActiveStep } = useSteps({
		index: 0,
		count: Images.length,
		});
	useEffect(()=>{
		const interval = setInterval(()=>{
			setActiveStep((activeStep + 1) % Images.length)
		},8000)
		return () => clearInterval(interval)
	}, [])
	function handleClick(index){
		setActiveStep(index)
	}
		
	return(<>
		<div class="slideShowContainer">
			<div class="images">
				<div class="flex justify-center bg-[#07253a] md:h-[600px] lg:h-[800px] xl:h-[900px]">
					<Image src={Images[activeStep].location} class="duration-200 ease-linear w-full object-contain "/>
				</div>
				<div class="text-center bg-[#2c6084] rounded font-bold p-2">
					<Text>
						{Images[activeStep].descLong}
					</Text>
				</div>
			</div>
			<div class="p-2 bg-[#07253a]">
				<div class="xs:min-w-full sm:min-w-full xs:overflow-x-scroll md:overflow-x-hidden">
					<Stepper index={activeStep} >
						{Images.map((slide, index) => (
							<Step key={index} onClick={() => handleClick(index)}>
							<StepIndicator >
								<StepStatus
								complete={<Image class="hover:cursor-pointer rounded-full object-cover" src={Images[index].location} />}
								incomplete={<Image class="hover:cursor-pointer rounded-full object-cover" src={Images[index].location} />}
								active={<AiTwotoneEye class="hover:cursor-pointer " />}
								/>
							</StepIndicator>

							<Box flexShrink='0'>
								<StepDescription>{slide.descSmol}</StepDescription>
							</Box>

							<StepSeparator />
							</Step>
						))}
					</Stepper>
				</div>
			</div>
		</div>
	</>)
}